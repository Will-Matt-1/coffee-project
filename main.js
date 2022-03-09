"use strict"

function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
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



let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

// creates variable to access addCoffeeSubmit button to later be used for event listener
let addCoffeeSubmitButton = document.querySelector('#addCoffeeSubmit');

// creates event listener for add coffee submit button to create new coffee object when clicked
addCoffeeSubmitButton.addEventListener('click', () => {
    addNewCoffee(createNewCoffee());
});

// test creating new coffee and pushing to coffees array.  working
// addNewCoffee(createNewCoffee());


tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);



