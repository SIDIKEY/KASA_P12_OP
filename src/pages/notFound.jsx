import React from "react"
import { useEffect, navigate } from "react";
import "./notFound.scss"
import { useNavigate } from "react-router";
function NotFound(){

let navigate = useNavigate(); 
const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
}
  
  return (
    <div className='notFound'>
        <h1 >404</h1>
        <p>Page not found</p>
        <button color="primary" className="px-4" onClick={routeChange}>
              Return
        </button>
      
    </div>
  )
};

export default NotFound;
