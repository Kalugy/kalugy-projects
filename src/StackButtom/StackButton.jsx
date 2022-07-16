import "./StackButtom.css"

export const StackButtom = ({content}) => {
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
        return false
    }
    
    return(
    <>
        <div className="button-general-vall" onClick={handleClick}>
            <span>{content.buttom}
            </span>            
        </div>        
        <div className="pop-up-general desactive-pop-up-g">
            <h2>{content.title} <a className="close-pop-up-g" onClick={handleClosePopUp}>X</a></h2>
            <h4>{content.subtitle}</h4>
            <p> {content.text}</p>
            <div className="content-link-g">
                <a href="" onClick={handleLearnMore}>Want lo Learn More?</a>
            </div>
        </div>
    </>
    )
}