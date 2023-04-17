// mobile menu
//get elements
const mobMenu = document.querySelector('#mobile-menu');
const mobMenuOpen = document.querySelector('#mm-wrapper');
const mobMenuClose = document.querySelectorAll('.m-menu-closebtn, .m-menu-close');

// event to open menu
mobMenuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    mobMenu.style.display = 'flex';
    mobMenu.style.filter = 'blur-bg';
})

// event to close menu when icon or menu item is clicked
mobMenuClose.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault();
    mobMenu.style.display = 'none';

}));