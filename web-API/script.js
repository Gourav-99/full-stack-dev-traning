// localStorage.setItem('name', 'Tom');
// const obj = {
//     name: 'Tom',
//     age: 17,
// };
// const arr = ['Tom', 'Bob', 'Sam'];

// localStorage.setItem('nameArr', JSON.stringify(arr));

const button = document.querySelector("button");
const text = document.querySelector("span");
const body = document.querySelector("body");

const initialise = () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.classList.add("dark");
    text.innerHTML = "￼";
  } else {
    text.innerHTML = "￼";
  }
};
initialise();

const changeTheme = () => {
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  text.innerHTML = currentTheme === "dark" ? "￼" : "￼";
  body.classList.toggle("dark");
  localStorage.setItem("theme", currentTheme === "dark" ? "light" : "dark");
};

button.addEventListener("click", changeTheme);

console.log(navigator);
// get user location using navigator
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
});
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  console.log(stream);
});
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  console.log(stream);
});
