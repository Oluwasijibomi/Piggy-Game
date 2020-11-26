/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, roundScore, activePlayer, dice, gamePlaying;

init();


function btn() {

    if (gamePlaying) {
        dice = Math.floor(Math.random() * 6) + 1;
        let diceDom = document.querySelector(".dice");
        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice + ".png";

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

}

document.querySelector(".btn-roll").addEventListener("click", btn);
    

function btnHold() {

    if (gamePlaying) {
            scores[activePlayer] += roundScore;
            document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
            let input = document.querySelector(".final-score").value;

        if (scores[activePlayer] >= input) {
            document.querySelector("#name-" + activePlayer).textContent = "winner";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active")
            gamePlaying = false;
        } else {
            nextPlayer()
        }
    }


    
   

}

document.querySelector(".btn-hold").addEventListener("click", btnHold)


function nextPlayer () {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    let diceDom = document.querySelector(".dice");
    diceDom.style.display = "none"; 
}


function btnNew() {
    init()
};


document.querySelector(".btn-new").addEventListener("click", btnNew)


function init() {
    scores = [0, 0];
// RoundScore also appears once at any given moment in time, it can change its value but it can never be 2
// RounbdScore appears only based on the value of the  active player
    roundScore = 0;
//Variable to keep track of active player so it has to be one variable at a any particular point ion time 
    activePlayer = 0;

    document.querySelector(".dice").style.display = "none";
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
    gamePlaying = true;
}