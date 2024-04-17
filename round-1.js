window.onload = init

const player1 = 'Player 1'
const player2 = 'Player 2'

let player1score = 0;
let player2score = 0;

let playerTurn = player1

let currentQuestion = ''
let questionAttempts = 0;

let questionsAnswered = 0;

let answers = {
    category1_200: {
        answer: "answer1",
        question: "question1",
        points: 200
    },
    category1_400: {
        answer: "answer2",
        question: "question2",
        points: 400
    },
    category1_600: {
        answer: "answer3",
        question: "question3",
        points: 600
    },
    category1_800: {
        answer: "answer4",
        question: "question4",
        points: 800
    },
    category1_1000: {
        answer: "answer5",
        question: "question5",
        points: 1000
    },
    category2_200: {
        answer: "answer6",
        question: "question6",
        points: 200
    },
    category2_400: {
        answer: "answer7",
        question: "question7",
        points: 400
    },
    category2_600: {
        answer: "answer8",
        question: "question8",
        points: 600
    },
    category2_800: {
        answer: "answer9",
        question: "question9",
        points: 800
    },
    category2_1000: {
        answer: "answer10",
        question: "question10",
        points: 1000
    },
    category3_200: {
        answer: "answer11",
        question: "question11",
        points: 200
    },
    category3_400: {
        answer: "answer12",
        question: "question12",
        points: 400
    },
    category3_600: {
        answer: "answer13",
        question: "question13",
        points: 600
    },
    category3_800: {
        answer: "answer14",
        question: "question14",
        points: 800
    },
    category3_1000: {
        answer: "answer15",
        question: "question15",
        points: 1000
    },
    category4_200: {
        answer: "answer16",
        question: "question16",
        points: 200
    },
    category4_400: {
        answer: "answer17",
        question: "question17",
        points: 400
    },
    category4_600: {
        answer: "answer18",
        question: "question18",
        points: 600
    },
    category4_800: {
        answer: "answer19",
        question: "question19",
        points: 800
    },
    category4_1000: {
        answer: "answer20",
        question: "question20",
        points: 1000
    },
    category5_200: {
        answer: "answer21",
        question: "question21",
        points: 200
    },
    category5_400: {
        answer: "answer22",
        question: "question22",
        points: 400
    },
    category5_600: {
        answer: "answer23",
        question: "question23",
        points: 600
    },
    category5_800: {
        answer: "answer24",
        question: "question24",
        points: 800
    },
    category5_1000: {
        answer: "answer25",
        question: "question25",
        points: 1000
    },
    category6_200: {
        answer: "answer26",
        question: "question26",
        points: 200
    },
    category6_400: {
        answer: "answer27",
        question: "question27",
        points: 400
    },
    category6_600: {
        answer: "answer28",
        question: "question28",
        points: 600
    },
    category6_800: {
        answer: "answer29",
        question: "question29",
        points: 800
    },
    category6_1000: {
        answer: "answer30",
        question: "question30",
        points: 1000
    }
}

let questionLimit = Object.keys(answers).length;

function init() {

    
    document.getElementById('guessButton').setAttribute("disabled", "disabled")
    document.getElementById('passButton').setAttribute("disabled", "disabled")
    document.getElementById('nextRoundButton').setAttribute("disabled", "disabled")
    
    window.alert(`It's ${playerTurn}'s turn!`)

    Object.keys(answers).map((value) => {
        document.getElementById(value).addEventListener('click', function questionHandler(e) {
            if (currentQuestion != "") {
                window.alert("You must answer or pass the question first!");
                return;
            }
            questionAttempts = 0;
            document.getElementById(value).innerHTML = `<p>${answers[value].question}</p>`;
            currentQuestion = value;
            document.getElementById('guessButton').removeAttribute("disabled")
            document.getElementById('passButton').removeAttribute("disabled")
            this.removeEventListener('click', questionHandler);
        })
    });

    document.getElementById('guessButton').addEventListener('click', (e) => {
        if (document.getElementById('input').value == answers[currentQuestion].answer) {
            if (playerTurn == player1) {
                player1score += answers[currentQuestion].points;
                document.getElementById('player1score').innerText = `${player1score}`
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
            }
            else if (playerTurn == player2) {
                player2score += answers[currentQuestion].points;
                document.getElementById('player2score').innerText = `${player2score}`
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
            }
            questionsAnswered++;
        } else {
            if (playerTurn == player1) {
                player1score -= answers[currentQuestion].points;
                document.getElementById('player1score').innerText = `${player1score}`
                questionAttempts++;
                playerTurn = player2;
            } else if (playerTurn == player2) {
                player2score -= answers[currentQuestion].points;
                document.getElementById('player2score').innerText = `${player2score}`
                questionAttempts++;
                playerTurn = player1;
            }

            if (questionAttempts < 2) {
                window.alert(`${playerTurn}, it's your chance to guess!`);
            } else {
                document.getElementById(currentQuestion).innerHTML = "";
                questionsAnswered++;
            }
        }
        if (questionsAnswered == questionLimit || player1score >= 15000 || player2score >= 15000) {
            window.alert("Time for round 2! Click the Round 2 Button to advance.")
            document.getElementById('nextRoundButton').removeAttribute('disabled');
        }
    })

    document.getElementById('passButton').addEventListener('click', (e) => {
        if (playerTurn == player1) {
            playerTurn = player2;
        } else {
            playerTurn = player1;
        }
        window.alert(`It's ${playerTurn}'s turn!`);
    });

    document.getElementById('nextRoundButton').addEventListener('click', (e) => {
        window.location.replace(`round-2.html?player1=${player1score}&player2=${player2score}`);
    });

}




