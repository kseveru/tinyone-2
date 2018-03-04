var navToggle = document.querySelector(".site-nav__btn");
var navMain = document.querySelector(".site-nav__list");

navToggle.classList.remove("nojs");
navMain.classList.remove("nojs");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navToggle.classList.toggle("site-nav__btn--close");
  navMain.classList.toggle("site-nav__list--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (navToggle.classList.contains("site-nav__btn--close")) {
      navToggle.classList.remove("site-nav__btn--close");
      navMain.classList.remove("site-nav__list--opened");
    }
  }
});
