import {svg2} from "./test"

const src="http://localhost:3002/kalugy-projects/static/media/Photo.d794d38b17251f7d4bbc.jpg"
const src2="https://kalugy.github.io/kalugy-projects/static/media/Photo.d794d38b17251f7d4bbc.jpg"

export const PATHS = {
    home: {
        path: "/kalugy-projects/v5",
        template: `
        
            <div class="content-v5">
                <div class="main-content-header-v5">
                    <img src=${src2} alt="profile"/>    
                    <p>
                    I am a Computer Systems Engineering. I like to learn and develop projects. I am working on applications and challenges from software.
                    </p> 
                </div>  
                <div class="starv5-grid">
                </div>
            </div>
        `,
    },
    projects: {
        path: "/kalugy-projects/v5/projects",
        template: `
            <h1>About me</h1>
            <main class="version5">
            <section class="secc1">
                <ul class="menu">
                    <li class="menu-son">
                        <a href="">
                            <i class="fa-solid fa-pencil"></i>
                            <span>Code 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-pencil"></i>
                            <span>Code 2</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-pencil"></i>
                            <span>Code 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-pencil"></i>
                            <span>Code 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-pencil"></i>
                            <span>Code 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-pencil"></i>
                            <span>Code 3</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="secc2">
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
            <section class="secc3">
                <ul>
                    <li><i class="fa-solid fa-pencil"/>Show1</li>
                    <li><i class="fa-solid fa-pencil"/>Show2</li>
                </ul>
            </section>
        </main>
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
                            I am interested in Front ends I am improving everyday and keep learning about them as a person i am very creative, resilient, open mind, commitment and self managment.  
                        </p>
                        <p>
                            I am a Computer Systems Engineering. I like to learn and develop projects. I am working on applications and challenges from software.
                            I am interested in Front ends I am improving everyday and keep learning about them as a person i am very creative, resilient, open mind, commitment and self managment.  
                        </p>
                    </div>
                    ${svg2}
                </div>
            </main>
        `,
    },
    contact: {
        path: "/kalugy-projects/v5/contact",
        template: 
        `
            <h1>Contact</h1>
            <p></p>
        `,
    }
}


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



