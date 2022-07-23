import {svg2} from "./test"
import {Router} from "./router"

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
    project: {
        path: "/kalugy-projects/v5/project",
        template: 
        `
            <main class="main-content-project-v5">
                <h1>Projects</h1>
                <h3>Flex auto sizing</h3>
                <div class="cards-projects-v5">
                    <div class="card-v5">
                        <h4>Project1</h4>

                        <p>dsadasdasdsadddddddddddddddddddddsada</p>
                    </div>
                    <div class="card-v5">
                        <h4>Project1</h4>
                        
                        <p>dsadasdaddddddddddddddddsdsadsada</p>
                    </div>
                    <div class="card-v5">
                        <h4>Project1</h4>
                        
                        <p>dsadasdddddddddddasdsadsada</p>
                    </div>
                    <div class="card-v5">
                        <h4>Project1</h4>
                        
                        <p>dsadasdddddddddddasdsadsada</p>
                    </div>
                    <div class="card-v5">
                        <h4>Project1</h4>
                        
                        <p>dsadasdddddddddddasdsadsada</p>
                    </div>
                </div>
                <h3>Grid auto sizing</h3>
                <div class="cards-projects2-v5">
                    
                    <div class="card-v5">
                        <h4>Project1</h4>

                        <p>dsadasdasdsadddddddddddddddddddddsada</p>
                    </div>
                    <div class="card-v5">
                        <h4>Project1</h4>
                        
                        <p>dsadasdaddddddddddddddddsdsadsada</p>
                    </div>
                    <div class="card-v5">
                        <h4>Project1</h4>
                        
                        <p>dsadasdddddddddddasdsadsada</p>
                    </div>
                    <div class="card-v5">
                        <h4>Project1</h4>
                        
                        <p>dsadasdddddddddddasdsadsada</p>
                    </div>
                    <div class="card-v5">
                        <h4>Project1</h4>
                        
                        <p>dsadasdddddddddddasdsadsada</p>
                    </div>
                </div>
                
            </main>
        `,
    },
    blogone:{
        path: "/kalugy-projects/v5/blog#test",
        template: `
            <div>hola</div>
        `
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



