import React from 'react';
import Navbar from "./Navbar";
import Cards from "./Cards";
import "./Cards.css";
import Footer from './Footer';

function Araclarimiz() {
    return (
        
        <div >
        <Navbar/>   
      <div className="araclarimiz"> <Cards/> </div>  
      <Cards/>
        <Cards/>
        <Cards/>  
        <Cards/>
        <Footer/>
        </div>
    )
}

export default Araclarimiz
