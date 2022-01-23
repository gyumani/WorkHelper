const todoForm = document.querySelector("#todo_form");
const project = document.querySelector("#project");
const topContent = document.querySelector("#topContent");
const middleContent = document.querySelector("#middleContent");
const bottomContent = document.querySelector("#bottomContent");
const todoList = document.querySelector("#todo_list");

const TODO_KEY = "todos";

let todos = [];

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const date = new Date();
  const time = document.createElement("span");
  time.innerText = date.getHours();
  time.classList.add(date.getHours());
  const project = document.createElement("span");
  project.classList.add("projectli");
  project.innerText = "+" + newTodoObj.project;
  const topContent = document.createElement("span");
  topContent.classList.add("topContentli");
  topContent.innerText = ")" + newTodoObj.topContent;
  const middleContent = document.createElement("span");
  middleContent.classList.add("middleContentli");
  middleContent.innerText = "-" + newTodoObj.middleContent;
  const bottomContent = document.createElement("span");
  bottomContent.classList.add("bottomContentli");
  bottomContent.innerText = "*" + newTodoObj.bottomContent;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteTodo);
  li.appendChild(time);
  li.appendChild(project);
  li.appendChild(topContent);
  li.appendChild(middleContent);
  li.appendChild(bottomContent);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const projectValue = project.value;
  project.value = "";
  const topContentValue = topContent.value;
  topContent.value = "";
  const middleContentValue = middleContent.value;
  middleContent.value = "";
  const bottomContentValue = bottomContent.value;
  bottomContent.value = "";
  const newTodoObj = {
    project: projectValue,
    topContent: topContentValue,
    middleContent: middleContentValue,
    bottomContent: bottomContentValue,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
