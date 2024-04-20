import { TodoListItem } from "./components/TodoListItem.js";
import { NormalTodo } from "./models/NormalTodo.js";
import { PriorityTodo } from "./models/PriorityTodo.js";
// Interacting with DOM (Document Object Model)
const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");
const todoListItem = new TodoListItem(ul);
const form = document.querySelector(".todo-form");
const type = document.querySelector("#type");
const todo = document.querySelector("#todo");
const category = document.querySelector("#category");
const date = document.querySelector("#date");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let values = [
        todo.value,
        date.value,
        category.value,
    ];
    let todoo;
    if (type.value === "normal") {
        todoo = new NormalTodo(...values);
    }
    else {
        todoo = new PriorityTodo(...values);
    }
    todoListItem.render(todoo, type.value);
    clearForm(form);
});
const clearForm = (form) => {
    form
        .querySelectorAll("input, select, textarea")
        .forEach((element) => {
        if (element instanceof HTMLInputElement ||
            element instanceof HTMLSelectElement ||
            element instanceof HTMLTextAreaElement) {
            element.value = "";
        }
    });
};
// TUPLES
let arr = ["ahmad", 20, false];
let tup = ["ahmad", 20, false];
tup[0] = "mohammad";
tup[1] = 20;
console.log(tup);
