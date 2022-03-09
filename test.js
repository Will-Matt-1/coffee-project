"use strict"

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
let inputElement = document.getElementById("userInput");

// Listens to the keyup from user input (as user types, the array is filtered
inputElement.addEventListener("input", function () { //Listening to input textbox with id userInput
    //reads the current value in the input element and makes it uppercase
    let userInputText = inputElement.value.toUpperCase();
    //.filter takes coffees array and ...
    let filteredArray = coffees.filter(c => c.name.toUpperCase().indexOf(userInputText) > -1);
    //Takes list with coffee/roast names and applies filter capabilities and prints the list
    addList(filteredArray, list);
});