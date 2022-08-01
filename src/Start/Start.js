import "./Start.css"
import {componentDidMount,useEffect} from "react"
export const Start = () =>{

    useEffect(() => {
        const btnStart = document.querySelector('#btn-start-p')
        const menu = document.querySelector('#main-menu-p')
        const mainStartContainer = document.querySelector('#start-selecter')
        
        btnStart.addEventListener('click',()=>{
            menu.classList.remove('active-main-menu-p')
            mainStartContainer.classList.add('active-start-pr')
        })

    }, []);

    return(
    <div className="start-body" id="start-selecter">
        <header>
            <h1>Portfolio Journey</h1>
        </header>
        <main>
            <section className="section-start">
                <div className="think-1">
                    <ul className="globe-1">
                        <li>What can you Build on web?</li>
                        <li>How is build a page?</li>
                        <li>Looking for a path to learn?</li>
                    </ul>
                    <div className="thing"></div>
                </div>
                <div className="think-2">
                    <div className="globe">
                        <p>Welcome to <span> Portfolio Journey </span>
                        an example from 0 to pro how you can build a page in this example every page is my portfolio.
                        </p>
                    </div>
                    <div className="thing"></div>
                    <div className="start-btn" id="btn-start-p"><button>Start</button></div>
                </div>
 
            </section>
        </main>
        <footer>
            Made by @KalugyDev
        </footer>
    </div>
    )
}