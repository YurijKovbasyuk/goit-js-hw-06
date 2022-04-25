const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = ingredients.map((ingredient) => `document.createElment(<li class="item">${ingredient}</li>)`).join("");
const item = document.querySelector('#ingredients')
// item.innerHTML += list


let listIngredients = '';
const createForm = () => {
  for (const ingredient of ingredients) {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList = 'item';
    listIngredients = listIngredients + li.outerHTML;
  }
}
createForm();

item.insertAdjacentHTML("afterbegin", listIngredients)