const alertText = function () {
  const timer = document.getElementById("timer");
  timer.textContent -= 1;
  if (timer.textContent <= 0) {
      alert("Вы победили в конкурсе!");
      clearInterval(intervalID);
  }
}
const intervalID = setInterval(alertText, 1000);