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

let categoryContent = {
    secondCategory1_400: {
        answer: ["Vicory Royale", "A Victory Royale", "A victory royale"],
        question: "What message is displayed on the player's screen when they win a match?",
        points: 400
    },
    secondCategory1_800: {
        answer: ["25", "Twenty five"],
        question: "How much shield does a 'mini potion' award the player?",
        points: 800
    },
    secondCategory1_1200: {
        answer: ["V-Bucks", "V Bucks"],
        question: "What is the in-game currency used to purchase cosmetics and Battle Pass tiers in Fortnite?",
        points: 1200
    },
    secondCategory1_1600: {
        answer: ["Hades Whip", "Chains of Hades", "Hades Chains"],
        question: "What weapon themed after Hades allowed players to yank other players towards them?",
        points: 1600
    },
    secondCategory1_2000: {
        answer: ["Battle Bus"],
        question: "What is the name of the vehicle that drops players onto the island at the beginning of each Fortnite match?",
        points: 2000
    },
    secondCategory2_400: {
        answer: ["Shotgun", "shotgun"],
        question: "What type of weapon is known for its close-range damage and effectiveness in Fortnite?",
        points: 400
    },
    secondCategory2_800: {
        answer: ["Supply Llama", "Llama", "Loot Llama", "Loot llama"],
        question: "What is the name of the loot piñata found randomly throughout the map in Fortnite?",
        points: 800
    },
    secondCategory2_1200: {
        answer: ["Thunderbolt of Zues", "Zues's Thunderbolt", "Thunderbolt", "Zues's Lightning"],
        question: "Which weapon was introduced in Fortnite that allowed the player to throw lightning?",
        points: 1200
    },
    secondCategory2_1600: {
        answer: ["Cuddle Team Leader"],
        question: "Which skin features a pink bear costume and is one of the iconic outfits in Fortnite?",
        points: 1600
    },
    secondCategory2_2000: {
        answer: ["Slurp Juice", "Slurp"],
        question: "What consumable item gradually restores health and shield over time in Fortnite?",
        points: 2000
    },
    secondCategory3_400: {
        answer: ["Pleasant Park"],
        question: "Which location on the Fortnite map is known for its suburban houses and football field?",
        points: 400
    },
    secondCategory3_800: {
        answer: ["Drum Gun"],
        question: "Which assault rifle uses a drum magazine and is known to be inaccurate?",
        points: 800
    },
    secondCategory3_1200: {
        answer: ["Port-a-Fortress", "Port-a-Fortress", "Port a fort", "Port a Fort"],
        question: "What throwable item instantly builds a large metal structure when used in Fortnite?",
        points: 1200
    },
    secondCategory3_1600: {
        answer: ["Thanos", "thanos"],
        question: "Which Marvel villian appeared in Fortnite with the Infinity Gauntlet?",
        points: 1600
    },
    secondCategory3_2000: {
        answer: ["Haunted Hills"],
        question: "Which location on the Fortnite map is characterized by its spooky theme and cemetery?",
        points: 2000
    },
    secondCategory4_400: {
        answer: ["Peely"],
        question: "Which skin features a humanoid banana and became a fan favorite in Fortnite?",
        points: 400
    },
    secondCategory4_800: {
        answer: ["Rocket Launcher", "RPG"],
        question: "Which weapon was vaulted in Chapter 2 Season 5 but later reintroduced with balancing adjustments?",
        points: 800
    },
    secondCategory4_1200: {
        answer: ["Glider Redeploy", "Glider Redeployment"],
        question: "Which gameplay mechanic allowed players to redeploy their gliders mid-air in earlier seasons of Fortnite?",
        points: 1200
    },
    secondCategory4_1600: {
        answer: ["Building Materials", "Building Mats", "Mats", "building materials", "mats", "building mats"],
        question: "Which item allows players to build structures in Fortnite?",
        points: 1600
    },
    secondCategory4_2000: {
        answer: ["Fortnite World Cup", "Fortnite world cup", "Fornite cup"],
        question: "What event featured the largest prize pool in Fortnite history, with millions of dollars awarded to winners?",
        points: 2000
    },
    secondCategory5_400: {
        answer: ["Sniper Rifle", "Sniper Rifles", "Snipers", "sniper rifle", "sniper rifles"],
        question: "Which weapon category in Fortnite includes rifles with scopes for long-range combat?",
        points: 400
    },
    secondCategory5_800: {
        answer: ["Rift-To-Go", "Rift To Go"],
        question: "What item allowed players to create a temporary rift, teleporting them to a different location in Fortnite?",
        points: 800
    },
    secondCategory5_1200: {
        answer: ["Shield Potion", "Shield Pot"],
        question: "What is the name of the energy shield that players can consume for protection in Fortnite?",
        points: 1200
    },
    secondCategory5_1600: {
        answer: ["Save the World", "Save the world"],
        question: "What is the name of the campaign mode that Fortnite offers?",
        points: 1600
    },
    secondCategory5_2000: {
        answer: ["Tilted Towers"],
        question: "What is the name of the popular area where the 'sweaty' players would drop in OG Fortnite?",
        points: 2000
    },
    secondCategory6_400: {
        answer: ["100", "A hundred", "One hundred"],
        question: "What is the maximum number of players in a Fortnite Battle Royale match?",
        points: 400
    },
    secondCategory6_800: {
        answer: ["Pickaxe"],
        question: "What is the name of the default harvesting tool in Fortnite?",
        points: 800
    },
    secondCategory6_1200: {
        answer: ["Reboot Van", "Reboot Van"],
        question: "What in-game feature allows teammates to revive eliminated players by collecting their Reboot Cards?",
        points: 1200
    },
    secondCategory6_1600: {
        answer: ["Mythic", "mythic"],
        question: "What is the rarest item type in Fortnite?",
        points: 1600
    },
    secondCategory6_2000: {
        answer: ["Battle Pass", "battle pass"],
        question: "What is the seasonal subscription service that offers exclusive rewards and challenges in Fortnite?",
        points: 2000
    }
};

// Fornite themed per request from the wife lol

let questionLimit = Object.keys(categoryContent).length;

function nextRound() {
    document.getElementById("guessButton2").setAttribute("disabled", "disabled");
    document.getElementById("passButton2").setAttribute("disabled", "disabled");
    document.getElementById("input").setAttribute("disabled", "disabled");
    document.getElementById("nextRoundButton2").removeAttribute("disabled");
    document.getElementById("mainDiv2").innerHTML = "";
}

function init() {
    document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`    
    document.getElementById('guessButton2').setAttribute("disabled", "disabled")
    document.getElementById('passButton2').setAttribute("disabled", "disabled")
    document.getElementById('nextRoundButton2').setAttribute("disabled", "disabled")
    
    document.getElementById('player1score').innerText = `${player1score}`;
    document.getElementById('player2score').innerText = `${player2score}`;

    window.alert(`It's ${playerTurn}'s turn!`)

    Object.keys(categoryContent).map((value) => {
        document.getElementById(value).addEventListener('click', function questionHandler(e) {
            if (currentQuestion != "") {
                window.alert("You must answer or pass the question first!");
                return;
            }
            questionAttempts = 0;
            document.getElementById(value).innerHTML = `<p>${categoryContent[value].question}</p>`;
            currentQuestion = value;
            document.getElementById('guessButton2').removeAttribute("disabled")
            document.getElementById('passButton2').removeAttribute("disabled")
            this.removeEventListener('click', questionHandler);
        })
    });

    document.getElementById('guessButton2').addEventListener('click', (e) => {
        if (categoryContent[currentQuestion].answer.includes(document.getElementById('input').value)) {
            if (playerTurn == player1) {
                player1score += categoryContent[currentQuestion].points;
                document.getElementById('player1score').innerText = `${player1score}`
                document.getElementById("input").value = "";
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
                window.alert(`Correct!!`)
            }
            else if (playerTurn == player2) {
                player2score += categoryContent[currentQuestion].points;
                document.getElementById('player2score').innerText = `${player2score}`
                document.getElementById("input").value = "";
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
                window.alert(`Correct!!`)
            }
            questionsAnswered++;
        } else {
            if (playerTurn == player1) {
                player1score -= categoryContent[currentQuestion].points;
                document.getElementById('player1score').innerText = `${player1score}`
                document.getElementById("input").value = "";
                questionAttempts++;
                playerTurn = player2;
            } else if (playerTurn == player2) {
                player2score -= categoryContent[currentQuestion].points;
                document.getElementById('player2score').innerText = `${player2score}`
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
        if (questionsAnswered == questionLimit || player1score >= 30000 || player2score >= 30000) {
            window.alert("Time for Final Jeopardy! Click the Final Round Button to advance.")
            nextRound();
        }
    })

    document.getElementById('passButton2').addEventListener('click', (e) => {
        questionAttempts++;
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

    document.getElementById('nextRoundButton2').addEventListener('click', (e) => {
        window.location.replace(`final-jeopardy.html?player1=${player1score}&player2=${player2score}`);
    });

    // document.getElementById('passButton2').addEventListener('click', (e) => {
    //     playerTurn = player2
    //     window.alert(`It's ${playerTurn}'s turn!`)
    // })

}

