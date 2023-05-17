const gameboard = (() => {

  let gameboard = ["", "", "", "", "", "", "", "", ""]; 

  const render = () => {
    let boardHtml ="";
    gameboard.forEach ((square, index) => {
      boardHtml += `<div class=square id=square-${index}>${square}</div>`
    }) 
    document.querySelector("#gameBoard").innerHTML = boardHtml;
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
      square.addEventListener("click", game.handleclick)
    })
  }

  const update = (index, value) => {
    gameboard[index] = value;
    render();
  }

  const getGameboard = () => gameboard;

  return {
    render,
    update,
    getGameboard
  }
})(); 

const createPlayer = (name, mark) => {
  return {
    name,
    mark
  }
}


const game = (() => {
 let players = [];
 let currentPlayerIndex;
 let gameOver;

 const start = () => {
    players = [
      createPlayer(document.querySelector("#player1").value, "x"),
      createPlayer(document.querySelector("#player2").value, "o")
    ]
    
    currentPlayerIndex = 0;
    gameOver = false;

    gameboard.render();

    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
      square.addEventListener("click", handleclick)
    })
 }

 const handleclick = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
    if (gameboard.getGameboard()[index] !== "")
      return;

    gameboard.update(index, players[currentPlayerIndex].mark);
    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;    
  }

  function restart() {
    for (let i = 0; i < 9; i++) {
      gameboard.update(i, "");
    }
    gameboard.render();
  }

 return {
  start, 
  restart,
  handleclick
 }
})()

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {
  game.restart();
})

let startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
  game.start ()
} )