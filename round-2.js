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
        answer: "Canberra",
        question: "What is the capital of Australia?",
        points: 400
    },
    secondCategory1_800: {
        answer: "F. Scott Fitzgerald",
        question: "Who wrote 'The Great Gatsby'?",
        points: 800
    },
    secondCategory1_1200: {
        answer: "Na",
        question: "What is the chemical symbol for sodium?",
        points: 1200
    },
    secondCategory1_1600: {
        answer: "Earth",
        question: "Which planet is known as the 'Blue Planet'?",
        points: 1600
    },
    secondCategory1_2000: {
        answer: "Nile",
        question: "What is the longest river in the world?",
        points: 2000
    },
    secondCategory2_400: {
        answer: "Edvard Munch",
        question: "Who painted 'The Scream'?",
        points: 400
    },
    secondCategory2_800: {
        answer: "Greenland",
        question: "What is the largest island in the world?",
        points: 800
    },
    secondCategory2_1200: {
        answer: "Indian Rupee",
        question: "What is the currency of India?",
        points: 1200
    },
    secondCategory2_1600: {
        answer: "Herman Melville",
        question: "Who wrote 'Moby Dick'?",
        points: 1600
    },
    secondCategory2_2000: {
        answer: "He",
        question: "What is the chemical symbol for helium?",
        points: 2000
    },
    secondCategory3_400: {
        answer: "Philippine Sea",
        question: "What is the largest sea in the world?",
        points: 400
    },
    secondCategory3_800: {
        answer: "Fabian Gottlieb von Bellingshausen",
        question: "Who was the first person to set foot on Antarctica?",
        points: 800
    },
    secondCategory3_1200: {
        answer: "Africa",
        question: "What is the hottest continent on Earth?",
        points: 1200
    },
    secondCategory3_1600: {
        answer: "Euclid",
        question: "Who is known as the 'Father of Geometry'?",
        points: 1600
    },
    secondCategory3_2000: {
        answer: "Ostrich",
        question: "What is the largest bird in the world?",
        points: 2000
    },
    secondCategory4_400: {
        answer: "Brasília",
        question: "What is the capital of Brazil?",
        points: 400
    },
    secondCategory4_800: {
        answer: "J.D. Salinger",
        question: "Who wrote 'The Catcher in the Rye'?",
        points: 800
    },
    secondCategory4_1200: {
        answer: "Ca",
        question: "What is the chemical symbol for calcium?",
        points: 1200
    },
    secondCategory4_1600: {
        answer: "Mercury",
        question: "Which planet is known as the 'Evening Star'?",
        points: 1600
    },
    secondCategory4_2000: {
        answer: "Alexander Fleming",
        question: "Who discovered penicillin?",
        points: 2000
    },
    secondCategory5_400: {
        answer: "Giraffe",
        question: "What is the tallest animal in the world?",
        points: 400
    },
    secondCategory5_800: {
        answer: "Valentina Tereshkova",
        question: "Who was the first female astronaut?",
        points: 800
    },
    secondCategory5_1200: {
        answer: "Saltwater crocodile",
        question: "What is the largest reptile in the world?",
        points: 1200
    },
    secondCategory5_1600: {
        answer: "Leonardo da Vinci",
        question: "Who painted the 'Mona Lisa'?",
        points: 1600
    },
    secondCategory5_2000: {
        answer: "Pb",
        question: "What is the chemical symbol for lead?",
        points: 2000
    },
    secondCategory6_400: {
        answer: "Pretoria",
        question: "What is the capital of South Africa?",
        points: 400
    },
    secondCategory6_800: {
        answer: "Leo Tolstoy",
        question: "Who wrote 'War and Peace'?",
        points: 800
    },
    secondCategory6_1200: {
        answer: "K",
        question: "What is the chemical symbol for potassium?",
        points: 1200
    },
    secondCategory6_1600: {
        answer: "Vigdís Finnbogadóttir",
        question: "Who was the first female president of a country?",
        points: 1600
    },
    secondCategory6_2000: {
        answer: "Femur",
        question: "What is the largest bone in the human body?",
        points: 2000
    }
};

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
            document.getElementById('nextRoundButton2').removeAttribute('disabled');
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

