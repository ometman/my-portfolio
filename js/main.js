// mobile menu
// get elements
const mobMenuOpen = document.querySelector('#mm-icon-wrapper');
const mobMenuNav = document.querySelector('.m-menu-nav');
const mobMenuClose = document.querySelectorAll('.m-menu-closebtn, .m-menu-close');
const blurEl = document.querySelectorAll('.logo, .mm-icon-wrapper, .headline-section, .mob-works-section, .about-me-section, .footer');

// event to open menu
mobMenuOpen.addEventListener('click', (e) => {
  e.preventDefault();
  mobMenuNav.style.display = 'flex';
  mobMenuNav.classList.add('m-menu-color-blend');
  blurEl.forEach((el) => el.classList.add('blur-bg'));
});

// eventS to close menu when icon or menu item when clicked
mobMenuClose.forEach((link) => link.addEventListener('click', () => {
  mobMenuNav.style.display = 'none';
  blurEl.forEach((el) => el.classList.remove('blur-bg'));
}));

//
mobMenuClose.forEach((link) => link.addEventListener('click', () => {
  mobMenuNav.style.display = 'none';
  blurEl.forEach((el) => el.classList.remove('blur-bg'));
}));