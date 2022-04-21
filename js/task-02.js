const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");

const item = document.querySelector('#ingredients')

item.innerHTML += list


console.log(item);

