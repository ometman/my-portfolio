// mobile menu
//get elements
const mobMenu = document.querySelector('#mobile-menu');
const mobMenuOpen = document.querySelector('#mm-wrapper');
const mobMenuClose = document.querySelector('#mm-menu-close');

// event to open menu
mobMenuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    mobMenu.style.display = 'flex';     
})

// event to close menu
mobMenuClose.addEventListener('click', (e) => {
    e.preventDefault();
    mobMenu.style.display = 'none';     
})