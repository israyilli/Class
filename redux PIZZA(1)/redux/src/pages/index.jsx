import React from "react";
import { add_topping } from "../redux/slices/pizzaSlice";
import { toggle_gluten } from "../redux/slices/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
function Pizza() {
  const gluten = useSelector((state) => state.pizza.gluten);
  const toppings = useSelector((state) => state.pizza.toppings);
  const dispatch = useDispatch();
  // console.log(gluten);

  return (
    <div>
      <h1>Pizza</h1>
      <h2>{gluten ? "true" : "false"}</h2>

      {toppings && toppings.map((item) => <p key={uuidv4()}>{item}</p>)}
      <button
        onClick={() => {
          dispatch(add_topping("pepperoni"));
        }}
      >
        Add Pepperoni
      </button>
      <button
        onClick={() => {
          dispatch(add_topping("anchovies"));
        }}
      >
        Add Anchovies
      </button>
      <button
        onClick={() => {
          dispatch(add_topping("olive"));
        }}
      >
        Add Olives
      </button>
      <button
        onClick={() => {
          dispatch(toggle_gluten(true));
          console.log(gluten);
        }}
      >
        Toggle Gluten
      </button>
    </div>
  );
}

export default Pizza;
