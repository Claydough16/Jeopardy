window.onload = init

const player1 = 'Player 1'
const player2 = 'Player 2'

let playerTurn = player1

let player1answer = "";
let player1bet = 0;
let player2answer = "";
let player2bet = 0;
let finalanswer = "Cancun";

let numBets = 0;
let numAnswers = 0;
let phase = "bet"

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

let winner = "";

function init () {
    document.getElementById('maxBet').innerText = `${player1score}`;

    document.getElementById('betInput').addEventListener('change', (e) => {
        if (playerTurn == player1) {
            player1bet = parseInt(e.target.value);
            console.log(player1bet);
        } else {
            player2bet = parseInt(e.target.value);
            console.log(player2bet);
        }
    })

    document.getElementById('answerInput').addEventListener('change', (e) => {
        if (playerTurn == player1) {
            player1answer = e.target.value;
        } else {
            player2answer = e.target.value;
        }
    })

    document.getElementById('betButton').addEventListener('click', (e) => {
        if (phase == "bet") {
            if (playerTurn == player1) {
                if (player1bet > player1score || player1bet < 0) {
                    window.alert("Make a valid bet loser");
                    return;
                }
                playerTurn = player2;
                numBets++;
                document.getElementById('betInput').value = ""
                document.getElementById('maxBet').innerText = `${player2score}`
            } else {
                if (player2bet > player2score || player2bet < 0) {
                    window.alert("Make a valid bet loser");
                    return;
                }
                playerTurn = player1;
                numBets++;
                document.getElementById('betInput').value = ""
                document.getElementById('maxBet').innerText = `${player1score}`
            }
            if (numBets >= 2) {
                phase = "guess";
                document.getElementById('answerInput').removeAttribute("disabled");
                document.getElementById('betInput').setAttribute("disabled", "disabled");
                document.getElementById('finalQuestion').innerText = "Where did Justin go on vacation for a week?"
                document.getElementById('betButton').innerText = "ANSWER";
                window.alert(`${playerTurn}, your guess please.`);
            } else {
                window.alert(`${playerTurn}'s turn to bet`);
            }
        } else {
            if (playerTurn == player1) {
                if (player1answer == finalanswer) {
                    player1score += player1bet;
                } else {
                    player1score -= player1bet;
                }
                playerTurn = player2;
                document.getElementById('betInput').value = "";
                document.getElementById('answerInput').value = "";
                numAnswers++;
            } else {
                if (player2answer == finalanswer) {
                    player2score += player2bet;
                } else {
                    player2score -= player2bet;
                }
                playerTurn = player1;
                document.getElementById('betInput').value = "";
                document.getElementById('answerInput').value = "";
                numAnswers++;
            }
            if (numAnswers >= 2) {
                if (player1score == player2score) {
                    window.alert('Aww man it was a tie!\n Good luck next time!')
                    window.alert('Thank you for playing my game!')
                    document.body.innerHTML = ''
                    return;
                } else if (player1score > player2score) {
                    winner = player1;
                } else if (player2score > player1score) {
                    winner = player2;
                }
                document.getElementById('finalQuestion').innerText = `ANSWER: ${finalanswer}`
                window.alert(`Congrats! ${winner} won the game!!!\nPlayer 1: ${player1score} | Player 2: ${player2score}`)
                window.alert(`Thank you for playing my game!`)
                document.body.innerHTML = ''
                return;
            } else {
                window.alert(`${playerTurn}, your guess please.`);
                document.getElementById('betInput').value = ""
                document.getElementById('answerInput').value = "";
            }
        }

    });
}