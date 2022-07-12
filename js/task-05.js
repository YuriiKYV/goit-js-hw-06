const input = document.querySelector('#name-input');
console.log(input);
const nameLable = document.querySelector('#name-output')
console.log(nameLable);

input.addEventListener('input', (event) => {
    nameLable.textContent = event.currentTarget.value;
});