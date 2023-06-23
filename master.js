/*
Tic Tac Toe Project in javascript.

2 player game

rule no 1 = Each player get one chance after the other.
rule no 2 = Each box can be used only once
rule no 3 =  winning Straigth line.
rule no 4 = specific winning combination.
rule no 5 = Just nine chance you attempt.
rule no 6 = first one that will acheive one of the winning combination will win.
winning comibination
123
456
789
258
369
159
357
147
x click x 
o click o 
check attempt 9
last attempt  x 
last attempt x and o
last attempt method
check winner method

Function:

1st: function to check for a or a draw.
2nd: Box click.
3rd: change player.
4rd: restart your game.
5th: who won first?.
6th: who lost game?.
7th: Each box has a single click function.
8th: x and o win so cross the line.

Property:

Count Property add


*/

const gameBoard = document.querySelector("#gameboard");
const info = document.querySelector("#info");

const startCell = [
    "", "", "", "", "", "", "", "", "",
]

let go = "circle"
info.textContent = "Circle Goes First"

function createBoard() {
    startCell.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index
        cellElement.addEventListener("click", boxClick)
        gameBoard.append(cellElement)
    })
}

createBoard();


function boxClick(e) {
    const boxDisplay = document.createElement("div")
    boxDisplay.classList.add(go)
    e.target.append(boxDisplay)
    go = go === "circle" ? "cross" : "circle"
    info.textContent = "it is now " + go + "'s go."
    e.target.removeEventListener("click", boxClick)
    checkScore()
}

function checkScore() {
    
    const allSquares = document.querySelectorAll(".square");
    //console.log(allSquares);
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6] 
    ] 


    winningCombos.forEach(array => {
        const circleWin = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("circle"))


        if (circleWin) {
            info.textContent = "Circle Win!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
            
        }
    })

    winningCombos.forEach(array => {
        const crossWin = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("cross"))


        if (crossWin) {
            info.textContent = "Cross Win!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }

    })
};











// class Tictactoe {
//     player = "x";
//     player2 = "o";
//     boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     wincombinations = [[1, 2, 3][4, 5, 6][7, 8, 9][2, 5, 8][3, 6, 9][1, 5, 9][3, 5, 7][1, 4, 7]];

//     playerX = [];
//     playerO = [];
//     attempt = 9;


// };



