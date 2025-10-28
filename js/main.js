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

// Skills section toggle functionality
// Get elements for Languages section
const langToggleBtn = document.querySelector('#lang-toggle-btn');
const langToggleIcon = document.querySelector('#lang-toggle-icon');
const languagesList = document.querySelector('#languages');

// Get elements for Frameworks section
const frameworksToggleBtn = document.querySelector('#frameworks-toggle-btn');
const frameworksToggleIcon = document.querySelector('#frameworks-toggle-icon');
const frameworksList = document.querySelector('#frameworks');

// Get elements for Skills section
const skillsToggleBtn = document.querySelector('#skills-toggle-btn');
const skillsToggleIcon = document.querySelector('#skills-toggle-icon');
const skillsList = document.querySelector('#skills');

// Reusable toggle function
function toggleSection(list, icon) {
  const currentDisplay = window.getComputedStyle(list).display;
  if (currentDisplay === 'none') {
    list.style.display = 'flex';
    icon.src = './images/icons/button-icon-dn.png';
  } else {
    list.style.display = 'none';
    icon.src = './images/icons/button-icon-rt.png';
  }
}

// Toggle function for Languages
langToggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleSection(languagesList, langToggleIcon);
});

// Toggle function for Frameworks
frameworksToggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleSection(frameworksList, frameworksToggleIcon);
});

// Toggle function for Skills
skillsToggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleSection(skillsList, skillsToggleIcon);
});
