const input = document.querySelector('#validation-input');

input.addEventListener('input', checkInput);

const valueLegth = input.getAttribute('data-length');

function checkInput(event) {
    const letter = event.currentTarget.value;

    input.addEventListener('blur', checkInputLengrh);
    function checkInputLengrh() {
        if (letter.length === Number(valueLegth)) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        }
        else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
        
    };
};