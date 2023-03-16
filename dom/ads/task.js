const rotatorCase = document.getElementsByClassName("rotator__case");
const rotatorArray = Array.from(rotatorCase);
let index = 0;

function changeRotator() {
  if (index === rotatorArray.length - 1) {
    index = 0;
  }
  rotatorArray[index].classList.remove("rotator__case_active");
  rotatorArray[index + 1].classList.add("rotator__case_active");
  index++;
}

setInterval(changeRotator, 1000);