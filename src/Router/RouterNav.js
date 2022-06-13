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

const test ={
  background: "#000",
  
}
const stylesVersions={
  color:"white",
  margin: "2px"
}

function RouterNav() {
  return (
    <div>
    <BrowserRouter>
      <nav style={test}>
        <Link to="/" style={stylesVersions}>Version1</Link>
        <Link to="test" style={stylesVersions}>Version2</Link>
        <Link to="test2" style={stylesVersions}>Version3</Link>
        <Link to="test3" style={stylesVersions}>Version4</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="test" element={<Option2 />} />
        <Route path="test2" element={<h1>version3</h1>} />
        <Route path="test3" element={<h1>version4</h1>} />
        <Route path="test4" element={<h1>version5</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default RouterNav;