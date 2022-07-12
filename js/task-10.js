function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const input = controls.querySelector("input");
const btn = controls.querySelectorAll('button');
const createBtn = btn[0];
const destroyBtn = btn[1];

let amount = 0;

let arreyElements = '';
let options = 0;

const inputElement = input.addEventListener('input', (event) => {
  amount = Number(event.currentTarget.value);
})

const createElements = createBtn.addEventListener('click', createBoxes);

    function createBoxes() {
      console.log(amount)
      for (let i = 0; i < amount; i += 1) {
        options += 10;
        arreyElements = `<div style = "width: ${20 + options}px; height: ${20 + options}px; background-color: ${getRandomHexColor()}"></div>`;
        boxes.insertAdjacentHTML("beforeend", arreyElements)
      }
      amount = '';
};

const destroyElements = destroyBtn.addEventListener('click', destroyBoxes);
    
function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
  options = 0;
};