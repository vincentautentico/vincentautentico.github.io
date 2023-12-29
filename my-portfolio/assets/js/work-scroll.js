ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal(".section__title1, .work__sub", {
  reset: false,
  scale: 0.5,
  distance: "10px",
  origin: "top",
  duration: 500,
});

ScrollReveal().reveal(".work__card ", { origin: "left" });
document.querySelector(
  ".footer__copy"
).innerHTML = `&copy; All Rights Reserved By vincentcode ${new Date().getFullYear()}`;
