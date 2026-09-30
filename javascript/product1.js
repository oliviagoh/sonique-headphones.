const imagePaths = [
    "images/product1/product1.webp",
    "images/product1/product1 angle1.jpg.webp",
    "images/product1/product1 angle2.jpg.webp",
    "images/product1/product1 angle3.jpg.webp",
    "images/product1/product1 angle4.jpg.webp"
  ];

  let currentImageIndex = 0;
  const mainImage = document.getElementById("mainImage");

  function showImage(index) {
    currentImageIndex = index;
    mainImage.src = imagePaths[currentImageIndex];
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
    showImage(currentImageIndex);
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    showImage(currentImageIndex);
  }

  function selectImage(index) {
    showImage(index);
  }