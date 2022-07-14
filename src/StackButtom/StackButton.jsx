import "./StackButtom.css"

export const StackButtom = () => {
    function handleClick(){
        const popUp=document.querySelector('.pop-up-general')
        popUp.classList.remove('desactive-pop-up-g')
        popUp.classList.add('active-pop-up-g')
    }
    function handleClosePopUp(){
        const popUp=document.querySelector('.pop-up-general')
        popUp.classList.add('desactive-pop-up-g')
        popUp.classList.remove('active-pop-up-g')    
    } 
    function handleLearnMore(){
        alert("In process...")
    }
    return(
    <>
        <div className="button-general-vall" onClick={handleClick}>
            <span>How was build?
            </span>            
        </div>        
        <div className="pop-up-general desactive-pop-up-g">
            <h2>Welcome to Html <a className="close-pop-up-g" onClick={handleClosePopUp}>X</a></h2>
            <h4>(HyperText Markup Language)</h4>
            <p> Most basic what you can build on web is
                Html tags. It declares basic structure on 
                content with the information which want to be display in this case a portfolio example.
            </p>
            <div className="content-link-g">
                <a href="" onClick={handleLearnMore}>Want lo Learn More?</a>
            </div>
        </div>
    </>
    )
}