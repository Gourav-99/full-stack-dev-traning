const inputEle = document.querySelector("#input-element");
const addBtn = document.querySelector(".input-wrapper button");
const todoList = document.querySelector(".todo-list");
const todos = [];

const createListItem = (ele) => {
  const listEle = document.createElement("li");
  const removeBtn = document.createElement("span");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");

  removeBtn.className = "remove";
  checkbox.type = "checkbox";
  checkbox.checked = ele.completed;
  checkbox.className = "checkbox";
  label.innerHTML = `${ele.text}`;
  removeBtn.innerHTML = "remove";
  if (ele.completed) {
    checkbox.classList.toggle("completed");
  }

  listEle.appendChild(checkbox);
  listEle.appendChild(label);
  listEle.appendChild(removeBtn);

  return listEle;
};

const addRemoveEventListener = (listEle, ele) => {
  const removeBtn = listEle.querySelector(".remove");
  removeBtn.addEventListener("click", (e) => {
    listEle.remove();
    const id = ele.id;
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
  });
};

const addCheckboxEventListener = (listEle, ele) => {
  const checkbox = listEle.querySelector(".checkbox");
  checkbox.addEventListener("click", (e) => {
    const check = e.target;
    const id = ele.id;
    const currentEle = todos.find((todo) => todo.id === id);
    currentEle.completed = check.checked;

    if (check.checked) {
      check.classList.add("completed");
    } else {
      check.classList.remove("completed");
    }
  });
};

const showList = () => {
  todoList.innerHTML = "";
  todos.forEach((ele) => {
    const listEle = createListItem(ele);
    addRemoveEventListener(listEle, ele);
    addCheckboxEventListener(listEle, ele);
    todoList.appendChild(listEle);
  });
};

addBtn.addEventListener("click", () => {
  if (inputEle.value.trim() !== "") {
    todos.push({
      text: inputEle.value,
      completed: false,
      id: Date.now(),
    });
    showList();
  } else {
    alert("Nothing added to the list. Please enter something");
  }
});
