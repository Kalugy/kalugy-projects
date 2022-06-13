
function PageSectionsTransitions(){
    for(let i=0;i<100;i++){
        console.log("x")
    }
    let allSections= document.querySelectorAll('.main-content');
    console.log("wtf",allSections)
    //allSections.forEach((section))
    
    allSections.addEventListener('click', (e) => {
        console.log(e.target)
    })
}


PageSectionsTransitions()
