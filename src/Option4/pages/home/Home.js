import { local } from "d3";
import { useEffect,useState } from "react";
import "./Option4.css"
import FaceTurn from '../../../faceTurn.PNG'
import FireChar from '../../../firechat.PNG'
import Portfolio from '../../../portfolio.PNG'
import Threepic from '../../../threepic.PNG'
import HistoryWeb from '../../assets/history-of-web.jpg'
import ClientServer from '../../assets/client-server-model.png'
import MicroFrontEnd from '../../assets/micro-frontends.jpg'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

export const Home =()=>{
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
                    slidesPerView: 1,
                
                },
                // 1200px and up shoes 3 slides
                1200: {
                    slidesPerView: 1
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
                        <span className="place-items-center">Blog Devs</span>
                    </h3>
                    <span className="headline-description">Welcome to Blogs!</span>
                </div>
                <Link to="blog1" className="article featured-article featured-article-1">
                    <img src={HistoryWeb} alt="" className="article-image"/>
                    <span className="article-category">History</span>
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Jul 5th 2022</span>
                            <span className="article-data-spacer"></span>
                            <span>15 Min read</span>
                        </div>
                        <h3 className="title article-title">Web History</h3>
                    </div>
                </Link>
                <Link to="blog2" className="article featured-article featured-article-2">
                    <img src={ClientServer} alt="" className="article-image"/>
                    <span className="article-category">Arquitecture</span>
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Jan 5th 2020</span>
                            <span className="article-data-spacer"></span>
                            <span>4 Min read</span>
                        </div>
                        <h3 className="title article-title">Client servers </h3>
                    </div>
                </Link>
                <Link to="blog3" className="article featured-article featured-article-3">
                    <img src={MicroFrontEnd} alt="" className="article-image"/>
                    <span className="article-category">Technology</span>
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Oct 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>
                        <h3 className="title article-title">Micro frontends</h3>
                    </div>
                </Link>
            </div>
            <div className="sidebar d-grid">
                <h3 className="title-featured-content-title">Trending News</h3>
                <Link to="/v4/blog1" className="trending-news-box">
                    <div className="trending-news-image-box">
                        <span className="trending-number place-items-center">1</span>
                        <img src={HistoryWeb} alt="photo" className="article-image"/>
                    </div>
                    <div className="trending-news-data">
                        <div className="article-data">
                            <span>Jul 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>5 Min read</span>
                        </div>
                        <h3 className="title article-title">Web History</h3>
                    </div>
                </Link>
                <Link to="/v4/blog2" className="trending-news-box">
                    <div className="trending-news-image-box">
                        <span className="trending-number place-items-center">2</span>
                        <img src={ClientServer} alt="photo" className="article-image"/>
                    </div>
                    <div className="trending-news-data">
                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>5 Min read</span>
                        </div>
                        <h3 className="title article-title">Client Servers</h3>
                    </div>
                </Link>
                <Link to="/v4/blog3" className="trending-news-box">
                    <div className="trending-news-image-box">
                        <span className="trending-number place-items-center">3</span>
                        <img src={MicroFrontEnd} alt="photo" className="article-image"/>
                    </div>
                    <div className="trending-news-data">
                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>5 Min read</span>
                        </div>
                        <h3 className="title article-title">Microfrontends</h3>
                    </div>
                </Link>
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
                        <Link to="blog1" className="article swiper-slide">
                            <img src={HistoryWeb} alt="" className="article-image"></img>
                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Jan 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Web History</h3>
                            </div>
                        </Link>
                        <Link to="blog2" className="article swiper-slide">
                            <img src={ClientServer} alt="" className="article-image"></img>
                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Jan 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>1 Min read</span>
                                </div>
                                <h3 className="title article-title">Client Server</h3>
                            </div>
                        </Link>
                        <Link to="blog3" className="article swiper-slide">
                            <img src={MicroFrontEnd} alt="" className="article-image"></img>
                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Jan 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 Min read</span>
                                </div>
                                <h3 className="title article-title">Microfront ends</h3>
                            </div>
                        </Link>
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
                    <Link to="blog1" className="article d-grip">
                        <div className="older-posts-article-image-wrapper">
                            <img src={HistoryWeb} alt="" className="article-image" />
                        </div>
                        <div className="article-data-container">
                            <div className="article-data">
                                <span>Jan 5th 2021</span>
                                <span className="article-data-spacer"></span>
                                <span>8 Min read</span>
                            </div>
                            <h3 className="title article-title">Web History</h3>
                            <p className="article-description">A brief summary of web history, who created</p>
                        </div>
                    </Link>
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
                    Popular Tags
                </h2>
                <div className="popular-tags-container d-grip">
                    <a href="" className="article">
                        <span className="tag-name">#Arquitecture</span>
                        <img src={FireChar} alt="" className="article-image" />
                    </a>
                    <a href="" className="article">
                        <span className="tag-name">#Tecnology</span>
                        <img src={FireChar} alt="" className="article-image" />
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

