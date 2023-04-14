// console.log(document.getElementById);
// let listObj = document.getElementsByClassName("list-ele");
// listObj.forEach((element) => {
//   console.log(element);
// });
const body = document.querySelector("body");
// const button = document.querySelector("button");

// const callback = (event) => {
//   console.log(event);
// };

// button.addEventListener("click", callback);
// body.addEventListener("mousemove", (event) => {
//   console.log(event.clientX);
//   const ele = document.createElement("div");
//   ele.style = `width:15px; height:15px; position:absolute; top:${event.clientY}px; left:${event.clientX}px; background-color:red;broder-radius:50%;`;
//   body.appendChild(ele);
// });
// let content = document.querySelector("#content");
// document.addEventListener("scroll", (event) => {
//   console.log(event.target.scrollingElement.scrollTop);
// });
// const content = document.querySelector("#content");
// const progressBar = document.querySelector("progress");

// const contentHeight = content.clientHeight;

// document.addEventListener("scroll", (event) => {
//   const scroll = window.scrollY;
//   const percentage = scroll / (contentHeight - window.innerHeight);
//   progressBar.value = (percentage * 100).toFixed(0);
// });
const todoContainer = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

const todos = [];
const renderList = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener("click", (e) => {
      li.remove();
    });

    button.innerHTML = "delete";
    li.innerHTML = `
      ${todo.text} 
      `;
    li.appendChild(button);
    todoContainer.appendChild(li);
  });
};

const handleAdd = (e) => {
  const itemToAdd = input.value;
  if (itemToAdd !== null && itemToAdd !== "") {
    todos.push({
      text: itemToAdd,
      completed: false,
      id: Date.now(),
    });
    // console.log(todos);
    renderList();
    return;
  } else {
    return window.alert("adding an empty item is not possible");
  }
};

button.addEventListener("click", handleAdd);
