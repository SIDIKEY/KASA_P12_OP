import React from 'react';
import Nav from '../../components/nav.jsx';
import "./index.scss";
import Banner from "../../components/banner.jsx"
import Accomodationgrid from '../../components/Grid_accomodation.jsx';
import Footer from '../../components/Footer.jsx';


function Home() {
  
  return(
    <div className='foot'>
    
     <Nav />
     <Banner />
     <Accomodationgrid />
     <Footer />
     
    </div>
  )
  
                    
      
}

export default Home