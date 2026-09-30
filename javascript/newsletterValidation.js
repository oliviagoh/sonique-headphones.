document.getElementById("subscribeBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Stop form submission

    const emailInput = document.getElementById("newsletter-email");
    const email = emailInput.value.trim();

    // Simple email regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      alert("Please enter your email address.");
      emailInput.focus();
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
    } else {
      alert("Thank you for subscribing to our newsletter!");
      // You can add code here to send the data to the server
      emailInput.value = ""; // Clear input
    }
  });

