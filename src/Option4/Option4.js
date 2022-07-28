import { local } from "d3";
import { useEffect,useState } from "react";
import "./Option4.css"
import {Blog} from './Blog' 
import FaceTurn from '../faceTurn.PNG'
import FireChar from '../firechat.PNG'
import Portfolio from '../portfolio.PNG'
import Threepic from '../threepic.PNG'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home =()=>{
    useEffect(()=>{
        // Swiper
        const swiper = new Swiper(".swiper", {
            // How many slides to show
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            // How much space between slides
            spaceBetween: 20,
            // Make the next and previous buttons work
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Make the pagination indicators work
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            //Responsive breakpoints for how many slides to show at that view
            breakpoints: {
                // 700px and up shoes 2 slides
                700: {
                    slidesPerView: 2,
                
                },
                // 1200px and up shoes 3 slides
                1200: {
                    slidesPerView: 3
                }
            }   

        });
        swiper.on('slideChange', function() {
            swiper.pagination.render();
            swiper.pagination.update();
        })
    },[])
    return(
    <>
        {/*<!--FeatureArticles-->*/}
        <section className="featured-articles section-header-offset">
        <div className="featured-articles-container container d-grip">
            <div className="featured-content d-grip">
                <div className="headline-banner">
                    <h3 className="headline fancy-border">
                        <span className="place-items-center">Blog News</span>
                    </h3>
                    <span className="headline-description">Welcome to the main section... </span>
                </div>
                <a href="./post.html" className="article featured-article featured-article-1">
                    <img src={FaceTurn} alt="" className="article-image"/>
                    <span className="article-category">Animation</span>
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Jan 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>5 Min read</span>
                        </div>
                        <h3 className="title article-title">Open Tool Animation</h3>
                    </div>
                </a>
                <a href="./post.html" className="article featured-article featured-article-2">
                    <img src={FireChar} alt="" className="article-image"/>
                    <span className="article-category">Technology</span>
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Jan 5th 2020</span>
                            <span className="article-data-spacer"></span>
                            <span>4 Min read</span>
                        </div>
                        <h3 className="title article-title">Firechat Angular Chat</h3>
                    </div>
                </a>
                <a href="./post.html" className="article featured-article featured-article-3">
                    <img src={Threepic} alt="" className="article-image"/>
                    <span className="article-category">Technology</span>
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Oct 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>
                        <h3 className="title article-title">ThreeJs cube rubik</h3>
                    </div>
                </a>
            </div>
            <div className="sidebar dgrid">
                <h3 className="title-featured-content-title">Trending News</h3>
                <a href="" className="trending-news-box">
                    <div className="trending-news-image-box">
                        <span className="trending-number place-items-center">1</span>
                        <img src={Threepic} alt="photo" className="article-image"/>
                    </div>
                    <div className="trending-news-data">
                        <div className="article-data">
                            <span>Jan 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>5 Min read</span>
                        </div>
                        <h3 className="title article-title">Article</h3>
                    </div>
                </a>
                <a href="" className="trending-news-box">
                    <div className="trending-news-image-box">
                        <span className="trending-number place-items-center">2</span>
                        <img src={FireChar} alt="photo" className="article-image"/>
                    </div>
                    <div className="trending-news-data">
                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>
                        <h3 className="title article-title">Angular article</h3>
                    </div>
                </a>
                <a href="" className="trending-news-box">
                    <div className="trending-news-image-box">
                        <span className="trending-number place-items-center">3</span>
                        <img src={FaceTurn} alt="photo" className="article-image"/>
                    </div>
                    <div className="trending-news-data">
                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>2 Min read</span>
                        </div>
                        <h3 className="title article-title">Animation</h3>
                    </div>
                </a>
            </div>
        </div>
        </section>
        {/*Quick Read */}
        <section className="quick-read section">
            <div className="container">
                <h2 className="title section-title" data-name="Quick read">
                    Quick Read
                </h2>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <a href="" className="article swiper-slide">
                            <img src={FireChar} alt="" className="article-image"></img>
                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Jan 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Firechat</h3>
                            </div>
                        </a>
                        <a href="" className="article swiper-slide">
                            <img src={Threepic} alt="" className="article-image"></img>
                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Jan 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>1 Min read</span>
                                </div>
                                <h3 className="title article-title">Threejs</h3>
                            </div>
                        </a>
                        <a href="" className="article swiper-slide">
                            <img src={Threepic} alt="" className="article-image"></img>
                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Jan 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Threejs2</h3>
                            </div>
                        </a>
                        <a href="" className="article swiper-slide">
                            <img src={Portfolio} alt="" className="article-image"></img>
                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Jan 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Portfolio</h3>
                            </div>
                        </a>
                        <a href="" className="article swiper-slide">
                            <img src={Portfolio} alt="" className="article-image"></img>
                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Jan 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Portfolio v2</h3>
                            </div>
                        </a>
                    </div>
                    <div className="swiper-button-prev swiper-controls"></div>
                    <div className="swiper-button-next swiper-controls"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
        {/*older post*/}
        <section className="older-posts section">
            <div className="container">
                <h2 className="title section-title" data-name="Older posts">
                    Older post
                </h2>

                <div className="older-posts-grid-wrapper d-grip">
                    <a href="" className="article d-grip">
                        <div className="older-posts-article-image-wrapper">
                            <img src={FireChar} alt="" className="article-image" />
                        </div>
                        <div className="article-data-container">
                            <div className="article-data">
                                <span>Jan 5th 2021</span>
                                <span className="article-data-spacer"></span>
                                <span>8 Min read</span>
                            </div>
                            <h3 className="title article-title">Angular chat</h3>
                            <p className="article-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex.</p>
                        </div>
                    </a>
                    <a href="" className="article d-grip">
                        <div className="older-posts-article-image-wrapper">
                            <img src={FaceTurn} alt="" className="article-image" />
                        </div>
                        <div className="article-data-container">
                            <div className="article-data">
                                <span>Jan 5th 2021</span>
                                <span className="article-data-spacer"></span>
                                <span>8 Min read</span>
                            </div>
                            <h3 className="title article-title">Face turn</h3>
                            <p className="article-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex.</p>
                        </div>
                    </a>
                    <a href="" className="article d-grip">
                        <div className="older-posts-article-image-wrapper">
                            <img src={Portfolio} alt="" className="article-image" />
                        </div>
                        <div className="article-data-container">
                            <div className="article-data">
                                <span>Jan 5th 2021</span>
                                <span className="article-data-spacer"></span>
                                <span>8 Min read</span>
                            </div>
                            <h3 className="title article-title">Portfolio</h3>
                            <p className="article-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex.</p>
                        </div>
                    </a>
                    <a href="" className="article d-grip">
                        <div className="older-posts-article-image-wrapper">
                            <img src={Threepic} alt="" className="article-image" />
                        </div>
                        <div className="article-data-container">
                            <div className="article-data">
                                <span>Jan 5th 2021</span>
                                <span className="article-data-spacer"></span>
                                <span>8 Min read</span>
                            </div>
                            <h3 className="title article-title">Three</h3>
                            <p className="article-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex.</p>
                        </div>
                    </a>
                </div>
                <div className="see-more-container">
                    <a href="" className="btn see-more-btn place-items-center">
                        see more <i className="ri-arrow-right-s-line"></i>
                    </a>
                </div>
            </div>
        </section>
        {/*Popular tags*/}
        <section className="popular-tags section">
            <div className="container">
                <h2 className="title section-title" data-name="Popular tags">
                    Tecnologies Tags
                </h2>
                <div className="popular-tags-container d-grip">
                    <a href="" className="article">
                        <span className="tag-name">#Angular</span>
                        <img src={FireChar} alt="" className="article-image" />
                    </a>
                    <a href="" className="article">
                        <span className="tag-name">#Threejs</span>
                        <img src={Threepic} alt="" className="article-image" />
                    </a>
                    <a href="" className="article">
                        <span className="tag-name">#VanillaJs</span>
                        <img src={Portfolio} alt="" className="article-image" />
                    </a>
                    <a href="" className="article">
                        <span className="tag-name">#Animation</span>
                        <img src={FaceTurn} alt="" className="article-image" />
                    </a>
                </div>
            </div>
        </section>
        {/*newsletter*/ }
        <section className="newsletter newsletter-section">
            <div className="container">
                <h2 className="title section-title" data-name="Newsletter">
                    Newsletter
                </h2>
                <div className="form-container-inner">
                    <h6 className="title newsletter-title">Subscribe to Blogs</h6>
                    <p className="newsletter-description">
                        Blogs example, this is an example, want to know more? 
                    </p>
                    <form action="" className="form">
                        <input type="text" className="form-input" placeholder="Enter your email address"/>
                        <button className="btn form-btn">
                            <i className="ri-mail-send-line"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </>
)}


function RenderContent(props){
    const isLoggedIn = props.isLoggedIn;
    
    switch(isLoggedIn){
        case "home": return <Home />;
        case "blog": return <Blog />;
    }
    return <></>;
}

function Option4js(){

    const [navbarClick,setNavbarClick] = useState('home')

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


        

    },[])
    return(
        <div className="main-content-blog">             
            {/*<!--Header-->*/}
            <header className="header" id="header">
                <nav className="navbar container">
                    <a href="#" onClick={()=>setNavbarClick('home')}>
                        <h2 className="logo" >KalugyDev</h2>
                    </a>
                    <div className="menu" id="menu">
                        <ul className="list">
                            <li className="list-item">
                                <a href="#" className="list-link current" onClick={()=>setNavbarClick('home')}>Home</a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link" onClick={()=>setNavbarClick('blog')}>Categories</a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link">Review</a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link">News</a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link">Membership</a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link">Contact</a>
                            </li>
                            <li className="list-item screen-lg-hidden">
                                <a href="#" className="list-link">Sign in</a>
                            </li>
                            <li className="list-item screen-lg-hidden">
                                <a href="#" className="list-link">Sign up</a>
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
                        <a href="" className="list-link screen-sm-hidden"> sign in</a>
                        <a href="#" className="btn sign-up-btn fancy-border screen-sm-hidden">
                            <span>Sign up</span>
                        </a>
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
            <RenderContent isLoggedIn={navbarClick} />
            {/*footer*/}
            <footer className="footer section">
                <div className="footer-container container d-grip">
                    <div className="company-data">
                        <a href="">
                            <h2 className="logo">KalugyDev</h2>
                        </a>
                        <p className="company-description">
                            Blog example to testing and learn more about layout css 
                        </p>
                        <ul className="list social-media">
                            <li className="list-item">
                                <a href="" className="list-link">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="" className="list-link">
                                    <i className="ri-facebook-circle-line"></i>
                                </a>
                                <a href="" className="list-link">
                                    <i className="ri-twitter-line"></i>
                                </a>
                                <a href="" className="list-link">
                                    <i className="ri-pinterest-line"></i>
                                </a>
                            </li>
                        </ul>
                        <span className="copyright-notice">&copy; 2022 Blog. Made by Kalugy</span>
                    </div>
                    <div>
                        <h6 className="title footer-title">Categories</h6>
                        <ul className="list footer-list">
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="title footer-title">Links</h6>
                        <ul className="list footer-list">
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="title footer-title">Company</h6>
                        <ul className="list footer-list">
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="list-link">Sample Item</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Option4js;