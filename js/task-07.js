const input = document.querySelector('#font-size-control')

const textEl = document.querySelector('#text');

const targetFontSize = input.addEventListener('input', (event) => {
    console.log(event.currentTarget.value)
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});

