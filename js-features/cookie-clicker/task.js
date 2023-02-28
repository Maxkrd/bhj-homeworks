const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");

function clickImage() {
  let clickCount = parseFloat(count.textContent);
  count.textContent = clickCount + 1;
  if (clickCount % 2 === 0 ) {
    image.width = 200;
  } else {
    image.width = 220;
  }
}

image.onclick = clickImage; 