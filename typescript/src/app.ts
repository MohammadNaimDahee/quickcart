import { TodoListItem } from "./components/TodoListItem.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { NormalTodo } from "./models/NormalTodo.js";
import { PriorityTodo } from "./models/PriorityTodo.js";

// Interacting with DOM (Document Object Model)
const h1: HTMLHeadingElement = document.querySelector("h1")!;
const ul: HTMLUListElement = document.querySelector("ul")!;
const todoListItem = new TodoListItem(ul);

const form: HTMLFormElement = document.querySelector(
  ".todo-form"
) as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const todo = document.querySelector("#todo") as HTMLInputElement;
const category = document.querySelector("#category") as HTMLSelectElement;
const date = document.querySelector("#date") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  let todoo: HasFormatter;
  if (type.value === "normal") {
    todoo = new NormalTodo(todo.value, date.value, category.value);
  } else {
    todoo = new PriorityTodo(todo.value, date.value, category.value);
  }

  todoListItem.render(todoo, type.value);
  clearForm(form);
});

const clearForm = (form: HTMLFormElement) => {
  form
    .querySelectorAll("input, select, textarea")
    .forEach((element: Element) => {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
      ) {
        element.value = "";
      }
    });
};

// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let userOne = addUID({ name: "ahmad", age: 20 });
// let userTwo = addUID("adf")
console.log(userOne.name);

// With interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const userThree: Resource<object> = {
  uid: 1,
  resourceName: "Person",
  data: { name: "ahmad" },
};

console.log(userThree);

const resoruceOne: Resource<string[]> = {
  uid: 2,
  resourceName: "Todo Item",
  data: [
    "read a book",
    "learn typescript",
    "Subscribe to Quantum Snippets Channel",
  ],
};

console.log(resoruceOne);
