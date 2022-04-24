function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls input'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', createBoxes(refs.input.value));
refs.destroyBtn.addEventListener('click', desroyBoxes);

function createBoxes(amount) {
  return (e) => {
    const min = Number(refs.input.getAttribute('min'));
    const max = Number(refs.input.getAttribute('max'));
    const value = +refs.input.value;
    if (value >= min && value <= max) {
      let size = 30;
      const arr = [];
      for (let i = 0; i < value; i += 1){
        const div = document.createElement('div');
        div.style.width = div.style.height = size + 'px';
        size += 10;
        div.style.backgroundColor = getRandomHexColor();
        arr.push(div);
      }
      refs.boxes.append(...arr);
    }
  }
}

function desroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
  size = 30;
}