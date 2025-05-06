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

  document.querySelectorAll('.rent-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('auth-modal').classList.remove('hidden');
    });
  });
  
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('auth-modal').classList.add('hidden');
      document.getElementById('auth-sign-up').classList.add('hidden');    
    });
  });
  
  window.addEventListener('click', (e) => {
    if (e.target.id === 'auth-modal') {
      document.getElementById('auth-modal').classList.add('hidden');
    }
  });

  document.getElementById('sign-up-href').addEventListener('click', function (event) {
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('auth-sign-up').classList.remove('hidden'); 
  });

  document.getElementById('log-in-href').addEventListener('click', function (event) {
    document.getElementById('auth-modal').classList.remove('hidden');
    document.getElementById('auth-sign-up').classList.add('hidden');
  });
  