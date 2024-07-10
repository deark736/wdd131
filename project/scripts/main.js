document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    loadDestinations();
    updateFooter();
    loadFormData();
    setupFormSubmission();
});

function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

function loadDestinations() {
    const gallery = document.getElementById('destination-gallery');
    if (!gallery) return;

    const destinations = [
        {
            name: "Hong Kong, China",
            image: "images/hong_kong_skyline.jpg",
            alt: "Hong Kong Skyline"
        },
        {
            name: "Taipei, Taiwan",
            image: "images/taipei.jpg",
            alt: "Taipei 101"
        },
        {
            name: "Paris, France",
            image: "images/paris.jpg",
            alt: "Eiffel Tower"
        },
        {
            name: "New York City, USA",
            image: "images/new_york.jpg",
            alt: "New York City"
        },
        {
            name: "Sydney, Australia",
            image: "images/sydney.jpg",
            alt: "Sydney Opera House"
        },
        {
            name: "Rome, Italy",
            image: "images/rome.jpg",
            alt: "Colosseum in Rome"
        }
    ];

    destinations.forEach(destination => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');

        img.src = destination.image;
        img.alt = destination.alt;
        img.loading = 'lazy';

        figcaption.textContent = destination.name;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
}

function updateFooter() {
    const currentYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// Function to load form data from localStorage
function loadFormData() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    if (nameField && emailField && messageField) {
        nameField.value = localStorage.getItem('name') || '';
        emailField.value = localStorage.getItem('email') || '';
        messageField.value = localStorage.getItem('message') || '';
    }
}

// Function to set up form submission event
function setupFormSubmission() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('message', message);

            form.submit(); // Redirect to confirmation.html
        });
    }
}

// Call updateFooter in case the DOM is already loaded
updateFooter();