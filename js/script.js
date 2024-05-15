function viewDetails(url) {
    window.location.href = url; // Redirect to the detail page
}

const totalCars = 30; // Total number of cars
let displayedCars = 5; // Number of cars initially displayed

// Function to show/hide cars based on search query
function searchCars() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cars = document.getElementsByClassName('car');
    let count = 0; // Counter to track the number of displayed cars

    for (let i = 0; i < totalCars; i++) {
        const title = cars[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            cars[i].style.display = 'block';
            count++;
        } else {
            cars[i].style.display = 'none';
        }
    }

    // If there are fewer matching cars than the initially displayed cars,
    // show the initially displayed cars
    if (count < displayedCars) {
        for (let i = 0; i < displayedCars; i++) {
            cars[i].style.display = 'block';
        }
    }
}

// Call searchCars function when the input field changes
document.getElementById('searchInput').addEventListener('input', searchCars);

// Initially hide extra cars
window.onload = function() {
    const cars = document.getElementsByClassName('car');
    for (let i = displayedCars; i < totalCars; i++) {
        cars[i].style.display = 'none';
    }
};



// Smooth scrolling when clicking on the "About" link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

