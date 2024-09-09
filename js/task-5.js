'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanColor = document.querySelector('.color');

function handleColor (event) {
 bodyEl.style.backgroundColor = getRandomHexColor();
 spanColor.textContent = bodyEl.style.backgroundColor;
}

btnEl.addEventListener('click', handleColor)