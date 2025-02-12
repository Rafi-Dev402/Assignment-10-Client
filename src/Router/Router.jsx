import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";

import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";


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
        }
    ]
  },
]);

export default router