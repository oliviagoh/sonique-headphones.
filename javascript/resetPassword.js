function closeModal() {
  document.getElementById("successModal").style.display = "none";
}

//run this part when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("resetForm");
  const newPasswordInput = document.getElementById("newPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newPassword = newPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // check if user enter an empty password
    if (!newPassword || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    // check if passwords match first
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // then check strength
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!strongPasswordPattern.test(newPassword)) {
      alert(
        "Password must be at least 8 characters and include:\n" +
        "- 1 uppercase letter\n" +
        "- 1 lowercase letter\n" +
        "- 1 number\n" +
        "- 1 special character (!@#$%^&*)"
      );
      return;
    }

    // if everything is ok, then will show success message
    document.getElementById("successModal").style.display = "flex";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const passwordInputs = [document.getElementById("newPassword"), document.getElementById("confirmPassword")];

  passwordInputs.forEach(input => {
    function checkInputValue() {
      if (input.value.trim() !== "") {
        input.classList.add("not-empty");
      } else {
        input.classList.remove("not-empty");
      }
    }

    input.addEventListener("input", checkInputValue);
    input.addEventListener("blur", checkInputValue);
    checkInputValue(); // run once on load
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-password");

    toggleButtons.forEach(button => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const input = document.getElementById(targetId);

        if (input.type === "password") {
          input.type = "text";
          this.textContent = "Hide";
        } else {
          input.type = "password";
          this.textContent = "Show";
        }
      });
    });
  });

  function closeModal() {
    window.location.href = "homepage.html";  //link user back to the homepage after reset the password
  }
  
