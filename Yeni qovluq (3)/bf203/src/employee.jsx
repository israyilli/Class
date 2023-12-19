import React from "react";
import employeeArr from "./data";
import data from "./data";

function Employee() {
  let sumSalary = data.reduce((acc, curr) => {
    return acc + curr.salary;
  }, 0);
  return (
    <div className="box1">
      <h2>Employee List</h2>
      <ul>
        {employeeArr.map((element, i) => {
          return <li key={i}>{element.name}</li>;
        })}
      </ul>
      <span>Average Salary: {(sumSalary / data.length).toFixed(2)}</span>
    </div>
  );
}

export default Employee;
