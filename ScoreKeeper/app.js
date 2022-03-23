//BUTTONS DECLARATION

const playerOneButton = document.querySelector("#playerOne");
const playerTwoButton = document.querySelector("#playerTwo");
const resetButton = document.querySelector("#reset");
const randomServe = document.querySelector("#randomServe");

//NUMBERS DECLARATION

const numberOne = document.querySelector(".info #numberOne");
const numberTwo = document.querySelector(".info #numberTwo");
const whoServe = document.querySelector("#whoServe");

//INPUT DECLARATION

const input = document.querySelector(".info #options");

//LOGISTIC

let k = 0;
let j = 0;
let winningScore = parseInt(input.value);
let isGameOver = false;
let isGenerated = false;

playerOneButton.addEventListener("click", function (e) {
  if (!isGameOver && isGenerated === true) {
    k++;
    if (k === winningScore) {
      isGameOver = true;
      numberOne.style.color = "green";
      numberTwo.style.color = "red";
    }
    numberOne.innerHTML = `${k}`;
  } else if (!isGameOver && isGenerated === false) {
    whoServe.innerHTML = "Please generate a random serve!";
  } else {
    whoServe.innerHTML = "The game is over!";
  }
});

playerTwoButton.addEventListener("click", function (e) {
  if (!isGameOver && isGenerated === true) {
    j++;
    if (j === winningScore) {
      isGameOver = true;
      numberOne.style.color = "red";
      numberTwo.style.color = "green";
    }
    numberTwo.innerHTML = `${j}`;
  } else if (!isGameOver && isGenerated === false) {
    whoServe.innerHTML = "Please generate a random serve!";
  } else {
    whoServe.innerHTML = "The game is over!";
    isGenerated = false;
  }
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

function reset() {
  isGameOver = false;
  numberOne.innerHTML = "0";
  numberTwo.innerHTML = "0";
  numberOne.style.color = "black";
  numberTwo.style.color = "black";
  k = 0;
  j = 0;
  whoServe.innerHTML = "";
}
