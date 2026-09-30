document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('productRatingForm');
  const product = document.getElementById('product');
  const rating = document.getElementById('rating');
  const message = document.getElementById('reviewMessage');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting

    let errors = [];

    if (!product.value) {
      errors.push('Please select a product.');
    }

    // Validate rating
    if (!rating.value) {
      errors.push('Please select a star rating.');
    }

    // Validate message length
    if (message.value.trim().length > 500) {
      errors.push('Message must be 500 characters or fewer.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      successModal.style.display = 'flex';
      successModal.classList.add('show');
    }
  });

  // Close modal and redirect
  closeModalBtn.addEventListener('click', function () {
    window.location.href = 'review.html';
  });
});
