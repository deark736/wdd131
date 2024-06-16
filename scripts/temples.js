// Dynamically set the current year
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Dynamically set the last modified date
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = 'Last Modification: ' + document.lastModified;

// Toggle navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu ul');

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        hamburger.textContent = '☰';
    } else {
        navMenu.classList.add('show');
        hamburger.textContent = '✖';
    }
});
