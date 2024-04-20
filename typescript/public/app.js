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
// With Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["TODO_ITEM"] = 1] = "TODO_ITEM";
    ResourceType[ResourceType["PERSON"] = 2] = "PERSON";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
})(ResourceType || (ResourceType = {}));
const resourceOne = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: "ahmad" },
};
const resoruceTwo = {
    uid: 2,
    resourceType: ResourceType.TODO_ITEM,
    data: [
        "read a book",
        "learn typescript",
        "Subscribe to Quantum Snippets Channel",
    ],
};
console.log(resourceOne, resoruceTwo);
