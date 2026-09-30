document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector(".close-popup");
    const popup = document.querySelector(".newsletter-popup");
  
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  });