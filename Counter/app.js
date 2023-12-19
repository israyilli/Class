console.log("counter");
var minusBtn = document.querySelector(".minusBtn");
var count = document.querySelector(".count");
var plusBtn = document.querySelector(".plusBtn");
// const counter =({title, count}=>{
//     const [count, setCount] = useState("");
// })
var counter = 0;
minusBtn === null || minusBtn === void 0 ? void 0 : minusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    counter -= 1;
    count === null || count === void 0 ? void 0 : count.innerHTML = counter;
    console.log("minus");
});
plusBtn === null || plusBtn === void 0 ? void 0 : plusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    counter += 1;
    count === null || count === void 0 ? void 0 : count.innerHTML = counter;
    console.log("plus");
});
