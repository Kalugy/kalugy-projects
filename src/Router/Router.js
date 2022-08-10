import React,{ useEffect } from "react";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";

import {Start} from '../Start/Start'
import Main from '../Option1/Main'
import Option2 from '../Option2/Main'
import Option3 from '../Option3/Option3'
import {Option5} from '../Option5/Option5'

import {Option6} from '../Option6/Option6'
//Blogs
import {Home} from '../Option4/pages/home/Home'
import {Categories} from '../Option4/pages/categories/Categories'
import {Review} from '../Option4/pages/review/Review'
import {News} from '../Option4/pages/news/News'
import {Membership} from '../Option4/pages/membership/Membership'
import {Contact} from '../Option4/pages/contact/Contact'
import {SignIn} from '../Option4/pages/signin/SingIn'
import {SignUp} from '../Option4/pages/signup/SignUp'
import {Blog} from '../Option4/pages/blog/Blog'
import {Layout} from '../Option4/pages/shared/Layout'
import {MainHome} from '../MainHome/MainHome'

import './RouterNav.css'

let routes =  [
  {
    path: "/",
    element: <Menu />,
    children: [
      { index: true, element: <Start /> },
      {path: "/v1",element: <Main />},
      {path: "/v2",element: <Option2 />},
      {path: "/v3",element: <Option3 />},
      {path: "/v4",
        element: <Layout />,
        children: [
          { index: true, element: <Home />},
          { path: "/v4/:id", element: <Blog /> },
          { path: "/v4/categories", element: <Categories /> },
          { path: "/v4/review", element: <Review /> },
          { path: "/v4/news", element: <News /> },
          { path: "/v4/membership", element: <Membership /> },
          { path: "/v4/contact", element: <Contact /> },
          { path: "/v4/signin", element: <SignIn /> },
          { path: "/v4/signup", element: <SignUp /> },
        ],
      },
      {path: "/v5",element: <Option5 />},
      {path: "/v6",element: <Option6 />},
      {path: "/home",element: <MainHome />},
      {path: "*", element: <NoMatch />},
    ],
  },
];

export const Router=()=> {
  let element = useRoutes(routes);
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
    <div>
        {element}
    </div>
  );
}

function Menu() {
  return (
    <div>
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
          <div className="nav-main-item" >
            <Link to="/home" className="a-link-nav-s">Home</Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}





function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/v4">Go to the home page</Link>
      </p>
    </div>
  );
}
