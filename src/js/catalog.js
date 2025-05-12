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
      btn.addEventListener('click', (e) => {
        const carname = e.target.closest('.vehicle-card').querySelector('h3').textContent;
        const price = e.target.closest('.vehicle-card').querySelector('.daily-rate').textContent;
        const encodedCarname = encodeURIComponent(carname);
        const encodedPrice = encodeURIComponent(price);
        location.href = `payment.html?carname=${encodedCarname}&price=${encodedPrice}`;
        // Passing params here to the payment page. Unsafe, but works for now as UI only implementation
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
  
  document.querySelectorAll('.more-info-btn').forEach(button => {
    button.addEventListener('click', () => {
      const expandedContent = button.nextElementSibling;
      const vehicleCard = button.closest('.vehicle-card');
      
      expandedContent.classList.toggle('active');
      vehicleCard.classList.toggle('expanded');
      
      button.textContent = expandedContent.classList.contains('active') 
        ? 'Show Less ▲' 
        : 'Read More ▼';
    });
  });

      // Add these new JavaScript handlers
      document.addEventListener('DOMContentLoaded', function() {
        const authButtons = document.querySelector('.auth-buttons');
        const accountInfo = document.querySelector('.account-info');
        const logoutBtn = document.getElementById('logout-btn');
        
        // Mock login state
        let isLoggedIn = false;
  
        // Show auth buttons or account info
        function updateAuthState() {
          if(isLoggedIn) {
            authButtons.classList.add('hidden');
            accountInfo.classList.remove('hidden');
          } else {
            authButtons.classList.remove('hidden');
            accountInfo.classList.add('hidden');
          }
        }
  
        // Login handlers
        document.getElementById('sign-in-btn').addEventListener('click', () => {
          document.getElementById('auth-modal').classList.remove('hidden');
        });
  
        document.getElementById('sign-up-btn').addEventListener('click', () => {
          document.getElementById('auth-sign-up').classList.remove('hidden');
        });
  
        // Logout handler
        logoutBtn.addEventListener('click', () => {
          isLoggedIn = false;
          updateAuthState();
        });
  
        // Mock login submission
        document.getElementById('submit-log-in').addEventListener('click', (e) => {
          e.preventDefault();
          isLoggedIn = true;
          updateAuthState();
          document.getElementById('auth-modal').classList.add('hidden');
        });
  
        document.getElementById('submit-sign-up').addEventListener('click', (e) => {
          e.preventDefault();
          isLoggedIn = true;
          updateAuthState();
          document.getElementById('auth-sign-up').classList.add('hidden');
        });
      });