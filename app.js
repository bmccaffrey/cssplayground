'use strict';

var subtitle = document.querySelector('.styles-menu__subtitle');

var menuItems = document.querySelectorAll('.styles-menu__item');

var flex = menuItems[0];

var grid = menuItems[1];
// might redefine as document.querySelectorAll('.styles-menu__properties-list')[0];
var flexPropertiesList = flex.nextElementSibling;
// same
var gridPropertiesList = grid.nextElementSibling;
// all of the properties from both PropertiesList
var properties = document.querySelectorAll('.styles-menu__property');
// list of possible values; hidden under individual properties
var valueLists = document.querySelectorAll('.styles-menu__property-value-list');

var display = document.querySelector('.display');

var inputNumber = document.querySelector('input[type="number"]');

var displayFlex = document.getElementById('displayFlex');

var blocks = document.querySelectorAll('.display__block');

var boxNumbers= document.querySelectorAll('#boxNumber');

var individualProperties = ['align-self', 'flex-grow', 'flex-shrink', 'order'];

var target = null;





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

// remove Value Lists that are applied to individual elements and not the screen
function valueListTrim() {
  let x = [];
  for (let i = 0; i < 5; i++) {
    x.push(valueLists[i]);
  }
  valueLists = x;
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
  valueListTrim();
  for (let i = 0; i < valueLists.length; i++) {
    let propertyValues = valueLists[i].querySelectorAll('input');
    propertyValues.forEach(item => item.addEventListener('change', setPropertyValue));
  }
}

function setIndividualProperties(nodeList) {
  var properties = Array.from(nodeList);
  properties.shift();
  properties.forEach( prop => prop.addEventListener('change', function() {
    if (this.id) { var propVal = `${this.name}: ${this.id}`; }
    else { propVal = `${this.name}: ${this.valueAsNumber}`; }
    if (target.style.cssText) { target.style.cssText += propVal; }
    else { target.style.cssText = propVal; }
  }));
}


subtitle.addEventListener('click', () => hide(flex, grid));

flex.addEventListener('click', () => hide(subtitle, grid));
flex.addEventListener('click', () => hide(flexPropertiesList));
flex.addEventListener('click', () => addClass(flex, 'styles-menu__item--big'));

grid.addEventListener('click', () => hide(subtitle, flex));
grid.addEventListener('click', () => hide(gridPropertiesList));
grid.addEventListener('click', () => addClass(grid, 'styles-menu__item--big'));

// might need to add a test to see if it has the proper .nES
properties.forEach(prop => prop.addEventListener('click', () => addClass(prop, 'style-menu__property--big')));

inputNumber.addEventListener('change', pullNumber);
displayFlex.addEventListener('change', () => addClass(display, 'display--flex'));
//  Hide Property Value Lists
// Attaches Event Listener to Previous Element Sibling || Property
valueLists.forEach(list => list.previousElementSibling.addEventListener('click', () => addClass(list, 'hidden')));

boxNumbers.forEach(boxNumber => boxNumber.addEventListener('input', function() {
  target = blocks[this.valueAsNumber -1];
}));

individualProperties.forEach(prop => setIndividualProperties(document.querySelectorAll(`[name=${prop}]`)));

toggleStyle();