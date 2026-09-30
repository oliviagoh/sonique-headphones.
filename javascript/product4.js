const imagePaths = [
  "images/product4/product4.webp",
  "images/product4/product4_angle1.webp",
  "images/product4/product4_angle2.webp",
  "images/product4/product4_angle3.webp",
  "images/product4/product4_angle4.webp"
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