import "./Option3.css"
import Photo from '../Photo.jpg';
import Three from '../threepic.PNG';
import Firechat from '../firechat.PNG';
import Portfolio from '../portfolio.PNG';
import { StackButtom } from "../StackButtom/StackButton";

import { useEffect } from "react";
import data from "./Content.json"

function Option3(){
    
    useEffect(()=>{
        let sectBtn= document.querySelectorAll('.control');

        const sections= document.querySelectorAll('.section');
        const sectBtns= document.querySelectorAll('.controlls');
        //Button click active class
        for(let i=0;i<sectBtn.length;i++){
            sectBtn[i].addEventListener('click',function(){
                let currentBtn = document.querySelector('.active-btn')
                //currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
                if(currentBtn !== null){
                    currentBtn.classList.remove("active-btn")
                }
                this.classList += ' active-btn'
            })
        } 
        let allSections= document.querySelectorAll('.controlls')[0];
        allSections.addEventListener('click', (e) => {
            //console.log(e.target)
            const id = e.target.dataset.id;
            if(id){
                //remove selected from the other button
                sectBtns.forEach((btn)=>{
                    btn.classList.remove('active')
                    
                })
                e.target.classList.add('active')
                //hide other sections
                sections.forEach((section)=>{
                    section.classList.remove('active')
                })
                const element = document.getElementById(id)
                element.classList.add('active')
              
            }
        })
    
        //toggle
        document.getElementById('change-color-btn').onclick = function() {
            let menu = document.querySelector(".main-content")
            menu.classList.toggle('light-mode');
        }
    
    })

    return (
        <div className="main-div main-content" id="test">
            
            <StackButtom content={data}/>
            <header className="option3-header section sec1 header active" id="home">
                <div className="header-content">
                    <div className="left-header">
                        <div className="h-shape">
                        </div>
                        <div className="image">
                            <img src={Photo} alt="profile"/>
                        </div>
                    </div>
                    <div className="right-header">
                        <h1 className="name">
                            Hi, I'm <span>Julian Trujillo </span>
                            A Software Developer
                        </h1>
                        <p>
                        I am a Computer Systems Engineering. I like to learn and develop projects. I am working on applications and challenges from software.
                        </p>
                        {/*
                        <div className="btn-con">
                            <a href="" className="main-btn" target="_black">
                                <span className="btn-text">Contact</span>
                                <span className="btn-icon"><i className="fas fa-download"></i></span>
                            </a>
                        </div>*/}
                    </div>
                </div>
            </header>
            <main>
                <section className="option3-section section sec2 about" id="about">
                    <div className="main-title">
                        <h2>About <span>me</span><span className="bg-text">mystats</span></h2>
                        <div className="about-container">
                            <div className="left-about">
                                <h4>Information About me</h4>
                                 <p>
                                 I am a Computer Systems Engineering. I like to learn and develop projects. I am working on applications and challenges from software.
                                 I am interested in Front ends I am improving everyday and keep learning about them as a person i am very creative, resilient, open mind, commitment and self managment.  
                                 </p>
                            </div>
                            <div className="right-about">
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">+ 1</p>
                                        <p className="small-text">Certification <br/> Fundamentals Web Development Linked</p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">+ 2</p>
                                        <p className="small-text">Accreditation Body for Scrum and Agile - Scrum study <br/> </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">+ 3</p>
                                        <p className="small-text">Course EcmaScript <br/>6 +</p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">+ 4</p>
                                        <p className="small-text">Bootcamp <br/>Javascript </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">+ 5</p>
                                        <p className="small-text">Course <br/>Business Communication Skills </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">+ 10</p>
                                        <p className="small-text">Course <br/>Others </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-stats">
                            <h4 className="stat-title">My Skills Front end</h4>
                            <div className="progress-bars">
                                <div className="progress-bar">
                                    <p className="prog-title">html5</p>
                                    <div className="progress-con">
                                        <p className="prog-text">90%</p>
                                        <div className="progress">
                                            <span className="html"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">css</p>
                                    <div className="progress-con">
                                        <p className="prog-text">80%</p>
                                        <div className="progress">
                                            <span className="css"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">js</p>
                                    <div className="progress-con">
                                        <p className="prog-text">90%</p>
                                        <div className="progress">
                                            <span className="js"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">node</p>
                                    <div className="progress-con">
                                        <p className="prog-text">80%</p>
                                        <div className="progress">
                                            <span className="nodee"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">react</p>
                                    <div className="progress-con">
                                        <p className="prog-text">70%</p>
                                        <div className="progress">
                                            <span className="react"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">angularjs</p>
                                    <div className="progress-con">
                                        <p className="prog-text">50%</p>
                                        <div className="progress">
                                            <span className="angular"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">vue</p>
                                    <div className="progress-con">
                                        <p className="prog-text">20%</p>
                                        <div className="progress">
                                            <span className="vue"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-stats">
                            <h4 className="stat-title">My Skills Back end</h4>
                            <div className="progress-bars">
                                <div className="progress-bar">
                                    <p className="prog-title">php</p>
                                    <div className="progress-con">
                                        <p className="prog-text">80%</p>
                                        <div className="progress">
                                            <span className="php"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">c# .net</p>
                                    <div className="progress-con">
                                        <p className="prog-text">60%</p>
                                        <div className="progress">
                                            <span className="net"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">node</p>
                                    <div className="progress-con">
                                        <p className="prog-text">30%</p>
                                        <div className="progress">
                                            <span className="node2"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">python</p>
                                    <div className="progress-con">
                                        <p className="prog-text">20%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">Mysql, Sqlserver, sql</p>
                                    <div className="progress-con">
                                        <p className="prog-text">70%</p>
                                        <div className="progress">
                                            <span className="sql"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">Devops jenkins sonarque aws azure linux ..</p>
                                    <div className="progress-con">
                                        <p className="prog-text">50%</p>
                                        <div className="progress">
                                            <span className="devops"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="stat-title">My Timelines</h4>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="tl-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <p className="tl-duration">2021</p>
                                <h5>Software Developer<span> Big Pass Edenred</span></h5>
                                <p>
                                    Code New features and Maintainance the code
                                </p>
                            </div>
                            <div className="timeline-item">
                                <div className="tl-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <p className="tl-duration">2019-2020</p>
                                <h5>Software Developer<span> Quind</span></h5>
                                <p>
                                    Develop and Maintainance of Code, mentoring people
                                </p>
                            </div>
                            <div className="timeline-item">
                                <div className="tl-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <p className="tl-duration">2019</p>
                                <h5>Software Developer<span> - Freelancer</span></h5>
                                <p>
                                    Developer making a design for a webpage
                                </p>
                            </div>
                            <div className="timeline-item">
                                <div className="tl-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <p className="tl-duration">2019</p>
                                <h5>Software Developer<span> - Freelancer</span></h5>
                                <p>
                                    Making a client requests product
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="option3-section section sec3 portfolio" id="portfolio">
                    <div className="main-title">
                        <h2>My <span>Portfolio</span><span className="bg-text">mystats</span></h2>
                        <p className="port-text">
                            There are projects that i build for my learning diferent frameworks and structures. 
                        </p>
                        <div className="portfolios">
                            <div className="portfolio-item">
                                <div className="image">
                                    <img src={Firechat}></img>
                                </div>
                                <div className="hover-items">
                                    <h3>FireChat</h3>
                                    <div className="icons">
                                        <a href="https://github.com/Kalugy/ClienteServidor/tree/master/firechat" className="icon" target="_blank">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://firechatangular-d98bd.web.app/" className="icon" target="_blank">
                                            <i className="fa-thin fa-display"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="image">
                                    <img src={Three}></img>
                                </div>
                                <div className="hover-items">
                                    <h3>Three js cubik rube</h3>
                                    <div className="icons">
                                        <a href="www.github.com/kalugy" className="icon" target="_blank">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="image">
                                    <img src={Portfolio}></img>
                                </div>
                                <div className="hover-items">
                                    <h3>React portfolio</h3>
                                    <div className="icons">
                                        <a href="https://github.com/Kalugy/kalugy-projects" className="icon" target="_blank">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://github.com/Kalugy/kalugy-projects" className="icon" target="_blank">
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="option3-section section sec4 blogs" id="blogs">
                    <div className="blogs-container">
                        <div className="main-title">
                            <h2>My <span>Blogs</span><span className="bg-text">myBlogs</span></h2>
                            <div className="blogss">
                                <div className="blog">
                                    <img src={Photo} alt=""></img>
                                    <div className="blog-text">
                                        <h4> In process</h4> 
                                        <p>
                                            In process
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="option3-section section sec5 contact" id="contact">
                    <div className="contact-container">
                        <div className="main-title">
                            <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                            <div className="contact-content-con">
                                <div className="left-contact">
                                    <h4>Contact me here</h4>
                                    <p>
                                        Feel free to contact me, there is my social network and my Information.
                                    </p>
                                    <div className="contact-info">
                                        <div className="contact-item">
                                            <div className="iconss">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <span>Location</span>
                                            </div>
                                            <p>: Latin America</p>
                                        </div>
                                        <div className="contact-item">
                                            <div className="iconss">
                                                <i className="fas fa-globe-africa"></i>
                                                <span>Languages</span>
                                            </div>
                                            <p>: English, Spanish, Japanese</p>
                                        </div>
                                    </div>
                                    <div className="contact-icons">
                                        <div className="contact-icon">
                                            <a href="https://github.com/Kalugy" target="_blanck"><i className="fab fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-contact">
                                    <form action="" className="contact-form">
                                        <div className="input-control i-c-2">
                                            <input type="text" required placeholder="Name"/>
                                            <input type="email" required placeholder="Email"/>        
                                        </div>
                                        <div className="input-control">
                                            <input type="text" required placeholder="Subject"/>       
                                        </div>
                                        <div className="input-control">
                                            <textarea name="" id="" cols='15' rows="8" placeholder="Message"></textarea>        
                                        </div>
                                        <div className="submit-btn">
                                            <a href="" className="main-btn">
                                                <span className="btn-text">Send</span>
                                                <span className="btn-icon"><i className="fa-thin fa-share"></i></span>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>   
                    </div>
                </section>
            </main>
            
            <div className="controlls"> 
                <div className="control control-1 active-btn" data-id="home">
                    <i className="fas fa-home"></i>
                </div>
                <div className="control control-2 " data-id="about">
                    <i className="fas fa-user"></i>
                </div>
                <div className="control control-3 " data-id="portfolio">
                    <i className="fas fa-briefcase"></i>
                </div>
                <div className="control control-4 " data-id="blogs">
                    <i className="fas fa-newspaper"></i>
                </div>
                <div className="control control-5 " data-id="contact">
                    <i className="fas fa-envelope-open"></i>
                </div>
            </div>
            <div className="theme-btn" id="change-color-btn">
                <i className="fas fa-adjust"></i>
            </div>
        </div>
    );
}

export default Option3;
