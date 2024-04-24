document.addEventListener('DOMContentLoaded', function () {
  // Function to determine if the hover is on the left or right half of the image
  function isRightHover(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;

    // Check if the hover is on the right 2/5 of the image
    return x > (3 * width) / 5;
  }

  // Function to change image based on click
  function changeImageOnClick(direction, images, currentIndex) {
    images[currentIndex].style.display = 'none';

    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    images[currentIndex].style.display = 'block';
    return currentIndex;
  }

  // Function to initialize a carousel
  function initializeCarousel(carouselId, imageSelector, mediaElementsSelector) {
    const carousel = document.getElementById(carouselId);
    const elements = mediaElementsSelector
      ? carousel.querySelectorAll(imageSelector + ', ' + mediaElementsSelector)
      : carousel.querySelectorAll(imageSelector);
    let currentIndex = 0;

    elements.forEach((element, index) => {
      element.style.display = index === currentIndex ? 'block' : 'none';

      element.addEventListener('click', (event) => {
        // Change image on click
        const direction = isRightHover(event, element) ? 1 : -1;
        currentIndex = changeImageOnClick(direction, elements, currentIndex);
      });
    });
  }

  // Initialize carousels
  initializeCarousel('first-carousel', '.left-section-image');
  initializeCarousel('second-carousel', '.left-section-image');
  initializeCarousel('third-carousel', '.left-section-image', '.left-section-video');
  initializeCarousel('fourth-carousel', '.left-section-image');
  initializeCarousel('fifth-carousel', '.left-section-image');
  initializeCarousel('sixth-carousel', '.left-section-image');
  initializeCarousel('seventh-carousel', '.left-section-image');
  initializeCarousel('eigth-carousel', '.left-section-image');
  initializeCarousel('ninth-carousel', '.left-section-image');
  initializeCarousel('tenth-carousel', '.left-section-image');
  initializeCarousel('eleventh-carousel', '.left-section-image');
});