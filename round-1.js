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
    answer: "Paris",
    question: "What is the capital of France?",
    points: 200,
  },
  category1_400: {
    answer: "Harper Lee",
    question: "Who wrote 'To Kill a Mockingbird'?",
    points: 400,
  },
  category1_600: {
    answer: "H2O",
    question: "What is the chemical symbol for water?",
    points: 600,
  },
  category1_800: {
    answer: "1912",
    question: "What year did the Titanic sink?",
    points: 800,
  },
  category1_1000: {
    answer: "Mount Everest",
    question: "What is the tallest mountain in the world?",
    points: 1000,
  },
  category2_200: {
    answer: "Leonardo da Vinci",
    question: "Who painted the Mona Lisa?",
    points: 200,
  },
  category2_400: {
    answer: "Jupiter",
    question: "What is the largest planet in our solar system?",
    points: 400,
  },
  category2_600: {
    answer: "Neil Armstrong",
    question: "Who was the first person to step on the moon?",
    points: 600,
  },
  category2_800: {
    answer: "Stratford-upon-Avon",
    question: "In which city was William Shakespeare born?",
    points: 800,
  },
  category2_1000: {
    answer: "Japanese yen",
    question: "What is the currency of Japan?",
    points: 1000,
  },
  category3_200: {
    answer: "Avocado",
    question: "What is the primary ingredient in guacamole?",
    points: 200,
  },
  category3_400: {
    answer: "George Orwell",
    question: "Who is the author of '1984'?",
    points: 400,
  },
  category3_600: {
    answer: "Pacific Ocean",
    question: "What is the largest ocean on Earth?",
    points: 600,
  },
  category3_800: {
    answer: "Alexander Fleming",
    question: "Who discovered penicillin?",
    points: 800,
  },
  category3_1000: {
    answer: "Canberra",
    question: "What is the capital of Australia?",
    points: 1000,
  },
  category4_200: {
    answer: "William Shakespeare",
    question: "Who wrote 'Romeo and Juliet'?",
    points: 200,
  },
  category4_400: {
    answer: "Au",
    question: "What is the chemical symbol for gold?",
    points: 400,
  },
  category4_600: {
    answer: "Diamond",
    question: "What is the hardest natural substance on Earth?",
    points: 600,
  },
  category4_800: {
    answer: "Vincent van Gogh",
    question: "Who painted 'Starry Night'?",
    points: 800,
  },
  category4_1000: {
    answer: "Blue whale",
    question: "What is the largest mammal in the world?",
    points: 1000,
  },
  category5_200: {
    answer: "F. Scott Fitzgerald",
    question: "Who wrote 'The Great Gatsby'?",
    points: 200,
  },
  category5_400: {
    answer: "Brasília",
    question: "What is the capital of Brazil?",
    points: 400,
  },
  category5_600: {
    answer: "Fe",
    question: "What is the chemical symbol for iron?",
    points: 600,
  },
  category5_800: {
    answer: "Alexander Graham Bell",
    question: "Who invented the telephone?",
    points: 800,
  },
  category5_1000: {
    answer: "Nitrogen",
    question: "What is the most abundant gas in the Earth's atmosphere?",
    points: 1000,
  },
  category6_200: {
    answer: "Leonardo da Vinci",
    question: "Who painted 'The Last Supper'?",
    points: 200,
  },
  category6_400: {
    answer: "Antarctica (Antarctic Desert)",
    question: "What is the largest desert in the world?",
    points: 400,
  },
  category6_600: {
    answer: "J.D. Salinger",
    question: "Who wrote 'The Catcher in the Rye'?",
    points: 600,
  },
  category6_800: {
    answer: "Na",
    question: "What is the chemical symbol for sodium?",
    points: 800,
  },
  category6_1000: {
    answer: "Vatican City",
    question: "What is the smallest country in the world?",
    points: 1000,
  },
};

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




