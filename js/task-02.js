const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  
  ingredientsEl.textContent = option;
  return ingredientsEl;
});

ingredientsUl.append(...elements);

