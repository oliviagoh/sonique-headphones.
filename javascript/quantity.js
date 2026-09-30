function increase() {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
  }

  function decrease() {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1;
    } 
  }