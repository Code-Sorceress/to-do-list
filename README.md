# to-do-list

Select DOM Elements
javascript
Copy
Edit
const todoInput = document.getElementById('todoInput');
Finds the <input> element where users type in their tasks.

Stores it in the todoInput variable so we can access its value in JS.

javascript
Copy
Edit
const addTodoButton = document.getElementById('addTodoButton');
Grabs the "Add Task" <button> element.

We will attach a click event listener to this button later.

javascript
Copy
Edit
const todoList = document.getElementById('todoList');
Targets the <ul> where tasks will be listed.

We'll use this to add new <li> elements dynamically.

🔹 Function: loadTodos()
javascript
Copy
Edit
function loadTodos() {
Defines a function that loads saved tasks from Local Storage and displays them on the page.

javascript
Copy
Edit
const todos = JSON.parse(localStorage.getItem('todos')) || [];
Retrieves the string stored under the key "todos" from Local Storage.

JSON.parse() converts it back into an array.

If no tasks exist, it defaults to an empty array.

javascript
Copy
Edit
todoList.innerHTML = '';
Clears the current content of the list so it doesn’t duplicate items when re-rendering.

javascript
Copy
Edit
todos.forEach((todo, index) => {
Loops through each task in the todos array.

Provides the task (todo) and its position (index) in the array.

javascript
Copy
Edit
const li = document.createElement('li');
li.textContent = todo;
Creates a new <li> element for each task.

Sets its text to the task's content.

javascript
Copy
Edit
const deleteBtn = document.createElement('button');
deleteBtn.textContent = '❌';
Creates a small delete button next to the task.

Sets its icon/text to a red cross emoji.

javascript
Copy
Edit
deleteBtn.style.marginLeft = '10px';
Adds a little spacing between the task and the delete button.

javascript
Copy
Edit
deleteBtn.addEventListener('click', () => deleteTodo(index));
Adds a click listener to the delete button.

When clicked, it calls the deleteTodo() function, passing the index of the task to delete.

javascript
Copy
Edit
li.appendChild(deleteBtn);
Adds the delete button to the <li>.

javascript
Copy
Edit
todoList.appendChild(li);
Adds the complete <li> (with task text and delete button) to the list on the page.

javascript
Copy
Edit
});
}
Ends the loop and the loadTodos function.

🔹 Function: addTodo()
javascript
Copy
Edit
function addTodo() {
Defines the function to add a new task.

javascript
Copy
Edit
const newTodo = todoInput.value.trim();
Gets the value typed by the user into the input field.

.trim() removes any extra spaces from beginning and end.

javascript
Copy
Edit
if (newTodo) {
Checks if the input is not empty before adding.

javascript
Copy
Edit
const todos = JSON.parse(localStorage.getItem('todos')) || [];
Loads existing tasks from Local Storage or starts with an empty array.

javascript
Copy
Edit
todos.push(newTodo);
Adds the new task to the array of tasks.

javascript
Copy
Edit
localStorage.setItem('todos', JSON.stringify(todos));
Saves the updated task list back into Local Storage (as a string).

javascript
Copy
Edit
todoInput.value = '';
Clears the input field after adding the task.

javascript
Copy
Edit
loadTodos();
Calls the loadTodos() function to refresh the list on the page.

javascript
Copy
Edit
}
}
Ends the if condition and the addTodo() function.

🔹 Function: deleteTodo(index)
javascript
Copy
Edit
function deleteTodo(index) {
Defines a function to remove a task at a specific position in the array.

javascript
Copy
Edit
const todos = JSON.parse(localStorage.getItem('todos')) || [];
Loads the current list of tasks from Local Storage.

javascript
Copy
Edit
todos.splice(index, 1);
Removes 1 item at the given index using splice().

javascript
Copy
Edit
localStorage.setItem('todos', JSON.stringify(todos));
Saves the updated list back into Local Storage.

javascript
Copy
Edit
loadTodos();
Reloads the task list on the page to reflect the change.

javascript
Copy
Edit
}
Ends the deleteTodo() function.

🔹 Add Event Listeners
javascript
Copy
Edit
addTodoButton.addEventListener('click', addTodo);
When the "Add Task" button is clicked, the addTodo() function is triggered.

javascript
Copy
Edit
window.addEventListener('DOMContentLoaded', loadTodos);
When the page finishes loading, loadTodos() is called automatically.

This ensures that previously saved tasks appear as soon as the page opens.
