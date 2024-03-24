// Interacting with DOM (Document Object Model)

const h1: HTMLHeadingElement = document.querySelector("h1")!;
console.log(h1.innerText);

const form: HTMLFormElement = document.querySelector(
  ".todo-form"
) as HTMLFormElement;

console.log(form.children);

const todo = document.querySelector("#todo") as HTMLInputElement;
const category = document.querySelector("#category") as HTMLSelectElement;
const date = document.querySelector("#date") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  console.log(todo.value);
  console.log(category.value);
  console.log(date.value);
});
