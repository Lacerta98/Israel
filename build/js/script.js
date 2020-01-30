"use strict";
let reviewsLength = null;
let reviewCountText = null;
let reviewList = null;

window.onload = function() {
  const reviewsTextLength = document.getElementsByClassName('items__length')[0];
  const askButtons = Array.from(document.getElementsByClassName('button__ask'));
  const sliderButtonBack = document.getElementsByClassName('button__back')[0];
  const sliderButtonForward = document.getElementsByClassName('button__forward')[0];

  reviewsLength = document.getElementsByClassName('reviews__item').length;
  reviewCountText = document.getElementsByClassName('item')[0];
  reviewList = document.getElementsByClassName('reviews__item');


  reviewsTextLength.textContent = reviewsLength;
  askButtons.forEach(askButton => askButton.onclick = showAsk);
  sliderButtonBack.onclick = clickSliderBack;
  sliderButtonForward.onclick = clickSliderForward;
};

const showAsk = function (event) {
  const activeButton = event.currentTarget;
  activeButton.classList.toggle('button__ask_close');
  activeButton.classList.toggle('button__ask_show');
  activeButton.nextSibling.nextSibling.classList.toggle('hidden');
};

const clickSliderBack = function (event) {
  let reviewCount = Number(reviewCountText.textContent);
  if (reviewCount !== 1) {
    reviewCount = reviewCount - 1;
    reviewList[reviewCount - 1].classList.remove('visually-hidden');
    reviewList[reviewCount].classList.add('visually-hidden');
    reviewCountText.textContent = reviewCount;
  }
};

const clickSliderForward = function (event) {
  let reviewCount = Number(reviewCountText.textContent);
  if (reviewCount !== reviewsLength) {
    reviewCount = reviewCount + 1;
    reviewList[reviewCount - 1].classList.remove('visually-hidden');
    reviewList[reviewCount - 2].classList.add('visually-hidden');
    reviewCountText.textContent = reviewCount;
  }
};
