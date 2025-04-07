// 1. Select DOM elements
const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

// 2. Load todos from local storage
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todoList.innerHTML = ""; // Clear existing tasks from the list

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => deleteTodo(index));

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// 3. Save new todo
function addTodo() {
  const newTodo = todoInput.value.trim();
  if (newTodo) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
    loadTodos();
  }
}

// 4. Delete a todo
function deleteTodo(index) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  loadTodos();
}

// 5. Attach event listener to the button
addTodoButton.addEventListener("click", addTodo);

// 6. Load tasks when page loads
window.addEventListener("DOMContentLoaded", loadTodos);
