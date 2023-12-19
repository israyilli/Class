import { useState } from "react";
import "./App.css";
import Employee from "./employee";
// import { studentsArr } from "Students";
import Students from "./employee";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Employee />
    </>
  );
}

export default App;
