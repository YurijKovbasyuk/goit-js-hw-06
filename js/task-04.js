
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
// const result = ;

let counterValue = 0;

function onHandleClickDown (event) {
    
    counterValue = Number(document.querySelector('#value').textContent) - 1;
    console.log(counterValue);
    document.querySelector('#value').textContent = counterValue;
};
function onHandleClickUp (event) {
    
    counterValue = Number(document.querySelector('#value').textContent) + 1;
    console.log(counterValue);
    document.querySelector('#value').textContent = counterValue;
};

decrement.addEventListener("click", onHandleClickDown);
increment.addEventListener("click", onHandleClickUp);
