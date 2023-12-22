const express = require("express");
const app = express();
const port = 2808;
let arr = [
  {
    id: 1,
    name: "rahida",
  },
  {
    id: 2,
    name: "samaya",
  },
  {
    id: 3,
    name: "anar",
  },
];

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//!get metodu
app.get("/users", (req, res) => {
  res.send(arr);
});

//!post metodu
app.post("/users", (req, res) => {
  const element = req.body;
  arr.push(element);
  res.send(arr);
});

//!delete
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  arr = arr.filter((elem) => +elem.id !== +id);
  res.send(arr);
});

//!detail
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  arr = arr.find((elem) => +elem.id === +id);
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
