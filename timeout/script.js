// setTimeout(() => {
//   console.log("executing");
// }, 0);
// console.log("one");
// // for (let index = 0; index < 100000; index++) {
// //   console.log(index);
// // }
// console.log("gg");
// setInterval(() => {
//   console.log("hello");
// }, 1000);
// let index = 0;
// const id = setInterval(() => {
//   console.log("hello");

//   if (++index === 10) {
//     clearInterval(id);
//   }
// }, 1000);
// const age = 11;

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (age > 18) resolve("You are eligible to vote");
//     else reject("You are not eligible to vote");
//   }, 5000);
// });
// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const response = fetch("https://jsonplaceholder.typicode.com/todos");
// response.then((res) => {
//   console.log(res);
//   const jsonData = res.json();
//   jsonData.then((data) => console.log(data));
// });
// console.log(reponse);
// JSON.parse;
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//   fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.json())
// .then(result=>{
//   console.log(result)
// }).catch(error=>{
//   console.log(error)
// })

// const getTodos = async () => {
//   try {
//     console.log();
//     const result = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await result.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getTodos();
const getTodos = async () => {
  try {
    console.log(1);

    await new Promise((resolve) => {
      setTimeout(() => resolve(), 4000);
    });

    console.log(2);

    await new Promise((resolve) => {
      setTimeout(() => resolve(), 5000);
    });

    console.log(3);
  } catch (err) {
    console.log(err);
  }
};

getTodos();
console.log("hello");
