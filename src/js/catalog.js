document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterBtn = document.querySelector('.filter-btn');
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    
    if (filterBtn) {
      filterBtn.addEventListener('click', function() {
        const typeFilter = document.getElementById('vehicle-type').value;
        const priceFilter = document.getElementById('price-range').value;
        const transmissionFilter = document.getElementById('transmission').value;
        
        vehicleCards.forEach(card => {
          const cardType = card.getAttribute('data-type');
          const cardPrice = card.getAttribute('data-price');
          
          const typeMatch = typeFilter === 'all' || cardType === typeFilter;
          const priceMatch = priceFilter === 'all' || cardPrice === priceFilter;
          // Note: Transmission filter would need data-transmission attribute on cards
          
          if (typeMatch && priceMatch) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });