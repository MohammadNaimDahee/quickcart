import { HasFormatter } from "./interfaces/HasFormatter.js";
import { NormalTodo } from "./models/NormalTodo.js";
import { PriorityTodo } from "./models/PriorityTodo.js";
let todoList: HasFormatter[] = [];

// Interacting with DOM (Document Object Model)
const h1: HTMLHeadingElement = document.querySelector("h1")!;

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
  todoList.push(todoo);

  console.log(todoList);
});
