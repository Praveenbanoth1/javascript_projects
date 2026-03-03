let containerElement = document.createElement("div");
containerElement.classList.add("bg-blue-300","p-8","min-h-screen");
document.body.appendChild(containerElement);

let h1Element = document.createElement("h1");
h1Element.textContent = "Grocery List";
h1Element.classList.add("font-roboto","font-medium","text-white","text-center","mb-5","text-4xl");

containerElement.appendChild(h1Element);

let listContainer = document.createElement("ul");
listContainer.classList.add("bg-white","rounded-lg","py-8","px-12","list-disc");
containerElement.appendChild(listContainer);

let GroceryList = ["Milk","Peanut Butter","Chako Chips","Tomato Soace","Cup Cakes","Noodles"]

for (let groceryLists of GroceryList) {
    let listItems = document.createElement("li");
    listItems.textContent = groceryLists;
    listContainer.appendChild(listItems);
    
    
}

let buttonElement = document.createElement("button");
buttonElement.classList.add("width-100","bg-Red","text-white","rounded");

buttonElement.textContent = "Add Me";
containerElement.appendChild(buttonElement)

console.log(Math.ceil(Math.random()*100))