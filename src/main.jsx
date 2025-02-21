import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';


import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position='top-right' />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
