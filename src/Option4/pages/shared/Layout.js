
import { useEffect,useState } from "react";
import { Outlet, Link } from "react-router-dom";
import data from "./Content.json"
import {StackButtom} from "../../../StackButtom/StackButton"

export const Layout=()=>{

    useEffect(()=>{
        //Select elements
        const selectElement = selector => {
            const element = document.querySelector(selector)
            if(element) return element
            throw new Error ('Error on Selecter does not exist' + element)
        }
        const scrollHeader = () => {
            const headerElement = selectElement('#header');
            //console.log("this",window.scrollY)
            if(window.scrollY >= 15){
                headerElement.classList.add('activated')
            }
            else{
                headerElement.classList.remove('activated')    
            }
        }
        //Var style scroll
        window.addEventListener('scroll',scrollHeader)
        //Menu and search pop up
        const menuToggleIcon = selectElement('#menu-toggle-icon')
        const toggleMenu = () => {
            const mobileMenu = selectElement('#menu')
            mobileMenu.classList.toggle('activated')
            menuToggleIcon.classList.toggle('activated')
            
        }
        
        menuToggleIcon.addEventListener('click',toggleMenu)
        const bodyElement = selectElement('.main-content-blog')    
        const themeToggleBtn = selectElement('#theme-toggle-btn')
        const currentTheme = localStorage.getItem('currentTheme')
        if(currentTheme){
            bodyElement.classList.add('light-theme')
        }
        themeToggleBtn.addEventListener('click',()=>{
            bodyElement.classList.toggle('light-theme')
            if(bodyElement.classList.contains('light-theme')){
                localStorage.setItem('currentTheme', 'themeActive')
            }else{
                localStorage.removeItem('currentTheme')
            }
        })

        //open close search
        const formOpenBtn = selectElement("#search-icon")
        const formCloseBtn = selectElement("#form-close-btn")
        const searchFormContainer = selectElement("#search-form-container")

        formOpenBtn.addEventListener('click',()=>searchFormContainer.classList.add('activated'))
        formCloseBtn.addEventListener('click',()=>searchFormContainer.classList.remove('activated'))
        window.addEventListener('keyup',event=>{
            if(event.key === 'Escape') searchFormContainer.classList.remove('activated')
        })
        
        const menuClick = document.querySelectorAll("#list-current")[0]
        const secClick = document.querySelectorAll("#list-current .list-item")
        
        menuClick.addEventListener('click',(e)=>{
            
            const id = e.target.dataset.id 
            if(id){
                secClick.forEach(element => {
                    element.classList.remove('current')
                });

            }
        })

    },[])

    return(
        <div className="main-content-blog">             
            {/*<!--Header-->*/}
            <header className="header" id="header">
                <nav className="navbar container">
                    <Link to="/v4">
                        <h2 className="logo" >KalugyDev</h2>
                    </Link>
                    <div className="menu" id="menu">
                        <ul className="list" id="list-current">
                            <li className="list-item" >
                                <Link to="/v4" className="list-link" data-id="homev4">Home</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/v4/categories" className="list-link" data-id="categoryv4">Categories</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/v4/review" className="list-link" data-id="reviewv4">Review</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/v4/news" className="list-link" >News</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/v4/membership" className="list-link"  >Membership</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/v4/contact" className="list-link" >Contact</Link>
                            </li>
                            <li className="list-item screen-lg-hidden">
                                <Link to="/v4/signin" className="list-link" >Sign in</Link>
                            </li>
                            <li className="list-item screen-lg-hidden">
                                <Link to="/v4/signup" className="list-link" >Sign up</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="list list-right">
                        <button className="btn place-items-center" id="theme-toggle-btn">
                            <i className="ri-sun-line sun-icon"></i>
                            <i className="ri-moon-line moon-icon"></i>
                        </button>
                        <button className="btn place-items-center" id="search-icon">
                            <i className="ri-search-line"></i>
                        </button>
                        <button className="btn place-items-center screen-lg-hidden menu-toggle-icon" id="menu-toggle-icon">
                            <i className="ri-menu-3-line open-menu-icon"></i>
                            <i className="ri-close-line close-menu-icon"></i>
                        </button>
                        <Link to="/v4/signin" className="list-link screen-sm-hidden"> sign in</Link>
                        <Link to="/v4/signup" className="btn sign-up-btn fancy-border screen-sm-hidden">
                            <span>Sign up</span>
                        </Link>
                    </div>
                </nav>
            </header>
            <div className="search-form-container" id="search-form-container">
                <div className="form-container-inner">
                    <form action="" className="form">
                        <input type="text" className="form-input" placeholder="What are you looking form"/>
                        <button className="btn form-btn">
                            <i className="ri-search-line"></i>
                        </button>
                    </form>
                    <span className="form-note">Or press escape</span>
                </div>
                <button className="btn form-close-btn place-items-center" id="form-close-btn">
                    <i className="ri-close-line"></i>
                </button>
            </div>
            {/*<!--Content-->*/}
            <Outlet />
            {/*footer*/}
            <footer className="footer section">
                <div className="footer-container container d-grip">
                    <div className="company-data">
                        <a href="">
                            <h2 className="logo">@KalugyDev</h2>
                        </a>
                        <p className="company-description">
                            Blog example to testing and learn more about layout css 
                        </p>
                        <ul className="list social-media">
                            <li className="list-item">
                                <a href="https://twitter.com/KalugyDev" target="_blank" className="list-link">
                                    <i className="ri-twitter-line"></i>
                                </a>
                            </li>
                        </ul>
                        <span className="copyright-notice">&copy; 2022 Made by @KalugyDev</span>
                    </div>
                    <div>
                        <h6 className="title footer-title">Popular Tags</h6>
                        <ul className="list footer-list">
                            <li className="list-item">
                                <a href="/v4" className="list-link">Arquitecture</a>
                            </li>
                            <li className="list-item">
                                <a href="/v4" className="list-link">Code</a>
                            </li>
                            <li className="list-item">
                                <a href="/v4" className="list-link">Front end</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="title footer-title">Links</h6>
                        <ul className="list footer-list">
                            <li className="list-item">
                                <Link to="/v4" className="list-link">Home</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/v4/signin" className="list-link">Sign In</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/v4/signup" className="list-link">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="title footer-title">Blogs</h6>
                        <ul className="list footer-list">
                            <li className="list-item">
                                <Link to="/v4/blog2" className="list-link">Client Server</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/v4/blog3" className="list-link">Micro Front ends</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/*Button */}
            <StackButtom content={data}/>
        </div>
    );
}
