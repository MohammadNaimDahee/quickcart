// Classes
class Todo {
  todo: string;
  date: Date;
  category: string;

  constructor(todo: string, date: Date, category: string) {
    this.todo = todo;
    this.date = date;
    this.category = category;
  }

  toString(): string {
    return `${this.todo} ${this.category} ${this.date}`;
  }
}

const firstTodo: Todo = new Todo("read a book", new Date(), "Study");

console.log(firstTodo);

const secondTodo: Todo = new Todo("buy grocery", new Date(), "Shopping");
console.log(secondTodo);

const todoList: Todo[] = [];

todoList.push(firstTodo);
todoList.push(secondTodo);

console.log(todoList);

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
