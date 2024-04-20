window.onload = init;

const player1 = "Player 1";
const player2 = "Player 2";

let player1score = 0;
let player2score = 0;

let playerTurn = player1;

let currentQuestion = "";
let questionAttempts = 0;

let questionsAnswered = 0;

let categoryContent = {
    category1_200: {
        answer: ["A Link to the Past", "link to the past", "a link to the past"],
        question:
        "In which game of The Legend of Zelda series does Link travel between two parallel worlds, Light and Dark?",
        points: 200,
    },
    category1_400: {
        answer: ["Navi", "navi"],
        question: "What is the name of Link's fairy companion in Ocarina of Time?",
        points: 400,
    },
    category1_600: {
        answer: ["Ganon", "Ganondorf", "ganon", "ganondorf"],
        question:
        "What is the primary antagonist's name in The Legend of Zelda series?",
        points: 600,
    },
    category1_800: {
        answer: ["The Wind Waker", "Wind Waker", "Wind waker", "wind waker"],
        question:
        "Which installment introduced the cel-shaded art style to The Legend of Zelda series?",
        points: 800,
    },
    category1_1000: {
        answer: ["Hyrule", "hyrule"],
        question:
        "What is the name of the kingdom where most of The Legend of Zelda games take place?",
        points: 1000,
    },
    category2_200: {
        answer: ["Wolf", "wolf"],
        question:
        "In Twilight Princess, what form does Link transform into when entering the Twilight Realm?",
        points: 200,
    },
    category2_400: {
        answer: ["Ocarina", "ocarina"],
        question:
        "What is the name of the magical musical instrument that Link uses in many games to manipulate time and open portals?",
        points: 400,
    },
    category2_600: {
        answer: ["Link", "link"],
        question:
        "Who is the legendary hero foretold in many Zelda games, often reincarnated throughout history?",
        points: 600,
    },
    category2_800: {
        answer: ["Link's Awakening", "Link's awakening", "link's awakening"],
        question:
        "In which game does Link embark on a journey across Koholint Island?",
        points: 800,
    },
    category2_1000: {
        answer: ["Agahnim", "agahnim"],
        question:
        "What is the name of the villainous sorcerer who serves as the final boss in A Link to the Past?",
        points: 1000,
    },
    category3_200: {
        answer: ["Ocarina of Time", "Ocarina of time", "ocarina of time"],
        question:
        "Which installment introduced the concept of multiple timelines in The Legend of Zelda series?",
        points: 200,
    },
    category3_400: {
        answer: ["Sword", "A sword", "sword"],
        question:
        "What is the primary weapon used by Link in most games of The Legend of Zelda series?",
        points: 400,
    },
    category3_600: {
        answer: ["Majora's Mask", "Majora's mask", "majora's mask"],
        question:
        "In which game does Link venture into the world of Termina to stop the moon from crashing?",
        points: 600,
    },
    category3_800: {
        answer: ["Triforce", "triforce"],
        question:
        "What is the name of the ancient relic that grants its wielder great power and is often sought after by Ganon?",
        points: 800,
    },
    category3_1000: {
        answer: ["Twilight Princess", "Twilight princess", "twilight princess"],
        question:
        "In which game does Link explore the Twilight Realm to save Hyrule from darkness?",
        points: 1000,
    },
    category4_200: {
        answer: ["Skyward Sword", "Skyward sword", "skyward sword"],
        question:
        "In which game does Link embark on a quest to find Zelda and the legendary Master Sword in the sky?",
        points: 200,
    },
    category4_400: {
        answer: ["Zelda", "zelda"],
        question:
        "What is the name of the princess of Hyrule who is often kidnapped by Ganon?",
        points: 400,
    },
    category4_600: {
        answer: ["Hyrule Warriors", "Hyrule warriors", "hyrule warriors"],
        question:
        "In which game does Link join forces with various characters from different Zelda timelines to battle against evil?",
        points: 600,
    },
    category4_800: {
        answer: [
            "Breath of the Wild",
            "BOTW",
            "botw",
            "breath of the wild",
            "Breath of the wild",
        ],
        question:
        "Which installment introduced an open-world format and extensive exploration to The Legend of Zelda series?",
        points: 800,
    },
    category4_1000: {
        answer: ["Skyloft", "skyloft"],
        question:
        "What is the name of the floating island inhabited by the people of Skyward Sword?",
        points: 1000,
    },
    category5_200: {
        answer: ["Slingshot", "Sling shot", "sling shot", "slingshot"],
        question:
        "What is the first ranged weapon Link acquires in the video game 'Twilight Princess?'",
        points: 200,
    },
    category5_400: {
        answer: ["Vaati", "vaati"],
        question:
        "Who is the primary antagonist in The Legend of Zelda: The Minish Cap?",
        points: 400,
    },
    category5_600: {
        answer: ["Twili", "twili"],
        question:
        "What is the name of the mysterious tribe that Link encounters in Twilight Princess?",
        points: 600,
    },
    category5_800: {
        answer: ["Tingle", "tingle"],
        question:
        "What is the name of the eccentric character known for his green outfit and love for rupees?",
        points: 800,
    },
    category5_1000: {
        answer: ["Saria", "saria"],
        question:
        "Who is Link's childhood friend and love interest in Ocarina of Time?",
        points: 1000,
    },
    category6_200: {
        answer: ["Hyrule Castle", "Hyrule castle", "hyrule castle"],
        question:
        "What is the name of the iconic castle often featured in The Legend of Zelda series, serving as the residence of Princess Zelda?",
        points: 200,
    },
    category6_400: {
        answer: [
            "Zora's Domain",
            "Zora's domain",
            "zora's domain",
            "zoras domain",
            "zora domain",
        ],
        question:
        "What is the name of the aquatic domain inhabited by the Zora race in The Legend of Zelda series?",
        points: 400,
    },
    category6_600: {
        answer: ["Kakariko Village", "Kakariko village"],
        question:
        "What is the name of the recurring village often found in various regions of Hyrule, known for its peaceful atmosphere and rich history?",
        points: 600,
    },
    category6_800: {
        answer: ["Death Mountain", "Death mountain", "death mountain"],
        question:
        "What is the name of the volcanic mountain range featured in many games of The Legend of Zelda series, home to the Goron race?",
        points: 800,
    },
    category6_1000: {
        answer: ["Lost Woods", "Lost woods", "lost woods"],
        question:
        "What is the name of the mystical forest known for its labyrinthine paths and mysterious inhabitants, such as the Skull Kid?",
        points: 1000,
    },
};

// Zelda themed because I'm a nerd for Zelda

let questionLimit = Object.keys(categoryContent).length;

function nextRound() {
    document.getElementById("guessButton").setAttribute("disabled", "disabled");
    document.getElementById("passButton").setAttribute("disabled", "disabled");
    document.getElementById("input").setAttribute("disabled", "disabled");
    document.getElementById("nextRoundButton").removeAttribute("disabled");
    document.getElementById("mainDiv").innerHTML = "";
}

function init() {
    document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`
    document.getElementById("guessButton").setAttribute("disabled", "disabled");
    document.getElementById("passButton").setAttribute("disabled", "disabled");
    document
    .getElementById("nextRoundButton")
    .setAttribute("disabled", "disabled");
    
    window.alert(`It's ${playerTurn}'s turn!`);
    
    Object.keys(categoryContent).map((value) => {
        document
        .getElementById(value)
        .addEventListener("click", function questionHandler(e) {
            if (currentQuestion != "") {
                window.alert("You must answer or pass the question first!");
                return;
            }
            questionAttempts = 0;
            document.getElementById(
                value
            ).innerHTML = `<p>${categoryContent[value].question}</p>`;
            currentQuestion = value;
            document.getElementById("guessButton").removeAttribute("disabled");
            document.getElementById("passButton").removeAttribute("disabled");
            this.removeEventListener("click", questionHandler);
        });
    });
    
    document.getElementById("guessButton").addEventListener("click", (e) => {
        if (categoryContent[currentQuestion].answer.includes(document.getElementById("input").value)) {
            if (playerTurn == player1) {
                player1score += categoryContent[currentQuestion].points;
                document.getElementById("player1score").innerText = `${player1score}`;
                document.getElementById("input").value = "";
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
                window.alert(`Correct!!`);
            } else if (playerTurn == player2) {
                player2score += categoryContent[currentQuestion].points;
                document.getElementById("player2score").innerText = `${player2score}`;
                document.getElementById("input").value = "";
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
                window.alert(`Correct!!`);
            }
            questionsAnswered++;
        } else {
            if (playerTurn == player1) {
                player1score -= categoryContent[currentQuestion].points;
                document.getElementById("player1score").innerText = `${player1score}`;
                document.getElementById("input").value = "";
                questionAttempts++;
                playerTurn = player2;
            } else if (playerTurn == player2) {
                player2score -= categoryContent[currentQuestion].points;
                document.getElementById("player2score").innerText = `${player2score}`;
                document.getElementById("input").value = "";
                questionAttempts++;
                playerTurn = player1;
            }
            
            if (questionAttempts < 2) {
                window.alert(`${playerTurn}, it's your chance to guess!`);
            } else {
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
                questionsAnswered++;
            }
        }
        document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`
        if (
            questionsAnswered == questionLimit ||
            player1score >= 15000 ||
            player2score >= 15000
        ) {
            window.alert("Time for round 2! Click the Round 2 Button to advance.");
            nextRound();
        }
    });
    
    document.getElementById("passButton").addEventListener("click", (e) => {
        questionAttempts++
        if (playerTurn == player1) {
            playerTurn = player2;
        } else {
            playerTurn = player1;
        }

        if (questionAttempts < 2) {
            window.alert(`${playerTurn}, it's your chance to guess!`);
        } else {
            window.alert(`The answer was ${categoryContent[currentQuestion].answer[0]}`)
            document.getElementById(currentQuestion).innerHTML = "";
            currentQuestion = "";
            questionsAnswered++;
        }
        document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`
    });
    
    document.getElementById("nextRoundButton").addEventListener("click", (e) => {
        window.location.replace(
            `round-2.html?player1=${player1score}&player2=${player2score}`
        );
    });
}
