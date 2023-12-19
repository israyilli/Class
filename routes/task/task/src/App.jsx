import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './layout/Navbar';
import { Routes } from './routes/routes';

// console.log(routes)
const router = createBrowserRouter(Routes)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router = {router}/>
    </>
  )
}

export default App
