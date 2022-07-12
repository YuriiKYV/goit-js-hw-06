const spanElement = document.querySelector('#value');

let counterValue = 0;
console.log(counterValue);

const addListenerBtnDecrement = document.querySelector('button[data-action="decrement"]');
const addListenerBtnIncrement = document.querySelector('button[data-action="increment"]');

addListenerBtnIncrement.addEventListener('click', incrementValue);
addListenerBtnDecrement.addEventListener('click', decrementValue);

function incrementValue() {
    
    spanElement.textContent = counterValue += 1;
};

function decrementValue() {
    spanElement.textContent = counterValue -= 1;
};


