document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const typeInput = document.getElementById("type-input");
  const dateInput = document.getElementById("date-input");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    const todoType = typeInput.value.trim();
    const todoDate = dateInput.value;

    if (todoText !== "" && todoType !== "") {
      const todoItem = document.createElement("li");

      const todoContent = document.createElement("div");
      todoContent.textContent = todoText;
      todoItem.appendChild(todoContent);

      const todoInfo = document.createElement("div");
      todoInfo.className = "todo-info";

      const category = document.createElement("div");
      category.className = `category ${todoType}`; // Assign dynamic category class
      category.textContent = todoType;
      todoInfo.appendChild(category);

      const todoDateSpan = document.createElement("span");
      todoDateSpan.textContent = todoDate;
      todoDateSpan.className = "todo-date";
      todoInfo.appendChild(todoDateSpan);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.addEventListener("click", function () {
        todoItem.remove();
      });

      todoInfo.appendChild(deleteButton);
      todoItem.appendChild(todoInfo);

      todoList.appendChild(todoItem);
      todoInput.value = "";
      typeInput.value = "";
      dateInput.value = "";
    }
  });
});
