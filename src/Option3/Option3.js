import "./Option3.css"

function Option3(){
    return (
        <div className="main-div main-content">
            <header className="option3-header section sec1 header active" id="home">
            </header>
            <main>
                <section className="option3-section section sec2 about" id="about"></section>
                <section className="option3-section section sec3 portfolio" id="portfolio"></section>
                <section className="option3-section section sec4 blogs" id="blogs"></section>
                <section className="option3-section section sec5 contact" id="contact"></section>
            </main>
            <div className="controlls"> 
                <div onClick={PageTransitions} className="control control-1 active-btn" data-id="home">
                    <i className="fas fa-home"></i>
                </div>
                <div onClick={PageTransitions} className="control control-2 " data-id="about">
                    <i className="fas fa-user"></i>
                </div>
                <div onClick={PageTransitions} className="control control-3 " data-id="portfolio">
                    <i className="fas fa-briefcase"></i>
                </div>
                <div onClick={PageTransitions} className="control control-4 " data-id="blogs">
                    <i className="fas fa-newspaper"></i>
                </div>
                <div onClick={PageTransitions} className="control control-5 " data-id="contact">
                    <i className="fas fa-envelope-open"></i>
                </div>
            </div>
        </div>
    );
}

const sections= document.querySelectorAll('.section');
const sectBtns= document.querySelectorAll('.controlls');

function PageTransitions(){
    let sectBtn= document.querySelectorAll('.control');

    //console.log("run",sectBtn.length)

    //Button click active class
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn'
        })
    } 

    let allSections= document.querySelectorAll('.main-content');
    console.log("wtf",allSections)
    //allSections.forEach((section))
    
    //allSections.addEventListener('click', (e) => {
    //    console.log(e.target)
    //})

}


export default Option3;
