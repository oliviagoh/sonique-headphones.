document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");

  // Toggle password visibility
  toggleBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      toggleBtn.textContent = "Show";
    }
  });

  // Helper function to show error message below input
  function showError(input, message) {
    let error = input.parentNode.querySelector(".error-message");
    if (!error) {
      error = document.createElement("div");
      error.className = "error-message";
      error.style.color = "#d93025";
      error.style.fontSize = "14px";
      error.style.marginTop = "5px";
      input.parentNode.appendChild(error);
    }
    error.textContent = message;
  }

  function clearError(input) {
    const error = input.parentNode.querySelector(".error-message");
    if (error) {
      error.remove();
    }
  }

  // Validation regex patterns
  const namePattern = /^[A-Za-z]+$/;
  const usernamePattern = /^[A-Za-z0-9_]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = {
    minLength: /.{6,}/,
    upper: /[A-Z]/,
    lower: /[a-z]/,
    digit: /[0-9]/,
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  };

  // Real-time validation on blur
  document.getElementById("firstname").addEventListener("blur", validateFirstName);
  document.getElementById("lastname").addEventListener("blur", validateLastName);
  document.getElementById("username").addEventListener("blur", validateUsername);
  document.getElementById("email").addEventListener("blur", validateEmail);
  document.getElementById("password").addEventListener("blur", validatePassword);

  function validateFirstName() {
    const input = document.getElementById("firstname");
    const value = input.value.trim();
    if (!value) {
      showError(input, "First name is required.");
      return false;
    }
    if (!namePattern.test(value)) {
      showError(input, "Only alphabets are allowed.");
      return false;
    }
    clearError(input);
    return true;
  }

  function validateLastName() {
    const input = document.getElementById("lastname");
    const value = input.value.trim();
    if (!value) {
      showError(input, "Last name is required.");
      return false;
    }
    if (!namePattern.test(value)) {
      showError(input, "Only alphabets are allowed.");
      return false;
    }
    clearError(input);
    return true;
  }

  function validateUsername() {
    const input = document.getElementById("username");
    const value = input.value.trim();
    if (!value) {
      showError(input, "Username is required.");
      return false;
    }
    if (!usernamePattern.test(value)) {
      showError(input, "Only letters, numbers, and underscore allowed.");
      return false;
    }
    clearError(input);
    return true;
  }

  function validateEmail() {
    const input = document.getElementById("email");
    const value = input.value.trim();
    if (!value) {
      showError(input, "Email is required.");
      return false;
    }
    if (!emailPattern.test(value)) {
      showError(input, "Please enter a valid email address.");
      return false;
    }
    clearError(input);
    return true;
  }

  function validatePassword() {
    const input = document.getElementById("password");
    const value = input.value;

    if (!passwordPattern.minLength.test(value)) {
      showError(input, "Password must be at least 6 characters long.");
      return false;
    }
    if (!passwordPattern.upper.test(value)) {
      showError(input, "Must contain at least one uppercase letter.");
      return false;
    }
    if (!passwordPattern.lower.test(value)) {
      showError(input, "Must contain at least one lowercase letter.");
      return false;
    }
    if (!passwordPattern.digit.test(value)) {
      showError(input, "Must contain at least one number.");
      return false;
    }
    if (!passwordPattern.special.test(value)) {
      showError(input, "Must contain at least one special character.");
      return false;
    }

    clearError(input);
    return true;
  }

  // Show modal on successful signup
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const termsChecked = document.getElementById("terms").checked;

    if (!termsChecked) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      termsChecked
    ) {
      const firstName = document.getElementById("firstname").value.trim();
      document.querySelector("#successModal .modal-content h3").textContent = `Welcome, ${firstName}!`;
      document.getElementById("successModal").style.display = "flex";

      setTimeout(function () {
        window.location.href = 'index.html';
      }, 2000);
    } else {
      alert("Please fix the errors above before submitting.");
    }
  });

  // Close modal manually
  document.getElementById("closeModalBtn").addEventListener("click", function () {
    document.getElementById("successModal").style.display = "none";
    form.reset();
  });

  // Close modal if clicking outside
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("successModal");
    if (event.target === modal) {
      modal.style.display = "none";
      form.reset();
    }
  });
});

