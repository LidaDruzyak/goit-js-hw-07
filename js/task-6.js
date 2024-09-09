'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const elements = [];
  let size = 30;
  for(let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}


createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  if(amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    inputEl.value = '';
  } else {
    alert('Please enter a number from 1 to 100')
  }
});
destroyBtn.addEventListener('click', destroyBoxes);



