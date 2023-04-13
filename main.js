const gameboard = (() => {

  let gameboard = ["", "", "", "", "", "", "", "", ""]; 

  const render = () => {
    let boardHtml ="";
    gameboard.forEach ((square, index) => {
      boardHtml += `<div class=square id=square-${index}>${square}</div>`
    }) 
    document.querySelector("#gameBoard").innerHTML = boardHtml;
  }

  return {
    render,
  }
})(); 

const createPlayer = (name, mark) => {
  return {
    name,
    mark,
  }
}

const game = (() => {
 let players = [];
 let currentPlayerIndex;
 let gameOver;

 const start = () => {
  players[
    createPlayer(document.querySelector("#player1"), "x"),
    createPlayer(document.querySelector("#player2"), "O")
  ]
  currentPlayerIndex = 0;
  gameOver = false;
  gameboard.render();
 }

 return {
  start,
 }
})()

let startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
  game.start ()
} )