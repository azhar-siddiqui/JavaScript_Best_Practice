// let redDiv = document.getElementById("red");
// let yellowDiv = document.getElementById("yellow");
// let greenDiv = document.getElementById("green");

// redDiv.onclick = () => console.log("red");
// yellowDiv.onclick = () => console.log("yellow");
// greenDiv.onclick = () => console.log("green");

let btn = document.querySelectorAll(".btn");

btn.forEach((btns) => {
  btns.onclick = () => console.log(btns.value);
});
