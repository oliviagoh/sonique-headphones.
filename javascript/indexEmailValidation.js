document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".newsletter-popup");
    const closeBtn = popup.querySelector(".close-popup");
    const form = popup.querySelector(".newsletter-form");
    const emailInput = form.querySelector("input[type='email']");
  
    // Email validation regex
    function isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      return regex.test(email);
    }
    
    
  
    // Close popup on X button click
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  
    // Handle form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();
  
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
      }
  
      // Replace popup content with thank-you note
      popup.innerHTML = `
        <div class="thank-you-message">
          <h3>Thank You!</h3>
          <p>You're now subscribed to Sonique.</p>
          <p>Welcome to Sonique! 🎁 First-time subscriber? Check your email for a 10% discount voucher for your first purchase!</p>


        </div>
      `;
  
      // Add fade-out effect
      popup.style.transition = "opacity 1s ease";
      popup.style.opacity = "1";
  
      setTimeout(() => {
        popup.style.opacity = "0";
      }, 2000);
  
      setTimeout(() => {
        popup.style.display = "none";
      }, 3000);
    });
  });

  