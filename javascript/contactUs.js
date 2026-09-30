document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const tel = document.getElementById('tel');
  const message = document.getElementById('message');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    let errors = [];

    // Validate name
    if (!name.value.trim()) {
      errors.push('Name is required.');
    }

    // Validate email
    if (!email.value.trim() || !email.value.includes('@')) {
      errors.push('Please enter a valid email address.');
    }

    // Validate phone number format (with dashes)
    const telPattern = /^\+60\d{2}-\d{3}-\d{4}$/;
    if (!tel.value.trim() || !telPattern.test(tel.value)) {
      errors.push('Phone number must be in the format +60XX-XXX-XXXX (with dashes).');
    }

    // Validate message
    if (!message.value.trim()) {
      errors.push('Message cannot be empty.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      // Show modal
      successModal.style.display = 'flex'; // center the display box
      successModal.classList.add('show');
    }
  });


  closeModalBtn.addEventListener('click', function () {
    window.location.href = 'contactus.html';
  });
});
