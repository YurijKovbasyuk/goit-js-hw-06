function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener('click', onHandleClickBtn);

function onHandleClickBtn(event) {
  numberColor.textContent = document.body.style.backgroundColor = getRandomHexColor()
}