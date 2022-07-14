import "./StackButtom.css"
export const StackButtom = () => {
    let toogleSlack = false
    function handleClick(){
        toogleSlack=!toogleSlack
        console.log("to",toogleSlack)
        alert("In Process")
    } 
    function hey(){
        return <div>dsadasdsa</div>
    }
    return(<>
        <div className="button-general" onClick={handleClick}>
            <span>How was build?
            </span>    
            {toogleSlack==true?<div>dsadasdsadasd</div>:null

            }
        </div>
    </>)
}