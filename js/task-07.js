const input = document.querySelector('input');
const span = document.querySelector('#text');
span.classList.add('style')

input.addEventListener('input', onHandleResize)

function onHandleResize (event)  {
    span.style.fontSize = `${event.target.value}`+'px'
    }