var typed2 = new Typed(".logo__typed", {
  strings: ["Vincent", "ヴィンセント"],
  typeSpeed: 30,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});
var typed = new Typed(".about__typed", {
  strings: ["Web Developer", "Systems Developer", "Web Designer"],
  typeSpeed: 15,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});
document.querySelector(
  ".footer__copy"
).innerHTML = `&copy; All Rights Reserved By vincentcode ${new Date().getFullYear()}`;
