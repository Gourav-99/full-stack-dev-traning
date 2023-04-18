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
    let editBtn = document.createElement("span");
    editBtn.className = "edit-btn";
    editBtn.innerHTML = "edit";
    checkbox.checked = ele.completed;
    checkbox.className = "checkbox";
    label.innerHTML = `${ele.text}`;
    removeBtn.innerHTML = "remove";
    if (checkbox.checked) {
      checkbox.classList.add("completed");
    }
    listEle.appendChild(checkbox);
    listEle.appendChild(label);
    listEle.appendChild(editBtn);
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
      const id = ele.id;
      const checkEle = todos.find((todo) => todo.id === id);
      checkEle.completed = check.checked;
      if (check.checked) {
        check.classList.add("completed");
      } else {
        check.classList.remove("completed");
      }
    });
    editBtn.addEventListener("click", (e) => {
      const element = e.target;
      let currentValue = element.previousElementSibling.innerHTML;
      inputEle.value = currentValue;
      const id = ele.id;
      const checkEle = todos.findIndex((todo) => todo.id === id);
      inputEle.addEventListener("input", function clickHandle(event) {
        let updatedValue = "";
        updatedValue = event.target.value;
        if (updatedValue.trim() !== "") {
          todos[checkEle].text = updatedValue;
        }
        inputEle.removeEventListener("input", clickHandle);
      });
    });
  });
};
addBtn.addEventListener("click", () => {
  if (inputEle.value.trim() !== "") {
    const existingTodoIndex = todos.findIndex(
      (todo) => todo.text === inputEle.value.trim()
    );
    if (existingTodoIndex !== -1) {
      showList();
      return;
    } else {
      todos.push({
        text: inputEle.value,
        completed: false,
        id: Date.now(),
      });
      showList();
    }
    inputEle.value = "";
  } else {
    alert("!Nothing added to the list. Please enter something");
  }
});
