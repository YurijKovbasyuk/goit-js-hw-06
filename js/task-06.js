const input = document.querySelector('#validation-input');

console.dir(input.dataset.length);

input.addEventListener('blur', (event) => {
    console.dir(event.currentTarget.value.length)
    if (Number(input.dataset.length) === Number(event.currentTarget.value.length)) {
        
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.add('valid');
        }
        
    } else {
        if (input.classList.contains('valid') || input.classList.contains('')) {
            input.classList.remove('valid');
            input.classList.add('invalid');
        } else {
            input.classList.add('invalid');
        }
    }
})

