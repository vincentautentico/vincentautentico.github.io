/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll(".services__modal"),
  modalButton = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener("click", () => {
    activeModal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  });
});
/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
// Type Js
var typed = new Typed(".typed", {
  strings: ["Web Developer", "Systems Developer", "Web Designer"],
  typeSpeed: 15,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});

var typed2 = new Typed(".logo__typed", {
  strings: ["Vincent", "ヴィンセント"],
  typeSpeed: 30,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});
// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 200,
});
ScrollReveal().reveal(".content__scroll", { origin: "top" });
// ScrollReveal().reveal(".services__card, .contact__button", {
//   origin: "right",
// });
ScrollReveal().reveal(".work__card ", { origin: "left" });

ScrollReveal().reveal(".home__social, .services__button", {
  origin: "bottom",
});
document.querySelector(
  ".footer__copy"
).innerHTML = `&copy; All Rights Reserved By vincentcode ${new Date().getFullYear()}`;

ScrollReveal().reveal(".home__button", {
  origin: "bottom",
});
ScrollReveal().reveal(".skill__box", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
});

ScrollReveal().reveal(".icon", {
  reset: false,
  scale: 0.5,
  distance: "10px",
  origin: "top",
  duration: 500,
});
ScrollReveal().reveal(".section__title", {
  reset: false,
  scale: 0.5,
  distance: "10px",
  origin: "top",
  duration: 500,
});
ScrollReveal().reveal(".section__title1", {
  reset: false,
  scale: 0.5,
  distance: "10px",
  origin: "top",
  duration: 500,
});

ScrollReveal().reveal(".timeline-item", {
  reset: false,
  distance: "30px",
  origin: "right",
  duration: 500,
});
