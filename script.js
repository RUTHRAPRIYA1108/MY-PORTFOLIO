// Script for adding interactivity

// Function to handle contact form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    alert('Message Sent Successfully!'); // Alert the user
});

// Function to filter portfolio items
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const filterItems = (category) => {
        portfolioItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block'; // Show item
                item.classList.add('fade-in'); // Add fade-in effect
            } else {
                item.style.display = 'none'; // Hide item
                item.classList.remove('fade-in'); // Remove fade-in effect
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            button.classList.add('active'); // Add active class to clicked button
            const filterValue = button.getAttribute('data-filter'); // Get filter category
            filterItems(filterValue); // Call filter function
        });
    });

    // Initial call to display all items
    filterItems('all');
});