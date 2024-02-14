const inputField = document.getElementById("js-input-field");
const addBtn = document.getElementById("js-add-btn");
const taskList = document.getElementById("js-list-ul");

function addTask() {
  if (inputField.value === "") {
    alert("Please add task details");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputField.value = "";
  saveTask();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagname === "LI") {
      e.target.classList.toggle("completed");
      saveTask();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);

function saveTask() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function displayTasks() {
  taskList.innerHTML = localStorage.getItem("tasks");
}

displayTasks();
