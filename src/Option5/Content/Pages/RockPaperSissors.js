
export const main = () => {
    const choices = ['rock', 'paper','scissor']
    const choicesDisplay2 = document.querySelector('#choices')
    
    choices.forEach(choice  =>{
        const button = document.createElement('div')
        button.innerHTML = choice
        button.classList.add('rock-paper-scissor')
        button.addEventListener('click', handleClick)
        choicesDisplay2.appendChild(button)
    })
        
}

const handleClick = (e) => {
    const choices = ['rock', 'paper','scissor']

    getResult2(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}


const getResult2 = (userCho, compuCho) => {
    const resultDisplay2 = document.querySelector('#result2')
 
    switch (userCho + compuCho){
        case 'scissorpaper':
        case 'rockscissor':
        case 'paperrock':
            resultDisplay2.innerHTML = "you choose " + userCho + " computer choose " + compuCho + " You won! :D";
            break;
        case 'scissorrock':
        case 'rockpaper':
        case 'paperscissor':
            resultDisplay2.innerHTML = "you choose " + userCho + " computer choose " + compuCho +" You Lose :(" ;
            break;
        case 'scissorscissor':
        case 'rockrock':
        case 'paperpaper':
            resultDisplay2.innerHTML = "you choose " + userCho + " computer choose " + compuCho+" You Draw -.-";
            break;
    }
}