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
    initializeCarousel('fifteen-carousel', '.left-section-image');
  initializeCarousel('fourteen-carousel', '.left-section-image');
  initializeCarousel('thirteen-carousel', '.left-section-image');
  initializeCarousel('twelfth-carousel', '.left-section-image');
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

// Function to perform a smooth scroll
function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Smooth scrolling when anchor links are clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var target = this.getAttribute('href');
      smoothScroll(target, 800); // Adjust duration as needed
  });
});
