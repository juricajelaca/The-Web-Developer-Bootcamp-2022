const p1 = {
  score: 0,
  button: document.querySelector("#playerOne"),
  display: document.querySelector(".info #numberOne"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#playerTwo"),
  display: document.querySelector(".info #numberTwo"),
};

//BUTTONS DECLARATION

const resetButton = document.querySelector("#reset");
const randomServe = document.querySelector("#randomServe");

//NUMBERS DECLARATION

const whoServe = document.querySelector("#whoServe");

//INPUT DECLARATION

const input = document.querySelector(".info #options");

//LOGISTIC

let winningScore = parseInt(input.value);
let isGameOver = false;
let isGenerated = false;

function updateScores(player, opponent) {
  if (!isGameOver && isGenerated === true) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.style.color = "green";
      opponent.display.style.color = "red";
    }
    player.display.innerHTML = `${player.score}`;
  } else if (!isGameOver && isGenerated === false) {
    whoServe.innerHTML = "Please generate a random serve!";
  } else {
    whoServe.innerHTML = "The game is over!";
  }
}

p1.button.addEventListener("click", function (e) {
  updateScores(p1, p2);
  winBy2(p1, p2);
});

p2.button.addEventListener("click", function (e) {
  updateScores(p2, p1);
  winBy2(p1, p2);
});

input.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

randomServe.addEventListener("click", function () {
  let num = Math.floor(Math.random() * 2);
  if (numberOne.innerHTML === "0" && numberTwo.innerHTML === "0") {
    if (num === 1) {
      whoServe.innerHTML = "Player 1 is serving first";
    } else {
      whoServe.innerHTML = "Player 2 is serving first";
    }
  }
  isGenerated = true;
});

function winBy2(player, opponent) {
  if (player.score === opponent.score && player.score === winningScore - 1) {
    winningScore++;
  }
}

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.display.innerHTML = "0";
    p.display.style.color = "black";
    p.score = 0;
  }
  whoServe.innerHTML = "";
  isGenerated = false;
  winningScore = parseInt(input.value);
}
