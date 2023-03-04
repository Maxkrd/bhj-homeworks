let menuLinks = Array.from(document.querySelectorAll(".menu__link"));

for (let i = 0; i < menuLinks.length; i++) {
  let menuItem = menuLinks[i].closest(".menu__item");
  let menuSub = menuItem.querySelector(".menu_sub");
  if (menuSub) {
    menuLinks[i].onclick = function () {
      menuSub.classList.toggle("menu_active");
      return false;
    }
  }
};
