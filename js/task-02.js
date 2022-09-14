const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = `${option}`;
  listItemEl.classList.add("item");
  return listItemEl;
});

list.append(...elements);

// const markup = ingredients
// .map((ingredient) => `<li class="item">${ingredient}</li>`)
// .join("");

// console.log(markup);
// list.innerHTML = markup;

// const elements = [];

// for (let i = 0; i < ingredients.length; i++) {
//   const listItemEl = document.createElement('li');
//   listItemEl.classList.add('item');
//   listItemEl.textContent = ingredients[i];
//   elements.push(listItemEl);
// }

// list.append(...elements);