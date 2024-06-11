// script.js
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const slidesPerView = 3;
const slideWidth = slides[0].clientWidth;

document.querySelector('.carousel-button.prev').addEventListener('click', showPrevSlide);
document.querySelector('.carousel-button.next').addEventListener('click', showNextSlide);

function showPrevSlide() {
  slideIndex = (slideIndex > 0) ? slideIndex - slidesPerView : totalSlides - slidesPerView;
  updateCarousel();
}

function showNextSlide() {
  slideIndex = (slideIndex < totalSlides - slidesPerView) ? slideIndex + slidesPerView : 0;
  updateCarousel();
}

function updateCarousel() {
  const newTransform = `translateX(${-slideIndex * (100 / slidesPerView)}%)`;
  document.querySelector('.carousel-container').style.transform = newTransform;
}

// // Auto slide every 5 seconds
// setInterval(showNextSlide, 5000);
