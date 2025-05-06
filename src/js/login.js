document.querySelectorAll('.rent-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('auth-modal').classList.remove('hidden');
    });
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('auth-modal').classList.add('hidden');
  });
  
  window.addEventListener('click', (e) => {
    if (e.target.id === 'auth-modal') {
      document.getElementById('auth-modal').classList.add('hidden');
    }
  });
  