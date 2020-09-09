//___________ vars

let todoButton = document.getElementById("todo-button");
let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");
let deleteTodoButton = document.querySelector(".delete-button");
let checkedTodo = document.getElementById("todo-list");

//____________Event Listeners

todoButton.addEventListener("click", addTodo);
checkedTodo.addEventListener("click", clearTodo);
// deleteTodoButton.addEventListener("click", deleteTodo);

//____________Functions

function addTodo(event) {
  // prevent form to submit / reload auto
  event.preventDefault();
  // create div to hold the li & button
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  // create Li
  let todoListItem = document.createElement("li");
  todoListItem.innerText = todoInput.value;
  todoListItem.classList.add("todo-list-item");
  todoDiv.appendChild(todoListItem);
  //create Button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML =
    "Delete" + "<i class= 'delete-icon fas fa-trash-alt'> </i>";
  deleteButton.classList.add("delete-button");
  todoDiv.appendChild(deleteButton);
  // adding todo list to the div
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

// to delete / mark the input

function clearTodo(event) {
  let item = event.target;
  // delete todo

  if (item.classList[0] === "delete-button") {
    let todo = item.parentElement;
    todo.remove();
  }
  // Mark checked todo

  if (item.classList[0] === "todo-list-item") {
    let todo = item.parentElement;
    todo.classList.toggle("done");
  }
}

// i want to do nothing when the input value less than 0 ! still didnt find it

// function todoInputLength() {
//   return todoInput.value.length;
// }
// function addTodoAfterClick() {
//   if (todoInputLength() > 0) {
//     addTodo();
//   }
// }
