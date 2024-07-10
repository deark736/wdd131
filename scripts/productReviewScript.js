// Product data
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avg_rating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avg_rating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avg_rating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avg_rating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avg_rating: 5.0
    }
];

// Populate the select element with product options
const productSelect = document.getElementById('productName');
if (productSelect) {
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Handle review counter and update footer information
if (document.getElementById('reviewCount')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('reviewCount').textContent = reviewCount;
}

// Update the year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Update the last modification date in the footer
document.getElementById('lastModified').textContent = document.lastModified;