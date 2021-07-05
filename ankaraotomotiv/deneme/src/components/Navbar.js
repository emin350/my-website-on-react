import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg bg-primary navbar-dark p-4 fixed-top">
      
      <div className="container">

        <Link to={`/`} className="navlink navbar-brand"> <i className="fas fa-car-side"></i>   AR OTOMOTİV </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">

          <ul className="navbar-nav ml-auto">

            <li className="nav-item">

              <Link to={`/Hakkımızda`} className="navlink nav-link" style={{color:"white"}}> Hakkımızda</Link>

            </li>

            <li className="nav-item">

              <Link to={`/Araclarimiz`} className="navlink nav-link"style={{color:"white"}} >  Araçlarımız </Link>

            </li>

            <li className="nav-item">

              <Link to={`/Sigorta`} className="navlink nav-link" style={{color:"white"}}> Sigorta</Link>

            </li>

            <li className="nav-item">

              <Link to={`/iletisim`} className=" navlink nav-link"style={{color:"white"}} > İletişim </Link>

            </li>

         </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
