'use strict';

// get Subtitle Heading
var menuSubtitle = document.querySelector('.styles-menu__subtitle');
// get menu items
var menuItems = document.querySelectorAll('.styles-menu__item');
// toggle hidden on menu items
menuSubtitle.addEventListener('click', hide);
// toggle style change on click for menu items
menuItems.forEach(item => item.addEventListener('click', makeSubtitle));

function hide() {
  menuItems.forEach(item => item.classList.toggle('hidden'));
}

