// Interfaces
interface Shape {
  name: string;
  color: (color: string) => void;
  area: () => number;
}

let shape: Shape = {
  name: "shape",
  color: (color: string): void => {
    console.log(color);
  },
  area: (): number => {
    return 5;
  },
};

console.log(shape);

let circle: Shape = {
  name: "Circle",
  color: (color: string) => {
    console.log(color);
  },
  area: () => {
    return 10 * Math.sqrt(Math.PI);
  },
};

console.log(circle.area());

import { Todo } from "./models/Todo.js";
// Classes
// Data Modifiers
// Module

const firstTodo: Todo = new Todo("read a book", new Date(), "Study");
const secondTodo: Todo = new Todo("buy grocery", new Date(), "Shopping");

const todoList: Todo[] = [];

todoList.push(firstTodo, secondTodo);

todoList.forEach((todo: Todo) => {
  console.log(`${todo.todo}\n${todo.date}\n${todo.toString()}`);
});

// Interacting with DOM (Document Object Model)
const h1: HTMLHeadingElement = document.querySelector("h1")!;

const form: HTMLFormElement = document.querySelector(
  ".todo-form"
) as HTMLFormElement;

const todo = document.querySelector("#todo") as HTMLInputElement;
const category = document.querySelector("#category") as HTMLSelectElement;
const date = document.querySelector("#date") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  console.log(todo.value);
  console.log(category.value);
  console.log(date.value);
});
