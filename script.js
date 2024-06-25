const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-items");
function addTask() {
  if (inputBox.value === "") {
    alert("Add Somthing!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    todoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#128465;";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}
function showData() {
  todoList.innerHTML = localStorage.getItem("data");
}
showData();
