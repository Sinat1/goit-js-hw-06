const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function addLiItems(element) {
  const liRef = document.createElement("li");
  liRef.textContent = element;
  liRef.classList.add("item");

  const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.appendChild(liRef);
});
