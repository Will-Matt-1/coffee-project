"use strict"
/*
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
}
*/

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

// var roastSelection = document.querySelector('#roast-selection');

// duplicate line 71-74
// submitButton.addEventListener('click', updateCoffees);

let list = document.getElementById('coffeeList');

let addList = (array, element) => {
    element.innerHTML = "";
    array.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.name;
        element.appendChild(li);
    });
}

document.getElementById("userInput").addEventListener("input", e => {
    let filteredArray = coffees.filter(c => c.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1);
    addList(filteredArray, list);
});
addList(coffees, list);