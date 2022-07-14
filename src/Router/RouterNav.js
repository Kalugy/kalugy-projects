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
import Option4 from '../Option4/Option4'
import {Option5} from '../Option5/Option5'
import {StackButtom} from "../StackButtom/StackButton";

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
      document.getElementById('myButton').onclick = function() {
      let menu = document.querySelector(".nav-main-items")
        menu.classList.toggle('active-navbar-main-trans');
      }
  })

  return (
    <> 
    <StackButtom/>
    <BrowserRouter>
    
      <div className="menu-navbar-main">
        <div className="navbar-icon-con" id="myButton">
          <i className="fa-solid fa-bars"></i>
        </div>
        <nav className="nav-main-items">
          <div className="nav-main-item">
            <Link to="kalugy-projects/" style={stylesVersions}>HTML</Link>
          </div>
          <div className="nav-main-item">
            <Link to="kalugy-projects/v2" style={stylesVersions}>HTML-CSS</Link>
          </div>
          <div className="nav-main-item">
            <Link to="kalugy-projects/v3" style={stylesVersions}>HTML-CSS-Js</Link>
          </div>
          <div className="nav-main-item">
            <Link to="kalugy-projects/v4" style={stylesVersions}>React</Link>
          </div>
          <div className="nav-main-item">
            <Link to="kalugy-projects/v5" style={stylesVersions}>VanillaJs</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="kalugy-projects/" element={<Main/>} />
        <Route path="kalugy-projects/v2" element={<Option2 />} />
        <Route path="kalugy-projects/v3" element={<Option3/>} />
        <Route path="kalugy-projects/v4" element={<Option4/>} />
        <Route path="kalugy-projects/v5" element={<Option5/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default RouterNav;