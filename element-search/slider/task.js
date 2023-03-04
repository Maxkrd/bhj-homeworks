const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
const nextArrow = document.querySelector(".slider__arrow_next");
const prevArrow = document.querySelector(".slider__arrow_prev");

function activeSlider(slider) {
  return slider.className.includes("slider__item_active") 
}

function slide(newSlide) {
  let sliderIndex = sliderItem.findIndex(activeSlider);
  sliderItem[sliderIndex].classList.remove("slider__item_active");
  sliderItem[newSlide].classList.add("slider__item_active");
  sliderIndex = newSlide;
}

nextArrow.onclick = function () {
  let sliderIndex = sliderItem.findIndex(activeSlider);
  let newSlide = sliderIndex + 1;
  if (newSlide >= sliderItem.length) {
    newSlide = 0;
  }
  slide(newSlide);
};

prevArrow.onclick = function () {
  let sliderIndex = sliderItem.findIndex(activeSlider);
  let newSlide = sliderIndex - 1;
  if (newSlide < 0) {
    newSlide = sliderItem.length - 1;
  }
  slide(newSlide);
};

