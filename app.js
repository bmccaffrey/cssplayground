"use strict";

var subtitle = document.querySelector('.styles-menu__subtitle');

var menuItems = document.querySelectorAll('.styles-menu__item');

var flex = menuItems[0];
var flexProperties = flex.nextElementSibling;

var grid = menuItems[1];;
var gridProperties = grid.nextElementSibling;

var display = document.querySelector('.display');

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

var displayFlex = flexProperties.firstElementChild.firstElementChild;
// if (displayFlex.checked) {add .flex to screen}
console.log(displayFlex);

