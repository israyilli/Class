import UserRoot from "../pages/user/userRoot"
import Home from "../pages/user/home"
import Products from "../pages/user/products"
import Detail from "../pages/user/detail"
import Login from "../pages/user/login"
import Register from "../pages/user/register"
import NoPage from "../pages/noPage"
import Navbar from "../layout/Navbar"

export const Routes=[
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/products",
                element:<Products/>,
            },
            {
                path:"/products/:id",
                element:<Detail/>,
            },
            {
                path:"/login",
                element:<Login/>,
            },
            {
                path:"/register",
                element:<Register/>,
            }
        ]
    },
    {
        path:"*",
        element:<NoPage/>
    }  
]