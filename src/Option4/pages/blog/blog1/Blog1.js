import "./blog.css"
import Photo from "../../../../Photo.jpg"
import Animation2 from "../../../../threepic.PNG"
export const Blog1 = (id) =>{
    return(
    <section className="blog-post section-header-offset">
        <div className="blog-post-container container">
            <div className="blog-post-data">
                <h3 className="title blog-post-title">Three js Rubik Cube</h3>
                <div className="article-data">
                    <span>Oct 6th 2022</span>
                    <span className="article-data-spacer"></span>
                    <span>4 Min read</span>
                </div>
                <img src={Animation2} alt=""/>
            </div>

            <div className="container">
                <p>
                    Three js is library on javascript based on webgl and is for rendering 2d and 3d objects
                    So this library is a lot of math and help to use their components in a faster way to build things in 3d or 2d
                </p>
                <p>
                    In this i was learning and want to try a little project
                    so i decided to make a cube cubik to learn three js
                    This was a kind of challenges a lot of mathematics but at the end a find a result
                    It is interesting how can you render a scene and cameras and object with just a few lines of javascript.
                </p>
                <blockquote className="quote">
                    <p><span><i className="ri-double-quotes-l"></i></span> 3D in a screen of 2d<span><i className="ri-double-quotes-r"></i></span></p>
                </blockquote>
                <p>
                    Finally the result was that i understand more indeed about threejs and it's really interesting how can you make diferents features on it
                </p>

                <div className="author d-grid">
                    <div className="author-image-box">
                        <img src={Photo} alt="" className="article-image"/>
                    </div>
                    <div className="author-about">
                        <h3 className="author-name">John Doe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quis repellat rerum, possimus cumque dolor repellendus eligendi atque explicabo exercitationem id.</p>
                        <ul className="list social-media">
                            <li className="list-item">
                                <a href="#" className="list-link"><i className="ri-instagram-line"></i></a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link"><i className="ri-facebook-circle-line"></i></a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link"><i className="ri-twitter-line"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}