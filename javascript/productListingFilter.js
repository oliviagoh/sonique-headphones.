
document.addEventListener("DOMContentLoaded", function () {
  const sortSelect = document.getElementById("sort");
  const products = document.querySelectorAll(".product-box");
  const header = document.getElementById("productHeader");

  function filterProducts(category) {
    products.forEach(product => {
      if (category === "all") {
        product.style.display = "block";
      } else if (product.classList.contains(category)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    if (sortSelect) sortSelect.value = category;

    if (header) {
      if (category === "headphone") {
        header.textContent = "Headphones";
      } else if (category === "earphone") {
        header.textContent = "Earphones";
      } else {
        header.textContent = "All Headphones & Earphones";
      }
    }
  }

  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter") || "all";
  filterProducts(filter);

  sortSelect.addEventListener("change", function () {
    const selected = this.value;
    const newUrl = `${window.location.pathname}?filter=${selected}`;
    window.history.replaceState(null, "", newUrl);
    filterProducts(selected);
  });
});
