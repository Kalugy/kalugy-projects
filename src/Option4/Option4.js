import { local } from "d3";
import { useEffect } from "react";
import "./Option4.css"

import Photo from '../Photo.jpg';
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


function Option4js(){

    useEffect(()=>{
        //Select elements
        
        const selectElement = selector => {
            const element = document.querySelector(selector)
            if(element) return element
            throw new Error ('Error on Selecter does not exist' + element)
        }
        const scrollHeader = () => {
            const headerElement = selectElement('#header');
            console.log("this",window.scrollY)
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
        });

    },[])
    return(
        <div className="main-content-blog">             
            {/*<!--Header-->*/}
            <header className="header" id="header">
                <nav className="navbar container">
                    <a href="./">
                        <h2 className="logo">KalugyDev</h2>
                    </a>
                    <div className="menu" id="menu">
                        <ul className="list">
                            <li className="list-item">
                                <a href="#" className="list-link current">Home</a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link">Categories</a>
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
            {/*<!--FeatureArticles-->*/}
            <section className="featured-articles section-header-offset">
                <div className="feature-articles-container container d-grip">
                    <div className="featured-content d-grip">
                        <div className="headline-banner">
                            <h3 className="headline fancy-border">
                                <span className="place-items-center">Breaking News</span>
                            </h3>
                            <span className="headline-description">Apple Announces a new parnerShip... </span>
                        </div>
                        <a href="./post.html" className="article featured-article featured-article-1">
                            <img src={Photo} alt="" className="article-image"/>
                            <span className="article-category">Technology</span>

                            <div className="article-data-container">

                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>

                            </div>
                        </a>
                        <a href="./post.html" className="article featured-article featured-article-1">
                            <img src={Photo} alt="" className="article-image"/>
                            <span className="article-category">Technology</span>

                            <div className="article-data-container">

                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>

                            </div>
                        </a>
                        <a href="./post.html" className="article featured-article featured-article-1">
                            <img src={Photo} alt="" className="article-image"/>
                            <span className="article-category">Technology</span>

                            <div className="article-data-container">

                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>

                            </div>
                        </a>
                    </div>
                    <div className="sidebar dgrid">
                        <h3 className="title-featured-content-title">Trending News</h3>
                        <a href="" className="trending-news-box">
                            <div className="trending-news-image-box">
                                <span className="trending-number place-items-center">01</span>
                                <img src={Photo} alt="photo" className="article-image"/>
                            </div>
                            <div className="trending-news-data">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Sample article</h3>
                            </div>
                        </a>
                        <a href="" className="trending-news-box">
                            <div className="trending-news-image-box">
                                <span className="trending-number place-items-center">01</span>
                                <img src={Photo} alt="photo" className="article-image"/>
                            </div>
                            <div className="trending-news-data">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Sample article</h3>
                            </div>
                        </a>
                        <a href="" className="trending-news-box">
                            <div className="trending-news-image-box">
                                <span className="trending-number place-items-center">01</span>
                                <img src={Photo} alt="photo" className="article-image"/>
                            </div>
                            <div className="trending-news-data">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Sample article</h3>
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
                                <img src={Photo} alt="" className="article-image"></img>
                                <div className="article-data-container">
                                    <div className="article-data">
                                        <span>111</span>
                                        <span className="article-data-spacer"></span>
                                        <span>8 Min read</span>
                                    </div>
                                    <h3 className="title article-title">Is VR the future?</h3>
                                </div>
                            </a>
                            <a href="" className="article swiper-slide">
                                <img src={Photo} alt="" className="article-image"></img>
                                <div className="article-data-container">
                                    <div className="article-data">
                                        <span>222</span>
                                        <span className="article-data-spacer"></span>
                                        <span>8 Min read</span>
                                    </div>
                                    <h3 className="title article-title">Is VR the future?</h3>
                                </div>
                            </a>
                            <a href="" className="article swiper-slide">
                                <img src={Photo} alt="" className="article-image"></img>
                                <div className="article-data-container">
                                    <div className="article-data">
                                        <span>333</span>
                                        <span className="article-data-spacer"></span>
                                        <span>8 Min read</span>
                                    </div>
                                    <h3 className="title article-title">Is VR the future?</h3>
                                </div>
                            </a>
                            <a href="" className="article swiper-slide">
                                <img src={Photo} alt="" className="article-image"></img>
                                <div className="article-data-container">
                                    <div className="article-data">
                                        <span>44</span>
                                        <span className="article-data-spacer"></span>
                                        <span>8 Min read</span>
                                    </div>
                                    <h3 className="title article-title">Is VR the future?</h3>
                                </div>
                            </a>
                            <a href="" className="article swiper-slide">
                                <img src={Photo} alt="" className="article-image"></img>
                                <div className="article-data-container">
                                    <div className="article-data">
                                        <span>555</span>
                                        <span className="article-data-spacer"></span>
                                        <span>8 Min read</span>
                                    </div>
                                    <h3 className="title article-title">Is VR the future?</h3>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-button-prev swiper-controls"></div>
                        <div className="swiper-button-next swiper-controls"></div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Option4js;