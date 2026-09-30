const imagePaths = [
    "images/product2/product2.png.webp",
    "images/product2/product2 angle1.png.webp",
    "images/product2/product2 angle2.png.webp",
    "images/product2/product2 angle3.png.webp",
    "images/product2/product2 angle4.png.webp"
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