import "../shared/blog.css"
import Photo from "../../../../Photo.jpg"
import Web from "../../../assets/history-of-web.jpg"
export const Blog1 = (id) =>{
    return(
    <section className="blog-post section-header-offset">
        <div className="blog-post-container container">
            <div className="blog-post-data">
                <h3 className="title blog-post-title">Web History</h3>
                <div className="article-data">
                    <span>Oct 6th 2022</span>
                    <span className="article-data-spacer"></span>
                    <span>5 Min read</span>
                </div>
                <img src={Web} alt=""/>
            </div>

            <div className="container">
                <p>
                Tim Berners-Lee, a British scientist, invented the World Wide Web (WWW) in 1989, while working at CERN. 
                </p>
                <p>
                By the end of 1990, Tim Berners-Lee had the first Web server and browser up and running at CERN. He developed the code for his Web server on a NeXT computer. To prevent it being accidentally switched off, the computer had a hand-written label in red ink: "This machine is a server. DO NOT POWER IT DOWN!!"
                
                </p>
                <blockquote className="quote">
                    <p><span><i className="ri-double-quotes-l"></i></span>
                    Those who cannot remember the past are condemned to repeat it. 
                    <span><i className="ri-double-quotes-r"></i></span></p>
                     – George Santayana, The Life of Reason, 1905
                </blockquote>
                <p>
                Thanks to the efforts of Paul Kunz and Louise Addis, the first Web server in the US came online in December 1991, once again in a particle physics laboratory: the Stanford Linear Accelerator Center (SLAC) in California. At this stage, there were essentially only two kinds of browser. One was the original development version, which was sophisticated but available only on NeXT machines.
                </p>
                <p>
                Not to mention websites exist because computer exists but was thanks to laboratory and scientist who create an idea, an idea who today communicated everybody in the world and where is all the information and who will impulse the human race in another steps. Now connectevity is all around us. 
                </p>
                <div className="author d-grip">
                    <div className="author-image-box">
                        <img src={Photo} alt="" className="article-image"/>
                    </div>
                    <div className="author-about">
                        <h3 className="author-name">KalugyDev</h3>
                        <p>A brief introduction to webpages. Its interesting to know who invented and why, and how it impact all civilitation</p>
                        <ul className="list social-media">
                            <li className="list-item">
                                <a href="https://twitter.com/KalugyDev" target="_blank" className="list-link"><i className="ri-twitter-line"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}