const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

// const markup = ingredients
// .map((ingredient) => `<li class="item">${ingredient}</li>`)
// .join("");

// console.log(markup);
// list.innerHTML = markup;

const elements = [];

for (let i = 0; i < ingredients.length; i++) {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredients[i];
  elements.push(listItemEl);
}

list.append(...elements);