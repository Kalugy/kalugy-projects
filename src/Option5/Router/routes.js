import {svg2} from "./test"
import {Router} from "./router"
import Three from '../../threepic.PNG';
import Firechat from '../../firechat.PNG';
import Portfolio from '../../portfolio.PNG';
const src="http://localhost:3002/kalugy-projects/static/media/Photo.d794d38b17251f7d4bbc.jpg"
const src2="https://kalugy.github.io/kalugy-projects/static/media/Photo.d794d38b17251f7d4bbc.jpg"


const SubPaths = {
    blogone:{
        path: "/kalugy-projects/v5/blog/blogone",
        template: `
            <div>hola</div>
        `
    }
}

let Router2 = new Router(SubPaths);

export const PATHS = {
    home: {
        path: "/kalugy-projects/v5",
        template: `
            <div class="content-v5">
                <img src=${src2} alt="profile"/>
                <svg class="rocket-1" width="55" height="296" viewBox="0 0 55 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 0L54.7798 93.75H0.2202L27.5 0Z" fill="#F0EDED"/>
                    <path d="M0.886431 93.25L27.5 1.78957L54.1136 93.25H0.886431Z" stroke="black" stroke-opacity="0.5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48 97H6V291H48V97ZM27 194C33.0751 194 38 185.493 38 175C38 164.507 33.0751 156 27 156C20.9249 156 16 164.507 16 175C16 185.493 20.9249 194 27 194Z" fill="#ECECEC"/>
                    <path d="M6 97V96H5V97H6ZM48 97H49V96H48V97ZM6 291H5V292H6V291ZM48 291V292H49V291H48ZM6 98H48V96H6V98ZM7 291V97H5V291H7ZM48 290H6V292H48V290ZM47 97V291H49V97H47ZM37 175C37 180.103 35.8005 184.673 33.9127 187.934C32.0101 191.22 29.5304 193 27 193V195C30.5447 195 33.5651 192.526 35.6436 188.936C37.7371 185.32 39 180.391 39 175H37ZM27 157C29.5304 157 32.0101 158.78 33.9127 162.066C35.8005 165.327 37 169.897 37 175H39C39 169.609 37.7371 164.68 35.6436 161.064C33.5651 157.474 30.5447 155 27 155V157ZM17 175C17 169.897 18.1995 165.327 20.0873 162.066C21.9899 158.78 24.4696 157 27 157V155C23.4553 155 20.4349 157.474 18.3564 161.064C16.2629 164.68 15 169.609 15 175H17ZM27 193C24.4696 193 21.9899 191.22 20.0873 187.934C18.1995 184.673 17 180.103 17 175H15C15 180.391 16.2629 185.32 18.3564 188.936C20.4349 192.526 23.4553 195 27 195V193Z" fill="black" fill-opacity="0.5" mask="url(#path-3-inside-1_0_1)"/>
                    <ellipse cx="26" cy="292" rx="21" ry="4" fill="#D9D9D9"/>
                </svg>
                <div class="planet-v5"></div>
                <svg class="rocker-v5-2" width="55" height="296" viewBox="0 0 55 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 0L54.7798 93.75H0.2202L27.5 0Z" fill="#F0EDED"/>
                    <path d="M0.886431 93.25L27.5 1.78957L54.1136 93.25H0.886431Z" stroke="black" stroke-opacity="0.5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48 97H6V291H48V97ZM27 194C33.0751 194 38 185.493 38 175C38 164.507 33.0751 156 27 156C20.9249 156 16 164.507 16 175C16 185.493 20.9249 194 27 194Z" fill="#ECECEC"/>
                    <path d="M6 97V96H5V97H6ZM48 97H49V96H48V97ZM6 291H5V292H6V291ZM48 291V292H49V291H48ZM6 98H48V96H6V98ZM7 291V97H5V291H7ZM48 290H6V292H48V290ZM47 97V291H49V97H47ZM37 175C37 180.103 35.8005 184.673 33.9127 187.934C32.0101 191.22 29.5304 193 27 193V195C30.5447 195 33.5651 192.526 35.6436 188.936C37.7371 185.32 39 180.391 39 175H37ZM27 157C29.5304 157 32.0101 158.78 33.9127 162.066C35.8005 165.327 37 169.897 37 175H39C39 169.609 37.7371 164.68 35.6436 161.064C33.5651 157.474 30.5447 155 27 155V157ZM17 175C17 169.897 18.1995 165.327 20.0873 162.066C21.9899 158.78 24.4696 157 27 157V155C23.4553 155 20.4349 157.474 18.3564 161.064C16.2629 164.68 15 169.609 15 175H17ZM27 193C24.4696 193 21.9899 191.22 20.0873 187.934C18.1995 184.673 17 180.103 17 175H15C15 180.391 16.2629 185.32 18.3564 188.936C20.4349 192.526 23.4553 195 27 195V193Z" fill="black" fill-opacity="0.5" mask="url(#path-3-inside-1_0_1)"/>
                    <ellipse cx="26" cy="292" rx="21" ry="4" fill="#D9D9D9"/>
                </svg>
                <div class="planet-v5-2"></div>

                <svg class="anstronaut" width="239" height="415" viewBox="0 0 239 415" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <ellipse cx="107" cy="68" rx="74" ry="68" fill="#D9D9D9"/>
                    <rect x="62" y="41" width="91" height="75" rx="37.5" fill="url(#pattern0)"/>
                    <path d="M41.5 116H76.5H122H156L191 131.5L202.5 153.5L214 175.5L227 202.5L239 231L227 253H214L202.5 231L191 202.5L156 169V262L168.5 406L144.5 415L112 285.5L98 415H67.5V253V213V153.5L41.5 202.5V253L27.5 262L0 253V213L17.5 153.5L41.5 116Z" fill="#D9D9D9"/>
                    
                </svg>

                <svg class="rocker-v5-3" width="55" height="296" viewBox="0 0 55 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 0L54.7798 93.75H0.2202L27.5 0Z" fill="#F0EDED"/>
                    <path d="M0.886431 93.25L27.5 1.78957L54.1136 93.25H0.886431Z" stroke="black" stroke-opacity="0.5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48 97H6V291H48V97ZM27 194C33.0751 194 38 185.493 38 175C38 164.507 33.0751 156 27 156C20.9249 156 16 164.507 16 175C16 185.493 20.9249 194 27 194Z" fill="#ECECEC"/>
                    <path d="M6 97V96H5V97H6ZM48 97H49V96H48V97ZM6 291H5V292H6V291ZM48 291V292H49V291H48ZM6 98H48V96H6V98ZM7 291V97H5V291H7ZM48 290H6V292H48V290ZM47 97V291H49V97H47ZM37 175C37 180.103 35.8005 184.673 33.9127 187.934C32.0101 191.22 29.5304 193 27 193V195C30.5447 195 33.5651 192.526 35.6436 188.936C37.7371 185.32 39 180.391 39 175H37ZM27 157C29.5304 157 32.0101 158.78 33.9127 162.066C35.8005 165.327 37 169.897 37 175H39C39 169.609 37.7371 164.68 35.6436 161.064C33.5651 157.474 30.5447 155 27 155V157ZM17 175C17 169.897 18.1995 165.327 20.0873 162.066C21.9899 158.78 24.4696 157 27 157V155C23.4553 155 20.4349 157.474 18.3564 161.064C16.2629 164.68 15 169.609 15 175H17ZM27 193C24.4696 193 21.9899 191.22 20.0873 187.934C18.1995 184.673 17 180.103 17 175H15C15 180.391 16.2629 185.32 18.3564 188.936C20.4349 192.526 23.4553 195 27 195V193Z" fill="black" fill-opacity="0.5" mask="url(#path-3-inside-1_0_1)"/>
                    <ellipse cx="26" cy="292" rx="21" ry="4" fill="#D9D9D9"/>
                </svg>
                <div class="planet-v5-3"></div>

                <div class="starv5-grid"></div>
            </div>
        `,
    },
    blog: {
        path: "/kalugy-projects/v5/blog",
        template: `
            <div class="blog-main-content-v5">
                <h1 class="blog-title-v5">Blogs</h1>
                <main class="version5">
                    <section class="secc1">
                        <ul class="menu" id="clickMenuv5">
                            <li class="menu-son">
                                <i  class="fa-solid fa-pencil"></i>
                                <span>Game 1</span>
                            </li>
                            <li class="menu-son">
                                <i  class="fa-solid fa-pencil"></i>
                                <span>Game 2</span>
                            </li>
                        </ul>
                    </section>
                    <section class="secc2" id="submain-content-blog-v5">
                    </section>
                    <section class="secc3" id="helpers-content-blog-v5">
                        
                    </section>
                </main>
            </div>
        `,
    },
    about: {
        path: "/kalugy-projects/v5/about",
        template: `
            <main class="about-main-content-v5">
                <h1 class="title-about">About Me</h1>
                <div class="about-content-v5">
                    <div>
                        <h1>👋 Hi, i'm <span>Julian</span> </h1>
                        <h4>Developing ideas from mind </h4> 
                        <p>
                            I am a Computer Systems Engineering. I like to learn and develop projects. I am working on applications and challenges from software.
                        </p>
                        <p>
                            I am interested in Front ends and back ends, I am improving everyday and keep learning about them as a person i am very creative, resilient, open mind, commitment and self managment.  
                        </p>                    
                    </div>
                    ${svg2}
                </div>
            </main>
        `,
    },
    project: {
        path: "/kalugy-projects/v5/project",
        template: 
        `
            <main class="main-content-project-v5">
                <h1>Projects</h1>
                <div class="cards-projects-v5">
                    <div class="card-v5">
                        <div class="header-title">
                            <h4>Project1</h4>
                            <i class="fa-solid fa-cube"></i>
                        </div>
                        <img src=${Three} alt="projects"/>
                        <p>This is a project 3d with vanilla js using 3d library</p>
                    </div>
                    <div class="card-v5">
                        <div class="header-title">
                            <h4>Project2</h4>
                            <i class="fa-brands fa-angular"></i>
                        </div>
                        <img src=${Portfolio} alt="projects"/>
                        <p>Porfolio Example</p>
                    </div>
                    <div class="card-v5">
                        <div class="header-title">
                            <h4>Project3</h4>
                            <i class="fa-brands fa-angular"></i>
                        </div>
                        <img src=${Firechat} alt="projects"/>
                        <p>Angular Chat</p>
                    </div>
                </div>
            </main>
        `,
    }
    
}


/*grid flexing projects 


                <div class="cards-projects2-v5">    
                    <div class="card-v5">
                        <div class="header-title">
                            <h4>Project4</h4>
                            <i class="fa-brands fa-angular"></i>
                        </div>
                        <img src=${Three} alt="projects"/>
                        <p>Unreal Engine</p>
                    </div>
                    <div class="card-v5">
                        <div class="header-title">
                            <h4>Project5</h4>
                            <i class="fa-brands fa-angular"></i>
                        </div>
                        <img src=${Three} alt="projects"/>
                        <p>Unity Game</p>
                    </div>
                </div>
                
*/


/*
const width=100;
const height=100;
const array=range(300)

const Option5=() => array.map(()=>(
    <Face
        width={width}
        height={height}
        centerX={height/2}
        centerY={height/2}
        strokeWidth = {10 * Math.random()*2}
        eyeOffsetX = {15 * Math.random()*2}
        eyeOffsetY = {5 * Math.random()*2}
        eyeRadius = {7 * Math.random()*2}
        mouthWidth={2 * Math.random()*2}
        mouthRadius={4 * Math.random()*2}           
    />
));
*/



