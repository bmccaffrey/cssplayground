'use strict';

var subtitle = document.querySelector('.styles-menu__subtitle');

var menuItems = document.querySelectorAll('.styles-menu__item');

var flex = menuItems[0];

var grid = menuItems[1];

var flexPropertiesList = flex.nextElementSibling;

var gridPropertiesList = grid.nextElementSibling;

var valueLists = document.querySelectorAll('.styles-menu__property-value-list');

var display = document.querySelector('.display');

var inputNumber = document.querySelector('input[type="number"]');

var displayFlex = document.getElementById('displayFlex');

function hide(elm1, /* optional */ elm2) {
  elm1.classList.toggle('hidden');
  if (elm2) {
    elm2.classList.toggle('hidden');
  }
}

function addClass(elm, className) {
  elm.classList.toggle(className);
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

//  Pull Property Name & Value and Set for Display
function setPropertyValue() {
  let propVal = `${this.name}: ${this.id};`;
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

subtitle.addEventListener('click', () => hide(flex, grid));

flex.addEventListener('click', () => hide(subtitle, grid));
flex.addEventListener('click', () => hide(flexPropertiesList));
flex.addEventListener('click', () => addClass(flex, 'styles-menu__item--big'));

grid.addEventListener('click', () => hide(subtitle, flex));
grid.addEventListener('click', () => hide(gridPropertiesList));
grid.addEventListener('click', () => addClass(grid, 'styles-menu__item--big'));

inputNumber.addEventListener('change', pullNumber);
displayFlex.addEventListener('change', function() {display.classList.toggle('display--flex');});
//  Hide Property Value Lists
// Attaches Event Listener to Previous Element Sibling || Property
valueLists.forEach(list => list.previousElementSibling.addEventListener('click', function() {list.classList.toggle('hidden');}));
toggleStyle();