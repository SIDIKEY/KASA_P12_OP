import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Accomodationselected from './pages/Accomodation';
import DisplayPage from './pages/Lodgings';
import "./index.scss"
import NotFound from './pages/notFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />
  },
  {
    path: "/accomodation/:id",
    element: <Accomodationselected />
  },
  
  {
    path: "/*",
    element: <NotFound />

  }
]);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

   
  </React.StrictMode>
);




