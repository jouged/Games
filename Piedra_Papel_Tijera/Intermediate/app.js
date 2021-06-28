const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid =document.getElementById('game')
gameGrid.append(userChoiceDisplay,computerChoiceDisplay,resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice
const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer Choice: ' + randomChoice

}

for (let i = 0; i < choices.length; i++){
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch(userChoice + '-' +computerChoice){
        case 'scissors-paper':
        case 'rock-scissors':
        case 'paper-rock':
            resultDisplay.innerHTML = "YOU WIN!"
            break
        case 'paper-scissors':
        case 'scissors-rock':
        case 'rock-paper':
            resultDisplay.innerHTML = "YOU LOSE!"
            break
        case 'paper-paper':
        case 'scissors-scissors':
        case 'rock-rock':
            resultDisplay.innerHTML = "ITS A DRAW!"
            break
}
}
