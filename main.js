"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<span class="nameSpan">' + coffee.name + " " + '</span>';
    html += '<span class="roastSpan">' + coffee.roast + " " + '</span>';
    html += '</div>';

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
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === 'all') {
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
    filteredCoffeesArr = filteredCoffees;
}

// creates new object with id, name, and roast properties from add coffee form
function createNewCoffee() {
    let newCoffeeObj = {
        id: coffees.length + 1,
        name: document.getElementById('addCoffeeName').value,
        roast: document.getElementById('addCoffeeRoast').value
    }
    return newCoffeeObj;
}

// pushes new coffee object to coffees array
function addNewCoffee(x) {
    coffees.push(createNewCoffee());
}

// creates new coffee object, pushes to coffees array, updates table in HTML
function createAddRenderNewCoffee(e) {
    e.preventDefault();
    addNewCoffee(createNewCoffee());
    tbody.innerHTML = renderCoffees(coffees);
    console.log(coffees)
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
        let li = document.createElement('div'); //Creates an individual li for each coffees.name
        li.textContent = item.name + ' ' + item.roast; //Adds the name and roast to each li
        element.appendChild(li); //Adds each li to the parent list
    });
}
//Calls array and prints on html page
addList(coffees, list);

/* TODO: Create Filtered Roast selection option */

// Listens to the keyup from user input (as user types, the array is filtered
document.getElementById("userInput").addEventListener("input", e => { //Listening to input textbox with id userInput
    //.filter takes coffees array and pulls name from coffees and makes sure it matches
    let filteredArray = filteredCoffeesArr.filter(c => c.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1);
    //Takes list with coffee/roast names and applies filter capabilities and prints the list
    addList(filteredArray, list);
});

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

// creates variable to access addCoffeeSubmit button to later be used for event listener
let addCoffeeSubmitButton = document.querySelector('#addCoffeeSubmit')

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);

// creates/adds/updates coffees array when new coffee submit button clicked
addCoffeeSubmitButton.addEventListener('click', createAddRenderNewCoffee);

