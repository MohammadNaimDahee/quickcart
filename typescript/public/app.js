import { NormalTodo } from "./models/NormalTodo.js";
import { PriorityTodo } from "./models/PriorityTodo.js";
let todoList = [];
// Interacting with DOM (Document Object Model)
const h1 = document.querySelector("h1");
const form = document.querySelector(".todo-form");
const type = document.querySelector("#type");
const todo = document.querySelector("#todo");
const category = document.querySelector("#category");
const date = document.querySelector("#date");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let todoo;
    if (type.value === "normal") {
        todoo = new NormalTodo(todo.value, date.value, category.value);
    }
    else {
        todoo = new PriorityTodo(todo.value, date.value, category.value);
    }
    todoList.push(todoo);
    console.log(todoList);
});
