import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { HashRouter } from 'react-router-dom'

import Option2 from '../Option2/Main'
import Option3 from '../Option3/Option3'
import Option4 from '../Option4/Option4'
import {Option5} from '../Option5/Option5'
import {StackButtom} from "../StackButtom/StackButton";

import Main from '../Option1/Main'
import {Start} from '../Start/Start'
import './RouterNav.css'

import {Router2} from "./Router.js"

function RouterNav() {
  useEffect(()=>{
      document.getElementById('myButton').onclick = function() {
      let menu = document.querySelector(".nav-main-items")
        menu.classList.toggle('active-navbar-main-trans');
      }
      document.getElementById('myButton2').onclick = function() {
        let menu = document.querySelector(".nav-main-items")
          if(!menu.classList.contains('active-navbar-main-trans'))
          {
            menu.classList.add('active-navbar-main-trans');
          }
        }
  })

  return (
    <> 
    <Router2></Router2>
      {/*
      <div className="menu-navbar-main active-main-menu-p" id="main-menu-p">
        <div className="navbar-icon-con" id="myButton">
          <i className="fa-solid fa-bars"></i>
        </div>
        <nav className="nav-main-items" id="myButton2">
          <div className="nav-main-item" >
            <Link to="/v1" className="a-link-nav-s">Html</Link>
          </div>
          <div className="nav-main-item">
            <Link to="/v2" className="a-link-nav-s">Html-Css</Link>
          </div>
          <div className="nav-main-item">
            <Link to="/v3" className="a-link-nav-s">Html-Scss-Js</Link>
          </div>
          <div className="nav-main-item">
            <Link to="/v5" className="a-link-nav-s">VanillaJs</Link>
          </div>
          <div className="nav-main-item">
            <Link to="/v4" className="a-link-nav-s">Blog</Link>
          </div>
          <div className="nav-main-item">
            <Link to="/v6" className="a-link-nav-s">3D(Process)</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/v1" element={<Main/>} />
        <Route path="/v2" element={<Option2 />} />
        <Route path="/v3" element={<Option3/>} />
        <Route path="/v4" element={<Option4/>} />
        <Route path="/v5" element={<Option5/>} />
        <Route path="/" element={<Start/>} />
      </Routes>*/ }
    </>
  );
}
export default RouterNav;