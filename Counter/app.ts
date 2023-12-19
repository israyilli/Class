console.log("counter");

let minusBtn = document.querySelector(".minusBtn");
let count = document.querySelector(".count");
let plusBtn = document.querySelector(".plusBtn");
// const counter =({title, count}=>{
//     const [count, setCount] = useState("");

// })

let counter: number = 0;

minusBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  counter -= 1;
  count?.innerHTML = counter;
  console.log("minus");
});
plusBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  counter += 1;
  count?.innerHTML = counter;
  console.log("plus");
});
