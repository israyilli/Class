import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);

  // useEffect(() => {
  //   fetch("https://northwind.vercel.app/api/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });
  useEffect(() => {
    axios("https://6554d83163cafc694fe7163f.mockapi.io/Categories").then(
      (res) => {
        console.log(res.data);
        setCategories(res.data);
      }
    );
  }, []);

  return (
    <>
      <h2>Products</h2>
      <ul>
        {categories.map((element, i) => (
          <li key={i}>
            {element.name}
            <button>edit</button>
            <button
              data-id={element.id}
              onClick={(e) => {
                // console.log(e.target);
                let arr = [...categories];
                arr = arr.filter(
                  (element) =>
                    element.id != e.target.getAttribute("categories-id")
                );
                // console.log(arr);

                setCategories(arr);
                axios.delete(
                  "https://6554d83163cafc694fe7163f.mockapi.io/Categories" +
                    e.target.getAttribute("categories-id")
                );
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <form action="">
        <input
          value={name}
          type="text"
          placeholder="category name"
          onChange={(e) => {
            // console.log(e.target.value);
            setName(e.target.value);
          }}
        />
        <input
          value={description}
          type="text"
          placeholder="category desc"
          onChange={(e) => {
            // console.log(e.target.value);
            setDescription(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let obj = {
              name: name,
              description: description,
            };
            setName("");
            setDescription("");
            axios
              .post(
                "https://6554d83163cafc694fe7163f.mockapi.io/Categories",
                obj
              )
              .then((res) => {
                setCategories([...categories, res.data]);
              });
          }}
        >
          add
        </button>
      </form>
    </>
  );
}
export default App;
