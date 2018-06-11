"use strict";

var subtitle = document.querySelector('.styles-menu__subtitle');

var menuItems = document.querySelectorAll('.styles-menu__item');

var flex = menuItems[0];
var flexPropertiesList = flex.nextElementSibling;

var grid = menuItems[1];;
var gridPropertiesList = grid.nextElementSibling;

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
  this.classList.toggle('styles-menu__item--big');
}

grid.addEventListener('click', hideNotGrid);

function hideNotGrid() {
  subtitle.classList.toggle('hidden');
  flex.classList.toggle('hidden');
  this.classList.toggle('styles-menu__item--big');
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



//  Hide Property Value Lists
var valueLists = document.querySelectorAll('.styles-menu__property-value-list');
// Attaches Event Listener to Previous Element Sibling || Property
valueLists.forEach(list => list.previousElementSibling
  .addEventListener('click', function() {
    list.classList.toggle('hidden')
  }));
  
//  Pull Property Name & Value and Set for Display
function setPropertyValue() {
  let propVal = `${this.name}: ${this.id};`;
  //  remember to remove console.log statement later
  console.log(propVal);
  if (display.style.cssText) {
    display.style.cssText += propVal;
  } else {
    display.style.cssText = propVal;
  }
}

//  Set Style Toggles for Every Property Value
function toggleStyle() {
  for (let i = 0; i < valueLists.length; i++) {
    let propertyValues = valueLists[i].querySelectorAll('input');
    propertyValues.forEach(item => item.addEventListener('change', setPropertyValue));
  }
}

toggleStyle();  