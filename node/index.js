const express = require("express");
const app = express();
const port = 3000;
const data = require("./db.json");

app.get("/", (req, res) => {});

//getAll product
app.get("/products", (req, res) => {
  let filteredData = data.products;
  if (req.query.name) {
    filteredData = filteredData.filter((x) =>
      x.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
  }
  if (req.query.price) {
    filteredData = filteredData.filter((x) => x.price == req.query.price);
  }
  if (req.query.discountPercentage) {
    filteredData = filteredData.filter(
      (x) => x.discountPercentage == req.query.discountPercentage
    );
  }

  res.send(filteredData);
});

//get product by id
app.get("/products", (req, res) => {
  res.send(data.products.find((x) => x.id == req.params.id));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
