const Board = require("./Board.js");
const Player = require("./Player.js");

const game = new Board();

game.printBoard();
const gameWithPieces = game.initBoardPieces();

console.log(gameWithPieces, "gameWithPieces");
console.log(gameWithPieces[1][0]);

game.movePiece(gameWithPieces[1][0], [3, 0]);
