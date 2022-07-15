import "./Content.css"
import {Data} from "../MousePointer/Data"
import Photo from '../../Photo.jpg';
import { useEffect } from "react";
    



export const Content=()=>{

    useEffect(()=>{

        console.log("caallll")
        
        const create = document.querySelector('.starv5-grid')
        const generetaStart = 50
        for(let i =0 ; i<generetaStart;i++){

            const star = document.createElement('div')
            star.classList.add('star-v5')
            const parentHeight = document.querySelector('.content-v5').offsetHeight 
            const parentWidth = document.querySelector('.content-v5').offsetWidth 
            
            const random = Math.floor(Math.random() * parentHeight) 
            const randomH = Math.floor(Math.random()* parentWidth)
            const randomW = Math.floor(Math.random()*4) 
            
            console.log("heigh",parentHeight-generetaStart)
            
            star.style.top = random +'px'
            star.style.left = randomH +"px"
            star.style.width = randomW +'px'
            star.style.height = randomW +'px'
            
            create.appendChild(star)
        }
        
        console.log("caallll")
    })
    return(
   <>
    <main className="main-div-v5">
            <div className="content-v5">
                <div className="main-content-header-v5">
                    <img src={Photo} alt="profile"/>    
                    <p>
                    I am a Computer Systems Engineering. I like to learn and develop projects. I am working on applications and challenges from software.
                    </p> 
                </div>  
                <div className="starv5-grid">
                </div>
            </div>      
    </main>
    {/*
    <main className="version5">
            <section className="secc1">
                <ul className="menu">
                    <li className="menu-son">
                        <a href="">
                            <i className="fa-solid fa-pencil"></i>
                            <span>Code 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-solid fa-pencil"></i>
                            <span>Code 2</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-solid fa-pencil"></i>
                            <span>Code 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-solid fa-pencil"></i>
                            <span>Code 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-solid fa-pencil"></i>
                            <span>Code 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-solid fa-pencil"></i>
                            <span>Code 3</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="secc2">
                <Data/>
                <h3>Hello This is some examples</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <div>For example CLick me</div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <div>For example CLick me</div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis beatae similique nam provident labore minus doloremque in assumenda nostrum eveniet, facere quia dolorem, qui laborum, adipisci reiciendis fugit. Ipsum.</p>
                
            </section>
            <section className="secc3">
                <ul>
                    <li><i className="fa-solid fa-pencil"/>Show1</li>
                    <li><i className="fa-solid fa-pencil"/>Show2</li>
                </ul>
            </section>
        </main> 
*/}
    </>)
};