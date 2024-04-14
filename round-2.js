window.onload = init

const player1 = 'Player 1'
const player2 = 'Player 2'

let playerTurn = player1

let currentQuestion = ''

function init() {

    
    document.getElementById('guessButton2').setAttribute("disabled", "disabled")
    document.getElementById('passButton2').setAttribute("disabled", "disabled")
    document.getElementById('nextRoundButton2').setAttribute("disabled", "disabled")
    
    window.alert(`It's ${playerTurn}'s turn!`)
    
    document.getElementById('secondCategory1_400').addEventListener('click', (e) => {
        document.getElementById('secondCategory1_400').innerHTML = '<p>Question #1</p>';
        currentQuestion = 'secondCategory1_400'
        document.getElementById('guessButton2').removeAttribute("disabled")
        document.getElementById('passButton2').removeAttribute("disabled")
    })

    document.getElementById('passButton2').addEventListener('click', (e) => {
        playerTurn = player2
        window.alert(`It's ${playerTurn}'s turn!`)
    })

}

let answers = {
    category1_200: "answer1",
    category1_400: "answer2",
    category1_600: "answer3",
    category1_800: "answer4",
    category1_1000: "answer5",

    category2_200: "answer6",
    category2_400: "answer7",
    category2_600: "answer8",
    category2_800: "answer9",
    category2_1000: "answer10",

    category3_200: "answer11",
    category3_400: "answer12",
    category3_600: "answer13",
    category3_800: "answer14",
    category3_1000: "answer15",

    category4_200: "answer16",
    category4_400: "answer17",
    category4_600: "answer18",
    category4_800: "answer19",
    category4_1000: "answer20",

    category5_200: "answer21",
    category5_400: "answer22",
    category5_600: "answer23",
    category5_800: "answer24",
    category5_1000: "answer25",

    category6_200: "answer26",
    category6_400: "answer27",
    category6_600: "answer28",
    category6_800: "answer29",
    category6_1000: "answer30"

}