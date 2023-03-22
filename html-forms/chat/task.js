const button = document.querySelector(".chat-widget")
const input = document.getElementById("chat-widget__input")
const messages = document.getElementById("chat-widget__messages")

button.onclick = () => button.classList.add("chat-widget_active")

input.addEventListener("keydown", (event) => {
  
  if (event.code === "Enter" && input.value.trim() !== "") {
    messages.innerHTML += `
      <div class="message message_client">
      <div class="message__time">${new Date().toLocaleTimeString()}</div>
      <div class="message__text">${input.value}</div>
      </div>
      `;
      input.value = "";
      getBotResponse();
      messages.lastElementChild.scrollIntoView()
  } else if (event.key.length > 1) {
      return;
  } else {
    input.textContent += event.key; 
  }
});

function getBotResponse() {
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${new Date().toLocaleTimeString()}</div>
      <div class="message__text">
        ${getMessage()}
      </div>
    </div>
  `;
}

const botMessages = [
  "Добрый день! До свидания", 
  "Уходите",
  "Где ваша совесть!?",
  "Мы ничего не будем вам продавать!"    
];

function getMessage() {
    let index = Math.round(Math.random() * (botMessages.length - 1))
    return botMessages[index];
};