"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; coffees.length - 1 >= i; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === 'all') {
            return coffee;
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else {
            return null;
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    filteredCoffeesArr = filteredCoffees;
}

var filteredCoffeesArr = [];
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
/* TODO: Create Filtered Coffee Array function */

// gets a reference to the coffeeList ul so we can add li's to it
let list = document.getElementById('coffees');

// Goes through to create a li for each coffee name/ roast type (printing the coffees array)
let addList = (array, element) => {  // create function with 2 variables
    element.innerHTML = ""; //clear element - otherwise it would add coffee
    array.forEach(item => { //Callback function for each element in the array
        let li = document.createElement('li'); //Creates an individual li for each coffees.name
        li.textContent = item.name + ' ' + item.roast; //Adds the name and roast to each li
        element.appendChild(li); //Adds each li to the parent list
    });
}


//Calls array and prints on html page
addList(coffees, list);

/* TODO: Create Filtered Roast selection option */

let tbody = document.querySelector('#coffees');
let roastSelection = document.querySelector('#roast-selection');
let submitButton = document.querySelector('#submit');
console.log(roastSelection);
// Listens to the keyup from user input (as user types, the array is filtered
document.getElementById("userInput").addEventListener("input", e => { //Listening to input textbox with id userInput
    //.filter takes coffees array and pulls name from coffees and makes sure it matches
    let filteredArray = filteredCoffeesArr.filter(c => c.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1);
    //Takes list with coffee/roast names and applies filter capabilities and prints the list
    addList(filteredArray, list);
});
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
