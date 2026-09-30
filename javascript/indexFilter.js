document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      // Set active class
      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
  
      // Product filtering using data attributes
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.product-card').forEach(function(card) {
        if (filter === 'all') {
          card.style.display = '';
        } else {
          const category = card.getAttribute('data-category');
          if (category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  }); 