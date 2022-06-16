import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Option2 from '../Option2/Main'
import Option3 from '../Option3/Option3'

import Main from '../Option1/Main'
import './RouterNav.css'

const stylesVersions={
  color:"white",
  fontSize:"1rem",
  fontWeight:"600"

}

const paddingTest={
  padding:"15px"
}

function RouterNav() {
  useEffect(()=>{
    console.log("jere")
    document.getElementById('myButton').onclick = function() {
      let menu = document.querySelector(".nav-main-items")
      
      menu.classList.toggle('active-navbar-main-trans');
    }
    /*
    let menuButton = document.querySelector(".navbar-icon-con")
    console.log("men", menuButton)
    menuButton.addEventListener("click",()=>{
      console.log("CLICK")
      let menu = document.querySelector(".nav-main-items")
      menu.classList.toggle('active-navbar-main-trans')
    })*/
  })

  return (
    <div>
    <BrowserRouter>
      <div className="menu-navbar-main">
        <div className="navbar-icon-con" id="myButton">
          <i className="fa-solid fa-bars"></i>
        </div>
        <nav className="nav-main-items">
          <div className="nav-main-item">
            <Link to="kalugy-projects/" style={stylesVersions}>Version1</Link>
          </div>
          <div className="nav-main-item">
            <Link to="kalugy-projects/v2" style={stylesVersions}>Version2</Link>
          </div>
          <div className="nav-main-item">
            <Link to="kalugy-projects/v3" style={stylesVersions}>Version3</Link>
          </div>
          <div className="nav-main-item">
            <Link to="kalugy-projects/v4" style={stylesVersions}>Version4</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="kalugy-projects/" element={<Main/>} />
        <Route path="kalugy-projects/v2" element={<Option2 />} />
        <Route path="kalugy-projects/v3" element={<Option3/>} />
        <Route path="kalugy-projects/v4" element={<h1 style={paddingTest}>version4</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default RouterNav;