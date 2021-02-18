//import { changeBackground } from "./TicTacToe.js";

//changeBackground();
console.log("V.1")

class myGame {
  constructor() {
    this.row1 = ["", "", ""];
    this.row2 = ["", "", ""];
    this.row3 = ["", "", ""];
    this.currentPlayer = "X";
    this.Winner = "";
    this.scoreX = 0;
    this.scoreO = 0;
  }

  isWinner() {
    if (
      this.row1[0] !== "" &&
      this.row1[0] === this.row1[1] &&
      this.row1[0] === this.row1[2]
    ) {
      this.Winner = this.row1[0];
      return true;
    } else if (
      this.row2[0] !== "" &&
      this.row2[0] === this.row2[1] &&
      this.row2[0] === this.row2[2]
    ) {
      this.Winner = this.row2[0];
      return true;
    } else if (
      this.row3[0] !== "" &&
      this.row3[0] === this.row3[1] &&
      this.row3[0] === this.row3[2]
    ) {
      this.Winner = this.row3[0];
      return true;
    } else if (
      this.row1[0] !== "" &&
      this.row1[0] === this.row2[0] &&
      this.row2[0] === this.row3[0]
    ) {
      this.Winner = this.row1[0];
      return true;
    } else if (
      this.row1[1] !== "" &&
      this.row1[1] === this.row2[1] &&
      this.row2[1] === this.row3[1]
    ) {
      this.Winner = this.row1[1];
      return true;
    } else if (
      this.row1[2] !== "" &&
      this.row1[2] === this.row2[2] &&
      this.row2[2] === this.row3[2]
    ) {
      this.Winner = this.row1[2];
      return true;
    } else if (
      this.row1[0] !== "" &&
      this.row1[0] === this.row2[1] &&
      this.row2[1] === this.row3[2]
    ) {
      this.Winner = this.row1[0];
      return true;
    } else if (
      this.row1[2] !== "" &&
      this.row1[2] === this.row2[1] &&
      this.row2[1] === this.row3[0]
    ) {
      this.Winner = this.row1[2];
      return true;
    } else {
      return false;
    }
  }
  currentPlayerTurn(btnId) {
    if (btnId === "btn1") {
      this.row1[0] = this.currentPlayer;
    } else if (btnId === "btn2") {
      this.row1[1] = this.currentPlayer;
    } else if (btnId === "btn3") {
      this.row1[2] = this.currentPlayer;
    } else if (btnId === "btn4") {
      this.row2[0] = this.currentPlayer;
    } else if (btnId === "btn5") {
      this.row2[1] = this.currentPlayer;
    } else if (btnId === "btn6") {
      this.row2[2] = this.currentPlayer;
    } else if (btnId === "btn7") {
      this.row3[0] = this.currentPlayer;
    } else if (btnId === "btn8") {
      this.row3[1] = this.currentPlayer;
    } else {
      this.row3[2] = this.currentPlayer;
    }
  }
  swapPlayer() {
    if (this.currentPlayer === "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  }
  isDraw() {
    //the draw is when the board is full but no winner
    //if the board is full but no winner then return true
    for (let i = 0; i < 3; i++) {
      if (this.row1[i] === "" || this.row2[i] === "" || this.row3[i] === "") {
        return false;
      }
    }
    if (this.isWinner === true) {
      return false;
    } else {
      console.log("draw");
      return true;
    }
  }
  keepScore() {
    if (this.Winner === "X") {
      this.scoreX += 1;
    } else if (this.Winner === "O") {
      this.scoreO += 1;
    }
  }
}

let TicTacToe = new myGame();

//function Play(button) {}

window.addEventListener("load", () => {
  const boardbuttons = document.getElementsByClassName("cell");
  const gamereset = document.getElementById("restart");
  const newGame = document.getElementById('newGame');
  const popup = document.getElementById("pop-up");
  const textarea = document.getElementById("text");
  display();
  Array.from(boardbuttons).forEach(function (button) {
    button.addEventListener("click", function () {
      if (
        button.classList.contains("X") ||
        button.classList.contains("O") ||
        TicTacToe.Winner !== ""
      ) {
        console.log("Not allowed to click");
      } else {
        //console.log(button.id);
        //console.log("Current Player before launching currentplayerTurn", TicTacToe.currentPlayer);
        TicTacToe.currentPlayerTurn(button.id);
        //console.log("Current Player after launching currentplayerTurn",TicTacToe.currentPlayer);
        button.classList.add(TicTacToe.currentPlayer); //if currentPlayer is "X" it adds calls "X" if not it add "O" = currentPlayer
        TicTacToe.swapPlayer();

        //console.log(TicTacToe.row1, TicTacToe.row2, TicTacToe.row3);

        if (TicTacToe.isWinner()) {
          TicTacToe.keepScore();
          // console.log(
          // "score x :",
          //TicTacToe.scoreX,
          //   ", score O:",
          // TicTacToe.scoreO
          //  );
          
          display();
          popup.classList.remove("hidden");
          textarea.innerText =`Player ${TicTacToe.Winner} Winner!`;
          //console.log(`Player ${TicTacToe.Winner} has won!`);
        } else if (TicTacToe.isDraw()) {
          popup.classList.remove("hidden");
          textarea.innerText =`XO Draw!`;
          //console.log("It is DrawXO.`");
        } else {
          console.log(`${TicTacToe.currentPlayer}'s turn!`);
        }
      }
    });
  });

  gamereset.addEventListener("click", function () {
    //when i click on restart I remove class X and O on each cells button of the board
    Array.from(boardbuttons).forEach(function (btn) {
      btn.classList.remove("X"), btn.classList.remove("O");
    });
    //remove the the winner and indexes(empty array) from the grid/game
    TicTacToe.Winner = "";
    TicTacToe.row1 = ["", "", ""];
    TicTacToe.row2 = ["", "", ""];
    TicTacToe.row3 = ["", "", ""];
    popup.classList.add("hidden");
  });
  newGame.addEventListener('click',function(){
    Array.from(boardbuttons).forEach(function (btn) {
      btn.classList.remove("X"), btn.classList.remove("O");
    });
    TicTacToe = new myGame();
    display();
    popup.classList.add("hidden");
  })
});


function display() {
  const scoredisplayX = document.querySelector(".scoretrackerX");
  const scoredisplayO = document.querySelector(".scoretrackerO");
  const playerTurn = document.querySelector(".playerturn");
  let tempX = `<p class="scoretrackerX"> X Player : ${TicTacToe.scoreX}</p>`;
  let tempO = `<p class="scoretrackerO"> O Player : ${TicTacToe.scoreO}</p>`;
  let tempTurn= `<p class="playerturn"> ${TicTacToe.currentPlayer}'s Turn!</p>`;

  scoredisplayX.innerHTML = tempX;
  scoredisplayO.innerHTML = tempO;
  playerTurn.innerHTML = tempTurn;
};

//function computerMove(){
//onst boardCells= document.querySelectorAll(".cell");
//}
//i need to have board cells
//i have to check if and which cells are empty(no mark x or o)
//when find an empty cell computer must mark the cell with the its mark sign O
//change player turn