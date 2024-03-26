import { Todo } from "./models/Todo.js";
// Classes
// Data Modifiers
// Module
const firstTodo = new Todo("read a book", new Date(), "Study");
const secondTodo = new Todo("buy grocery", new Date(), "Shopping");
const todoList = [];
todoList.push(firstTodo, secondTodo);
todoList.forEach((todo) => {
    console.log(`${todo.todo}\n${todo.date}\n${todo.toString()}`);
});
// Interacting with DOM (Document Object Model)
const h1 = document.querySelector("h1");
const form = document.querySelector(".todo-form");
const todo = document.querySelector("#todo");
const category = document.querySelector("#category");
const date = document.querySelector("#date");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(todo.value);
    console.log(category.value);
    console.log(date.value);
});
