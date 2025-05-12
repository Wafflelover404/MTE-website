document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (!email || !password) {
          alert('Please fill in all fields');
          return;
        }
        
        // Mock authentication - in a real app, you would make an API call here
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirect to catalog page after successful login
        window.location.href = 'catalog.html';
      });
    }
    
    // Signup Form Handling
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const terms = document.getElementById('terms').checked;
        
        // Validation
        if (!fullname || !email || !password || !confirmPassword) {
          alert('Please fill in all fields');
          return;
        }
        
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        
        if (!terms) {
          alert('You must agree to the terms and conditions');
          return;
        }
        
        // Mock registration - in a real app, you would make an API call here
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', fullname);
        
        // Redirect to catalog page after successful signup
        window.location.href = 'catalog.html';
      });
    }
    
    // Social Login Buttons (mock functionality)
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
      button.addEventListener('click', function() {
        alert(`In a real application, this would redirect to ${this.textContent.trim()} authentication`);
      });
    });
  });