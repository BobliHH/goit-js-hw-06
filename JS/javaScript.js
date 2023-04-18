// #Exercițiul 1

const categories = document.getElementById(`categories`);

const categoriesNumber = categories.childElementCount;
console.log(`Number of categories:${categoriesNumber}`);

const itemElements = document.querySelectorAll(".item");
itemElements.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});




// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// console.log(ingredients);

