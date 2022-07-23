import {blogsite} from "../Content/Pages/Blog"
export class Router {
    constructor(paths) {
        this.paths = paths;
    }
    load(page) {
        if(page=='kalugy-projects/v5' ){
            page='home'
        }
        
        
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const container = document.querySelector(".main-div-v5");
        container.innerHTML = template;
        window.history.pushState({}, "", path);
        if(page=='home'){
            stars()
        }
        if(page=='blog'){
            blogsite()
        }
    }
}


function stars(){
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
}
