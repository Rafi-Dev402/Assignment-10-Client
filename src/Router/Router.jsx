import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";

import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import SignUp from "../Pages/SignUp";
import MyEquipment from "../Pages/MyEquipment";
import PrivetRoute from "./PrivetRoute";
import AddEquipment from "../Pages/AddEquipment";
import AllEquipment from "../Pages/AllEquipment";
import EquipmentDetails from "../Pages/EquipmentDetails";
import UpdateEquipment from "../Pages/UpdateEquipment";
import ErrorPage from "../Pages/ErrorPage";


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
        {
          path:'/myEquipment/:email',
          element:<PrivetRoute><MyEquipment/></PrivetRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/equipment/${params?.email}`)
        },
        {
          path:'/addEquipment',
          element:<PrivetRoute><AddEquipment/></PrivetRoute>
        },
        {
          path:'/updateEquipment/:id',
          element:<PrivetRoute><UpdateEquipment/></PrivetRoute>,
          loader:({params})=> fetch(`http://localhost:5000/equipments/${params?.id}`)
        },
        {
          path:'/allEquipment',
          element:<AllEquipment/>,
          loader: ()=> fetch('http://localhost:5000/equipments')
        },
        {
          path:'/equipmentDetails/:id',
          element:<PrivetRoute><EquipmentDetails/></PrivetRoute>,
          loader:({params})=> fetch(`http://localhost:5000/equipments/${params.id}`)
        }
        
    ],
    errorElement: <ErrorPage/>
  },
]);

export default router