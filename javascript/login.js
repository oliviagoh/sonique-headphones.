document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("signupForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const togglePasswordIcon = document.getElementById("togglePasswordIcon");

  const defaultUsername = "admin";
  const defaultPassword = "admin123";

  // Toggle show/hide password
  togglePasswordIcon.addEventListener("click", function () {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    togglePasswordIcon.textContent = isHidden ? "Hide" : "Show";
  });

  // Handle form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value;

    if (enteredUsername === "" || enteredPassword === "") {
      alert("Please fill in both fields.");
      return;
    }

    if (enteredUsername === defaultUsername && enteredPassword === defaultPassword) {
      document.getElementById("greetingMessage").textContent =
        `You've successfully logged in, ${enteredUsername}.`;
      document.getElementById("welcomeModal").style.display = "flex";
    } else {
      alert("❌ Invalid username or password.");
    }
  });

  // Close modal button
  document.getElementById("closeModalBtn").addEventListener("click", function () {
    document.getElementById("welcomeModal").style.display = "none";
    window.location.href = "index.html";
  });

  // Close modal if click outside
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("welcomeModal");
    if (event.target === modal) {
      modal.style.display = "none";
      window.location.href = "homepage.html";
    }
  });
});
