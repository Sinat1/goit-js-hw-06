const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`); 



const categoryName = document.querySelectorAll('.item h2');

categoryName.forEach(function callback(title) {
    const arr = `Category: ${title.textContent}`
    console.log(arr);
});


const elemsNumber = document.querySelectorAll('.item ul');

elemsNumber.forEach(function callback(items) {
    const elementLi = items.children;
    const number = `Elements: ${elementLi.length}`;
    console.log(number);
});

 

