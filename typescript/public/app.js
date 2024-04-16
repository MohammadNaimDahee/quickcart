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
    let todoo;
    if (type.value === "normal") {
        todoo = new NormalTodo(todo.value, date.value, category.value);
    }
    else {
        todoo = new PriorityTodo(todo.value, date.value, category.value);
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
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let userOne = addUID({ name: "ahmad", age: 20 });
// let userTwo = addUID("adf")
console.log(userOne.name);
const userThree = {
    uid: 1,
    resourceName: "Person",
    data: { name: "ahmad" },
};
console.log(userThree);
const resoruceOne = {
    uid: 2,
    resourceName: "Todo Item",
    data: [
        "read a book",
        "learn typescript",
        "Subscribe to Quantum Snippets Channel",
    ],
};
console.log(resoruceOne);
