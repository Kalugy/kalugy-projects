import {main} from "./RockPaperSissors"
import {mainBreakOut} from "./BreakOut"

const BlogOne = `
    <div class="blog1-content-v5">
        <h4 id="rock-paper-scissor-hl">Rock Paper Scissors</h4>
        <p>it's a really famous game
        A simultaneous, zero-sum game, 
        it has three possible outcomes: a draw, a win or a loss. 
        Rules:
        Rock win agains scissor
        Scissor win agains paper
        Paper win agains rock
        </p>
        <h5>Are you Ready to Play?</h5>
        <section>
            <div class="choices-rps" id="choices"></div>
            <h2 id="result2"></h2>
        </section>
    </div>
`

const subSection = `
    <h1>On this page</h1>
    <ul>
        <li id="myscroll"><i class="fa-solid fa-pencil"></i>Rock Paper Scissor</li></a>
    </ul>
`
const BlogTwo = `
    <div class="blog1-content-v5">
        <h4 id="rock-paper-scissor-hl">BreakOut</h4>
        <p>Breakout was a worldwide commercial success, among the top five highest-grossing arcade video games of 1976 in both the United States and Japan and then among the top three highest-grossing arcade video games of 1977 in the US and Japan. The 1978 Atari VCS port uses color graphics instead of a monochrome screen with colored overlay.</p>
        <p>Moving with Arrow Keys</p>
        <div class="restarting">restart</div>    
        <div class="scoreBreakOut" id="score"></div>
        <div class="game-breakout">
            <div class="grid">
            </div>
        </div>
    </div>
`
const subSection2 = `
    <h1>On this page</h1>
    <ul>
        <li id="myscroll"><i class="fa-solid fa-pencil"></i>Breakout</li></a>
    </ul>
`

function subLinksManager(code){
    console.log("Dsadas",code)
    switch(code){
        case "Game 1": fillData1(code);break;
        case "Game 2": fillData2(code);break;
    }
    //scrolling()
}

function fillData1(code){
    console.log("Here")
    const secc2 = document.getElementById('submain-content-blog-v5')
    const template = `<h1>${code}</h1>` + BlogOne
    secc2.innerHTML=template
    const secc3 = document.getElementById('helpers-content-blog-v5')
    const template3 = subSection
    secc3.innerHTML=template3
    //Javascript
    main()
}


function fillData2(code){
    console.log("Here2")
    const secc2 = document.getElementById('submain-content-blog-v5')
    const template = `<h1>${code}</h1>` + BlogTwo
    secc2.innerHTML=template
    const secc3 = document.getElementById('helpers-content-blog-v5')
    const template3 = subSection2
    secc3.innerHTML=template3
    mainBreakOut()
}

export function blogsite(){
    console.log("blogs")
    const buttons = document.querySelector('#clickMenuv5')
    console.log("b",buttons)
    const section = buttons.querySelectorAll('li')
    for(let i=0;i<section.length;i++){
        section[i].addEventListener('click',()=>{subLinksManager(section[i].querySelector('span').innerHTML)})
    }
    
}

function scrolling(){
    const buttons = document.querySelector('#myscroll')
    buttons.addEventListener('click',()=>{
        var element = document.getElementById("rock-paper-scisor-hl")
        element.scrollIntoView()
    })   
}