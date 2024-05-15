document.getElementById("order-form").addEventListener("submit", function(event) {
    // Your form submission handling logic goes here
    event.preventDefault(); // Prevents the default form submission behavior
    // You can use JavaScript to handle form validation, submission, etc.
});

  


// Smooth scrolling when clicking on the "About" link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function viewDetails(url) {
    window.location.href = url; // Redirect to the detail page
}