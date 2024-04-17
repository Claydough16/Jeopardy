window.onload = init

const player1 = 'Player 1'
const player2 = 'Player 2'

let playerTurn = player1

let currentQuestion = ''
let questionsAnswered = 0;

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

let player1score = 0;
let player2score = 0;
player1score = parseInt(GetURLParameter("player1"));
player2score = parseInt(GetURLParameter("player2"));

let answers = {
    secondCategory1_400: {
        answer: "answer31",
        question: "question31",
        points: 400
    },
    secondCategory1_800: {
        answer: "answer32",
        question: "question32",
        points: 800
    },
    secondCategory1_1200: {
        answer: "answer33",
        question: "question33",
        points: 1200
    },
    secondCategory1_1600: {
        answer: "answer34",
        question: "question34",
        points: 1600
    },
    secondCategory1_2000: {
        answer: "answer35",
        question: "question35",
        points: 2000
    },
    secondCategory2_400: {
        answer: "answer36",
        question: "question36",
        points: 400
    },
    secondCategory2_800: {
        answer: "answer37",
        question: "question37",
        points: 800
    },
    secondCategory2_1200: {
        answer: "answer38",
        question: "question38",
        points: 1200
    },
    secondCategory2_1600: {
        answer: "answer39",
        question: "question39",
        points: 1600
    },
    secondCategory2_2000: {
        answer: "answer40",
        question: "question40",
        points: 2000
    },
    secondCategory3_400: {
        answer: "answer41",
        question: "question41",
        points: 400
    },
    secondCategory3_800: {
        answer: "answer42",
        question: "question42",
        points: 800
    },
    secondCategory3_1200: {
        answer: "answer43",
        question: "question43",
        points: 1200
    },
    secondCategory3_1600: {
        answer: "answer44",
        question: "question44",
        points: 1600
    },
    secondCategory3_2000: {
        answer: "answer45",
        question: "question45",
        points: 2000
    },
    secondCategory4_400: {
        answer: "answer46",
        question: "question46",
        points: 400
    },
    secondCategory4_800: {
        answer: "answer47",
        question: "question47",
        points: 800
    },
    secondCategory4_1200: {
        answer: "answer48",
        question: "question48",
        points: 1200
    },
    secondCategory4_1600: {
        answer: "answer49",
        question: "question49",
        points: 1600
    },
    secondCategory4_2000: {
        answer: "answer50",
        question: "question50",
        points: 2000
    },
    secondCategory5_400: {
        answer: "answer51",
        question: "question51",
        points: 400
    },
    secondCategory5_800: {
        answer: "answer52",
        question: "question52",
        points: 800
    },
    secondCategory5_1200: {
        answer: "answer53",
        question: "question53",
        points: 1200
    },
    secondCategory5_1600: {
        answer: "answer54",
        question: "question54",
        points: 1600
    },
    secondCategory5_2000: {
        answer: "answer55",
        question: "question55",
        points: 2000
    },
    secondCategory6_400: {
        answer: "answer56",
        question: "question56",
        points: 400
    },
    secondCategory6_800: {
        answer: "answer57",
        question: "question57",
        points: 800
    },
    secondCategory6_1200: {
        answer: "answer58",
        question: "question58",
        points: 1200
    },
    secondCategory6_1600: {
        answer: "answer59",
        question: "question59",
        points: 1600
    },
    secondCategory6_2000: {
        answer: "answer60",
        question: "question60",
        points: 2000
    }
}

let questionLimit = Object.keys(answers).length;

function init() {

    
    document.getElementById('guessButton2').setAttribute("disabled", "disabled")
    document.getElementById('passButton2').setAttribute("disabled", "disabled")
    document.getElementById('nextRoundButton2').setAttribute("disabled", "disabled")
    
    document.getElementById('player1score').innerText = `${player1score}`;
    document.getElementById('player2score').innerText = `${player2score}`;

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
            document.getElementById('guessButton2').removeAttribute("disabled")
            document.getElementById('passButton2').removeAttribute("disabled")
            this.removeEventListener('click', questionHandler);
        })
    });
    
    // document.getElementById('secondCategory1_800').addEventListener('click', (e) => {
    //     document.getElementById('secondCategory1_800').innerHTML = `<p>${answers[value].question}</p>`;
    //     currentQuestion = 'secondCategory1_800'
    //     document.getElementById('guessButton2').removeAttribute("disabled")
    //     document.getElementById('passButton2').removeAttribute("disabled")
    // })

    document.getElementById('guessButton2').addEventListener('click', (e) => {
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
        if (questionsAnswered == questionLimit || player1score >= 30000 || player2score >= 30000) {
            window.alert("Time for Final Jeopardy! Click the Final Round Button to advance.")
            document.getElementById('nextRoundButton').removeAttribute('disabled');
        }
    })

    document.getElementById('passButton2').addEventListener('click', (e) => {
        if (playerTurn == player1) {
            playerTurn = player2;
        } else {
            playerTurn = player1;
        }
        window.alert(`It's ${playerTurn}'s turn!`);
    });

    document.getElementById('nextRoundButton2').addEventListener('click', (e) => {
        window.location.replace(`final-jeopardy.html?player1=${player1score}&player2=${player2score}`);
    });

    // document.getElementById('passButton2').addEventListener('click', (e) => {
    //     playerTurn = player2
    //     window.alert(`It's ${playerTurn}'s turn!`)
    // })

}

