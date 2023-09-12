const newGame = document.querySelector(".pop-up-box_button");
const popUp = document.querySelector(".pop-up");
const popUpWinner = document.querySelector(".pop-up-box_text");
const boxes = document.querySelector(".boxes");
const showCurrentplayer = document.querySelector(".curent-player");

let winner = "";
let changePlayer = true;
let currentPlayer;
let appPlayer1 = 0;
let appPlayer2 = 0;
let bothTurns = [];
const player1turns = [];
const player2turns = [];
const sums = [6, 12, 15, 18, 24];
//allturns
const sumsturns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 2, 1],
  [6, 5, 4],
  [9, 8, 7],
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
  [1, 5, 6],
  [3, 5, 7],
  [9, 5, 1],
  [7, 5, 3],
  [1, 4, 5, 9],
  [3, 6, 5, 7],
  [1, 5, 9],
  [1, 2, 5, 8],
  [1, 4, 5, 6],
];

newGame.addEventListener("click", (event) => {
  location.reload();
});

boxes.addEventListener("click", (event) => {
  //add new turn
  if (!bothTurns.includes(event.target.id)) {
    //change players
    changePlayer = !changePlayer;
    bothTurns.push(event.target.id);

    //add X or O to box
    if (changePlayer) {
      currentPlayer = "Player 1";
      appPlayer1 = +appPlayer1 + +event.target.id;
      if (
        !player1turns.includes(event.target.id) ||
        !player2turns.includes(event.target.id)
      ) {
        player1turns.push(+event.target.id);
        const currentBox = document.getElementById(event.target.id);
        const para = document.createElement("p");
        const note = document.createTextNode("O");
        para.appendChild(note);
        currentBox.appendChild(para);
      }
    } else {
      currentPlayer = "Player 2";
      appPlayer2 = +appPlayer2 + +event.target.id;
      if (
        !player1turns.includes(event.target.id) ||
        !player2turns.includes(event.target.id)
      ) {
        player2turns.push(+event.target.id);
        const currentBox = document.getElementById(event.target.id);
        const para = document.createElement("p");
        const note = document.createTextNode("X");
        para.appendChild(note);
        currentBox.appendChild(para);
      }
    }
    console.log(bothTurns);
  }

  //check draw
  if (bothTurns.length === 9) {
    winner = "Draw";
    const para = document.createElement("p");
    const note = document.createTextNode("Draw!");
    para.appendChild(note);
    popUpWinner.appendChild(para);
    popUp.classList.toggle("hidden");
  }

  //check winners and show popo-up
  sumsturns.forEach((el) => {
    if (JSON.stringify(el) == JSON.stringify(player1turns)) {
      winner = "Player 1";
      const para = document.createElement("p");
      const note = document.createTextNode("Player 2 won!");
      para.appendChild(note);
      popUpWinner.appendChild(para);
      popUp.classList.toggle("hidden");
    } else if (JSON.stringify(el) == JSON.stringify(player2turns)) {
      winner = "Player 2";
      const para = document.createElement("p");
      const note = document.createTextNode("Player 1 won!");
      para.appendChild(note);
      popUpWinner.appendChild(para);
      popUp.classList.toggle("hidden");
    } else {
      showCurrentplayer.innerHTML = `${currentPlayer}, your turn!`;
    }
  });
});
