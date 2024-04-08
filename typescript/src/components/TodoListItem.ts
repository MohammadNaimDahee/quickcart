import { HasFormatter } from "../interfaces/HasFormatter";

export class TodoListItem {
  constructor(private container: HTMLUListElement) {}

  render = (item: HasFormatter, type: string) => {
    const todoItem = document.createElement("li");

    const todoType = document.createElement("h4");
    todoType.textContent = type;
    todoItem.appendChild(todoType);

    const todoContent = document.createElement("div");
    todoContent.textContent = item.todo;
    todoItem.appendChild(todoContent);

    const todoInfo = document.createElement("div");
    todoInfo.className = "todo-info";
    todoItem.appendChild(todoInfo);

    const category = document.createElement("div");
    category.className = `category ${item.category}`;
    category.textContent = item.category;
    todoInfo.appendChild(category);

    const dateSpan = document.createElement("span");
    dateSpan.textContent = item.date;
    dateSpan.className = "todo-date";
    todoInfo.appendChild(dateSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => {
      todoItem.remove();
    });
    todoInfo.appendChild(deleteButton);

    if (type === "priority") {
      this.container.prepend(todoItem);
    } else {
      this.container.append(todoItem);
    }
  };
}
