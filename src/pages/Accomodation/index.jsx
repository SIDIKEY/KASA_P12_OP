import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "../../components/nav";
import Cover from "../../images/Temporary_cover.jpg"
import AccomodationComponent from "../../components/AccomodationComponent";
import Footer from "../../components/Footer";

function Accomodationselected(){
    const navigate = useNavigate();

    
    
    const location = useLocation();

    useEffect(() => {
        if (!location.state) {
            console.log(">>>>>>>>>>>>>>>>(ID Error)", location?.state)
            navigate("/*", { replace: true });
          }
      },[])
    
    console.log("location:", location);    
        return  <div>
                   <Nav />
                   
                <AccomodationComponent lodgingId={location?.state?.lodgingId}/>
                <Footer />
                


               

                
                </div>
        
}

export default Accomodationselected;