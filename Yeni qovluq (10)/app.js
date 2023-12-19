let cards = document.querySelector(".cards");
let url = "http://localhost:3000/singers";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // elementleri yaratdiq
    data.forEach((element, i) => {
      cards.innerHTML += `<div class="card" style="width: 18rem;"> 
        <div class="img_wrapper"><img src="${element.image}" class="card-img-top"  alt="..."></div>
        <div class="card-body"
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.nationality}</p>
          <a href="#" class="btn btn-primary">Detail</a>
          <button type="button" class="btn btn-primary"><i class="fa-solid fa-trash-can"></i></button>
          <button type="button" class="btn btn-primary"><i class="fa-regular fa-heart"></i></button>
          
        </div>
      </div>`;
    });
  });

let favIcons = document.querySelectorAll(".favIcon");

let arr = [];

let localFavArr = JSON.parse(localStorage.getItem("fav"));

if (localFavArr) {
  arr = [...localFavArr];
}
