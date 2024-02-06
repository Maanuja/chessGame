const Board = require("./Board.js");
const Player = require("./Player.js");

const game = new Board();

game.printBoard();
const gameWithPieces = game.initBoardPieces();

game.movePiece(gameWithPieces[1][0], [2, 0]);
