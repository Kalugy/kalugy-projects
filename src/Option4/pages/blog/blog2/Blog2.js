import "../shared/blog.css"
import Photo from "../../../../Photo.jpg"
import Web from "../../../assets/client-server-model.png"

export const Blog2 = (id) =>{
    return(
    <section className="blog-post section-header-offset">
        <div className="blog-post-container container">
            <div className="blog-post-data">
                <h3 className="title blog-post-title">Client Servers</h3>
                <div className="article-data">
                    <span>Jul 5th 2022</span>
                    <span className="article-data-spacer"></span>
                    <span>5 Min read</span>
                </div>
                <img src={Web} alt=""/>
            </div>

            <div className="container">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellat consequatur culpa, repudiandae aut dolores iusto. Rem natus soluta, dolores, ad deleniti, aut dolorem corrupti quasi amet unde delectus hic?
                </p>                
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quod necessitatibus, aspernatur pariatur asperiores earum quas adipisci veritatis quidem facilis! Nihil veniam quaerat nulla possimus, asperiores vero voluptatum placeat. Eveniet!
                </p>
                <blockquote className="quote">
                    <p><span><i className="ri-double-quotes-l"></i></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates, laboriosam voluptatum quos non consequuntur nesciunt necessitatibus tempora quod inventore corporis rem nihil itaque, at provident minus aliquam veritatis. Labore?  <span><i className="ri-double-quotes-r"></i></span></p>
                </blockquote>
            
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quod necessitatibus, aspernatur pariatur asperiores earum quas adipisci veritatis quidem facilis! Nihil veniam quaerat nulla possimus, asperiores vero voluptatum placeat. Eveniet!
                </p>

                <div className="author d-grip">
                    <div className="author-image-box">
                        <img src={Photo} alt="" className="article-image"/>
                    </div>
                    <div className="author-about">
                        <h3 className="author-name">KalugyDev</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quis repellat rerum, possimus cumque dolor repellendus eligendi atque explicabo exercitationem id.</p>
                        <ul className="list social-media">
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