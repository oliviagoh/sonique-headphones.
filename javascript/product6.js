const imagePaths = [
    "images/product6/product6.png.webp",
    "images/product6/product6 angle1.png.webp",
    "images/product6/product6 angle2.png.webp",
    "images/product6/product6 angle3.png.webp",
    "images/product6/product6 angle4.png.webp"
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