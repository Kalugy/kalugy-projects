import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Option2 from '../Option2/Main'
import Main from '../Option1/Main'
import './RouterNav.css'

const stylesVersions={
  color:"white",
  margin: "2px"
}

const paddingTest={
  padding:"15px"
}

function RouterNav() {
  return (
    <div>
    <BrowserRouter>
    
      <input type="checkbox" id="collider-button-nav"></input>
      <nav className="nav-test">
        <Link to="kalugy-projects/" style={stylesVersions}>Version1</Link>
        <Link to="kalugy-projects/v2" style={stylesVersions}>Version2</Link>
        <Link to="kalugy-projects/v3" style={stylesVersions}>Version3</Link>
        <Link to="kalugy-projects/v4" style={stylesVersions}>Version4</Link>
      </nav>
      <Routes>
        <Route path="kalugy-projects/" element={<Main/>} />
        <Route path="kalugy-projects/v2" element={<Option2 />} />
        <Route path="kalugy-projects/v3" element={<h1 style={paddingTest}>version3</h1>} />
        <Route path="kalugy-projects/v4" element={<h1 style={paddingTest}>version4</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default RouterNav;