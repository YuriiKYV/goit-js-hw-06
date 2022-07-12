
const countCategories = document.querySelectorAll('.item');

console.log('Number of categories:', countCategories.length);

const itemCategory = countCategories.forEach(category => {
    console.log('Category:' ,category.querySelector('h2').textContent)
    console.log('Elements:', category.querySelectorAll('li').length)
});


