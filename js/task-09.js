const backgroundBody = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color')

changeColor.addEventListener('click', chsngeColor);

function chsngeColor() {
  const newColor = getRandomHexColor();
  backgroundBody.style.backgroundColor = newColor;
  color.textContent = newColor;
};