var navLink = document.querySelector(".btn-show");
var navPopup = document.querySelector(".site-nav__list");

if (navLink) {

  navLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    navLink.classList.toggle("btn-close");
    navPopup.classList.toggle("site-nav__list--show");
  });

}
