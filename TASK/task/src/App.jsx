import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddCategory from "./pages/Addcategory";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path="add" element={<AddCategory />} />
            <Route path=":id" element={<CategoryDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
