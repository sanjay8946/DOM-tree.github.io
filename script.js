let titleElement = document.getElementById("title");

// Change innerHTML
titleElement.innerHTML = "New Title";

// Change textContent
titleElement.textContent = "New Title";

// Change style properties
titleElement.style.color = "blue";
titleElement.style.fontSize = "24px";

// Add or remove classes using classList
titleElement.classList.add("highlight"); // Add a class

// Select all <p> elements and change background color
let paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "lightyellow";
}

// Create a new <li> element
let newItem = document.createElement("li");

// Set text content of the new <li> element
newItem.textContent = "New list item";

// Identify the parent container (assuming a <ul> with ID 'list')
let parentContainer = document.getElementById("list");

// Append the new <li> element to the parent container
parentContainer.appendChild(newItem);
