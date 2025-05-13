// index.js

// Initialize the Swiper carousel
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".testimonial-01", {
    loop: true, // Loop the carousel
    autoplay: {
      delay: 5000, // Autoplay every 5 seconds
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next button
      prevEl: ".swiper-button-prev", // Previous button
    },
    spaceBetween: 50, // Space between slides
    slidesPerView: 1, // Show one slide at a time
  });
});
