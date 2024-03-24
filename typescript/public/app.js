"use strict";
// Classes
class Todo {
    constructor(todo, date, category) {
        this.todo = todo;
        this.date = date;
        this.category = category;
    }
    toString() {
        return `${this.todo} ${this.category} ${this.date}`;
    }
}
const firstTodo = new Todo("read a book", new Date(), "Study");
console.log(firstTodo);
const secondTodo = new Todo("buy grocery", new Date(), "Shopping");
console.log(secondTodo);
const todoList = [];
todoList.push(firstTodo);
todoList.push(secondTodo);
console.log(todoList);
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
