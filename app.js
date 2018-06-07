"use strict";

var subtitle = document.querySelector('.styles-menu__subtitle');

var menuItems = document.querySelectorAll('.styles-menu__item');

var flex = menuItems[0];
var flexProperties = flex.nextElementSibling;

var grid = menuItems[1];;
var gridProperties = grid.nextElementSibling;

var display = document.querySelector('.display');

var inputNumber = document.querySelector('input[type="number"]');

// var submitButton = document.querySelector('input[type="submit"]');

var displayFlex = document.getElementById('displayFlex');

subtitle.addEventListener('click', hideNotSubtitle);

function hideNotSubtitle() {
  flex.classList.toggle('hidden');
  grid.classList.toggle('hidden');
}

flex.addEventListener('click', hideNotFlex);

function hideNotFlex() {
  subtitle.classList.toggle('hidden');
  grid.classList.toggle('hidden');
}

grid.addEventListener('click', hideNotGrid);

function hideNotGrid() {
  subtitle.classList.toggle('hidden');
  flex.classList.toggle('hidden');
}

flex.addEventListener('click', toggleProperties);
grid.addEventListener('click', toggleProperties);

function toggleProperties() {
  this.nextElementSibling.classList.toggle('hidden');
}

function createBlock() {
  let newBox = document.createElement('div');
  newBox.classList.add('display__block');
  display.append(newBox);
}

function reset() {
  while (display.childElementCount > 0) {
    display.lastElementChild.remove();
  }
}

function pullNumber() {
  if (display.childElementCount > 0) {
    reset();
  }
  for (let i = 0; i < inputNumber.value; i++) {
      createBlock();
    }
}

// submitButton.addEventListener('click', pullNumber);

inputNumber.addEventListener('change', pullNumber);

displayFlex.addEventListener('change', function() { display.classList.toggle('display--flex') });

// radios respond to .checked
//  function that takes the var.name (flex-direction) 
var row = document.getElementById('row');
var reverseRow = document.getElementById('row-reverse');
var column = document.getElementById('column');
var reverseColumn = document.getElementById('column-reverse');

function setPropertyValue() {
  let propVal = `${this.name}: ${this.id};`;
  //  remember to remove console.log statement later
  console.log(propVal);
  display.style.cssText = propVal;
}

//  Hide Property Value Lists
var valueLists = document.querySelectorAll('.styles-menu__property-value-list');

valueLists.forEach(list => list.previousElementSibling
  .addEventListener('click', function() {
    list.classList.toggle('hidden')
  }));

//  Toggle Style for Every Property Value
function toggleStyle() {
  for (let i = 0; i < valueLists.length; i++) {
    let propertyValues = valueLists[i].querySelectorAll('input');
    propertyValues.forEach(item => item.addEventListener('change', setPropertyValue));
  }
}
toggleStyle();

