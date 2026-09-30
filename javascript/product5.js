const imagePaths = [
  "images/product5/product5.png",
  "images/product5/product5_angle1.png",
  "images/product5/product5_angle2.png",
  "images/product5/product5_angle3.png"
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