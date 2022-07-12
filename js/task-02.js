const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients')
console.log(ingredientsUl)

const elements = ingredients.map(option => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsUl.appendChild(ingredientsEl);
  ingredientsEl.textContent = option;
});



