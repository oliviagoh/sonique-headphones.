const images = [
    "images/product7/product7.png",
    "images/product7/product7_angle1.png",
    "images/product7/product7_angle2.png",
    "images/product7/product7_angle3.png",
    "images/product7/product7_angle4.png",
    "images/product7/product7_angle5.png",
    "images/product7/product7_angle6.png"
  ];
  let currentIndex = 0;

  function showImage(index) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = images[index];
    currentIndex = index;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function selectImage(index) {
    showImage(index);
  }