import React from 'react';
import Navbar from "../../../layout/Navbar";
import {Outlet} from "react-router-dom";

function UseRoot() {
  return (
    <div>
      <h1>UserRoot</h1>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default UseRoot