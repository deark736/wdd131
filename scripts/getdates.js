// Dynamically set the current year
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Dynamically set the last modified date
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = 'Last Modification: ' + document.lastModified;