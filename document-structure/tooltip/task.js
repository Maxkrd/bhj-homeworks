const links = Array.from(document.querySelectorAll(".has-tooltip"));

links.forEach((elem) => {
  elem.insertAdjacentHTML("afterEnd", `<div class="tooltip">${elem.title}</div>`);
  elem.nextElementSibling.style.position = "absolute";
  elem.nextElementSibling.style.left = `${elem.getBoundingClientRect().left}px`;
});

links.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    elem.nextElementSibling.classList.toggle("tooltip_active");
  });
});