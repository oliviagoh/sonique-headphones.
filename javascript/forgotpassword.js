document.addEventListener("DOMContentLoaded", function () {
  const forgotForm = document.getElementById("forgotForm");
  const emailInput = document.getElementById("email");

  if (forgotForm && emailInput) {
    forgotForm.addEventListener("submit", function (event) {
      event.preventDefault(); // stop real submission

      const email = emailInput.value.trim();
      const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

      if (email === "") {
        alert("Please enter your email.");
        emailInput.focus();
      } else if (!gmailPattern.test(email)) {
        alert("Please enter a valid Gmail address like yourname@gmail.com");
        emailInput.focus();
      } else {
        // Simulate logic for demo
        if (confirm(`Proceed to reset password for ${email}?`)) {
          // Redirect only if user confirms
          window.location.href = "resetpassword.html";
        }
      }
    });

    // Optional floating label logic
    function checkInputValue() {
      if (emailInput.value.trim() !== "") {
        emailInput.classList.add("not-empty");
      } else {
        emailInput.classList.remove("not-empty");
      }
    }

    emailInput.addEventListener("input", checkInputValue);
    emailInput.addEventListener("blur", checkInputValue);
    checkInputValue(); // run once on load
  }
});


