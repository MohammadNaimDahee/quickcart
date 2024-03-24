"use strict";
// Interacting with DOM (Document Object Model)
const h1 = document.querySelector("h1");
console.log(h1.innerText);
const form = document.querySelector(".todo-form");
console.log(form.children);
const todo = document.querySelector("#todo");
const category = document.querySelector("#category");
const date = document.querySelector("#date");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(todo.value);
    console.log(category.value);
    console.log(date.value);
});
