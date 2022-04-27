const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// ====1==

// const list = ingredients.map((ingredient) => `document.createElment(<li class="item">${ingredient}</li>)`).join("");
// const item = document.querySelector('#ingredients')
// item.innerHTML += list

// ====2==
// const item = document.querySelector('#ingredients')

// let listIngredients = '';
// const createForm = () => {
//   for (const ingredient of ingredients) {
//     const li = document.createElement("li");
//     li.textContent = ingredient;
//     li.classList = 'item';
//     listIngredients = listIngredients + li.outerHTML;
//   }
// }
// createForm();

// item.insertAdjacentHTML("afterbegin", listIngredients)

// ====3==
const listIngredients = document.querySelector('#ingredients');

const markup = (ingredient) => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  return element;
};
console.dir(markup);
const createMarkup = ingredients.map(markup);
console.dir(createMarkup);
listIngredients.append(...createMarkup);