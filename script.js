function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  console.log(todos);
  return todos;
}

function addTodoToLocalStorage(todoText) {
  const todos = loadTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function appendTodoInHTML(todoText) {
  const todoList = document.getElementById("todoList");
  
  const todo = document.createElement("li");
  todo.textContent = todoText;
  todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const submitButton = document.getElementById("addTodo");
  const todoList = document.getElementById("todoList");

  submitButton.addEventListener("click", () => {
    const todoText = todoInput.value;
    if (todoText === "") {
      alert("Please write something for the todo");
    } else {
      addTodoToLocalStorage(todoText);
      appendTodoInHTML(todoText);
      todoInput.value = '';
    }
  });

  todoInput.addEventListener("change", (event) => {
    const todoText = event.target.value;
    event.target.value = todoText.trim();
    console.log(event.target.value);
  });
   const todos = loadTodos();
   todos.todoList.forEach(todo => {
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = todo;
    todoList.appendChild(newTodoItem);
   });
});
