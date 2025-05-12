// payment.js

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const carName = urlParams.get('carname');
const price = urlParams.get('price');

// Function to update the page with car details
function updateCarDetails() {
    if (carName) {
        // Update the car title in the summary
        const carTitleElements = document.querySelectorAll('.cart-item h5');
        carTitleElements.forEach(el => {
            el.textContent = carName;
        });

        // Extract just the numeric price (remove $ and /day)
        const numericPrice = price ? price.replace('$', '').replace('/day', '') : '0';
        const deliveryFee = 2000;
        const subtotal = parseInt(numericPrice);
        const total = subtotal + deliveryFee;

        // Update prices in the summary
        document.querySelector('.cart-item .price').textContent = `$${subtotal.toLocaleString()}`;
        document.querySelector('.total-row:nth-child(1) span:last-child').textContent = `$${subtotal.toLocaleString()}`;
        document.querySelector('.grand-total span:last-child').textContent = `$${total.toLocaleString()}`;
        
        // Update the button text
        const submitButton = document.querySelector('.btn');
        submitButton.textContent = `Complete Purchase ($${total.toLocaleString()})`;
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateCarDetails);

// Form validation and submission
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic validation - shoul be expanded
    const isValid = true; 
    
    if(isValid) {
        // Show success animation
        document.querySelector('.btn').classList.add('processing');
        
        setTimeout(() => {
            alert(`Purchase of ${carName} completed successfully!`);
            document.querySelector('.btn').classList.remove('processing');
        }, 1500);
    }
});

// Add click effect to button
document.querySelector('.btn').addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 200);
});