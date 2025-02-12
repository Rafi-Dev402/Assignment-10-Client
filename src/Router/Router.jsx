import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";

import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import SignUp from "../Pages/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
            path:'/',
            element: <HomePage/>
        },
        {
            path:'/login',
            element:<LoginPage/>
        },
        {
            path:'/signUp',
            element:<SignUp/>
        },
        
    ]
  },
]);

export default router