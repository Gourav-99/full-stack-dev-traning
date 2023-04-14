let inputEle = document.querySelector("#input-element");
let addBtn = document.querySelector(".input-wrapper button");
let todoList = document.querySelector(".todo-list");
let todos = [];
const showList = () => {
  todoList.innerHTML = "";
  todos.forEach((ele) => {
    let listEle = document.createElement("li");
    let removeBtn = document.createElement("span");
    removeBtn.className = "remove";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let label = document.createElement("label");
    checkbox.checked = ele.completed;
    checkbox.className = "checkbox";
    label.innerHTML = `${ele.text}`;
    removeBtn.innerHTML = "remove";
    listEle.appendChild(checkbox);
    listEle.appendChild(label);
    listEle.appendChild(removeBtn);
    todoList.appendChild(listEle);
    removeBtn.addEventListener("click", (e) => {
      listEle.remove();
      const id = ele.id;
      const index = todos.findIndex((todo) => todo.id === id);
      todos.splice(index, 1);
    });
    checkbox.addEventListener("click", (e) => {
      const check = e.target;
      if (check.checkbox === true) {
        check.checkbox = false;
        check.classList.remove("completed");
      } else {
        check.checkbox = true;
        check.classList.add("completed");
      }
    });
  });
};
addBtn.addEventListener("click", () => {
  if (inputEle.value != null && inputEle.value != " ") {
    console.log("yes");
    todos.push({
      text: inputEle.value,
      completed: false,
      id: Date.now(),
    });
    showList();
  } else {
    alert("!Nothing added to the list. Please enter something");
  }
});
