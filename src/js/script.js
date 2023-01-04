const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
 "Oi, como vai?",
 "Como é seu nome?",
  "Ohh... não consigo entender o que você está tentando dizer.",
  "Sabe qual o brinquedo favorito dos órfãos? ...O bumerangue.",
  "Desculpe mas minhas respostas são aleatórias ainda.",
  "Estou com sono..."
];

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage("right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(side, text) {
 
  const msgHTML = `
    <div class="msg ${side}-msg">

      <div class="msg-bubble">
        <div class="msg-text">${text}</div>
        <div class="msg-info">
        <div class="msg-info-time">${formatDate(new Date())}</div>
      </div>
        </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage("left", msgText);
  }, delay);
}

function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}