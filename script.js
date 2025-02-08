const messages = [
  "Are you sure?",
  "K RE WHAT REALLY?",
  "KINA SIS WHY WHY",
  "NESAAAAAAAAAA PLEASEEEE",
  "OK LAST CHANNCE",
  "YOU SURE?",
  "ok xarde chya",
  "AHAHAHHAHAHA,YES BHAN ",
];
let messageIndex = 0;
function handleNoClick(){
  const noButton= document.querySelector('.no-button');
  const yesButton= document.querySelector('.yes-button');
  noButton.textContent =messages[messageIndex];
  messageIndex=(messageIndex +1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

