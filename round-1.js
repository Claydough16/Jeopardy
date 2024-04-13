window.onload = init

const player1 = 'Player 1'
const player2 = 'Player 2'

let playerTurn = player1

let currentQuestion = ''

function init() {

    
    document.getElementById('guessButton').setAttribute("disabled", "disabled")
    document.getElementById('passButton').setAttribute("disabled", "disabled")
    document.getElementById('nextRoundButton').setAttribute("disabled", "disabled")
    
    window.alert(`It's ${playerTurn}'s turn!`)
    
    document.getElementById('category1_200').addEventListener('click', (e) => {
        document.getElementById('category1_200').innerHTML = '<p>Why do birds take shits on cars?</p>';
        currentQuestion = 'category1_200'
        document.getElementById('guessButton').removeAttribute("disabled")
        document.getElementById('passButton').removeAttribute("disabled")    
    })

    input

    document.getElementById('passButton').addEventListener('click', (e) => {
        playerTurn = player2
        window.alert(`It's ${playerTurn}'s turn!`)
    })

}

let answers = {
    category1_200: "answer1"

}


