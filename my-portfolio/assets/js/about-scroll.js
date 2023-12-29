ScrollReveal().reveal(
  ".about__perfil, .about__button, .about__skills-title,  .footer__logo, .footer__links, .footer__social-link",
  {
    interval: 200,
    origin: "bottom",
    distance: "20px",
    easing: "ease-in-out",
    mobile: true,
  }
);
ScrollReveal().reveal(".section__title", {
  reset: false,
  scale: 0.5,
  distance: "10px",
  origin: "top",
  duration: 500,
});
ScrollReveal().reveal(".skill__box", {
  reset: false,
  origin: "bottom",
  distance: "40px",
  duration: 1000,
});
