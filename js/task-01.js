const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const categoryName = document.querySelectorAll("li.item");

categoryName.forEach(function callback(element) {
  console.log(`Category: ${element.firstElementChild.textContent} 
    Elements: ${element.lastElementChild.children.length}`);
});
