import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

function ToDo() {
  const todos = useSelector((state) => state.todo.todos);
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h2>ToDo List</h2>
      <input
        type="text"
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(todos);
          dispatch(addTodo(inp));
         
        }}
      >
        Add
      </button>
      <h4>Todos</h4>
      <ul>
        {todos &&
          todos.map((element) => {
            return <li key={element.id}>{element.tittle}</li>;
          })}
      </ul>
    </div>
  );
}
export default ToDo;
