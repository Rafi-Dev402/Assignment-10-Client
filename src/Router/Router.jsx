import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
            path:'/home',
            element:<Home/>
        },
        {
            path:'/login',
            element:<LoginPage/>
        }
    ]
  },
]);

export default router