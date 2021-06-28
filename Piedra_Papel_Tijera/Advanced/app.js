const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock','paper','scissors']

const handleClick = (e) => {
    const userChoice = e.target.innerHTML
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResult(userChoice, computerChoice)
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click',handleClick)
    choicesDisplay.appendChild(button)
})

const getResult = (userChoice,computerChoice) => {
    switch(userChoice + '-' + computerChoice){
        case 'scissors-paper':
        case 'rock-scissors':
        case 'paper-rock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + " ,  YOU WIN!"
            break
        case 'paper-scissors':
        case 'scissors-rock':
        case 'rock-paper':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + " ,  YOU LOSE!"
            break
        case 'paper-paper':
        case 'scissors-scissors':
        case 'rock-rock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + " ,  ITS A DRAW!"
            break
}
}