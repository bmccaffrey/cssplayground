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

