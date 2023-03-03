let menuLinks = Array.from(document.querySelectorAll(".menu__link"));

for (let i = 0; i < menuLinks.length; i++) {
  let menuItem = menuLinks[i].closest(".menu__item");
  let menuSub = menuItem.querySelector(".menu_sub");
  menuLinks[i].onclick = function () {
    if (menuSub) {
      menuSub.classList.toggle("menu_active");
      return false;
    }
  }
};
