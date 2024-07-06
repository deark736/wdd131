document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    loadDestinations();
    updateFooter();
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

// Call updateFooter in case the DOM is already loaded
updateFooter();