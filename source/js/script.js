"use strict";

window.onload = function() {
  const askButtons = Array.from(document.getElementsByClassName('ask-list-button'));
  askButtons.forEach(askButton => askButton.onclick = showAsk);
};

const showAsk = function (event) {
  const activeButton = event.currentTarget;
  activeButton.classList.toggle('ask-list-button-close');
  activeButton.classList.toggle('ask-list-button-show');
  activeButton.nextSibling.nextSibling.classList.toggle('hidden');
};
