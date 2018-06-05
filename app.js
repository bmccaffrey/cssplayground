'use strict';

// get Subtitle Heading
var menuSubtitle = document.querySelector('.styles-menu__subtitle');
menuSubtitle.addEventListener('click', hide);

function hide() {
  var menuItems = document.querySelectorAll('.styles-menu__item');
  menuItems.forEach(item => item.classList.toggle('hidden'));
}

function makeSubtitle(){
  this.className = menuSubtitle.className;
}
