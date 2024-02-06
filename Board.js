const Player = require("./Player.js");
const Piece = require("./Piece.js");

class Board {
  constructor() {
    this.board = this.initBoard();
    this.players = this.createPlayers();
  }

  initBoard() {
    let board = new Array(8).fill(null).map(() => new Array(8).fill(null));
    return board;
  }

  printBoard() {
    console.log(this.board.map((row) => row.join(" ")).join("\n"));
  }

  createPlayers() {
    return [new Player("Joueur 1", true), new Player("Joueur 2", false)];
  }

  initBoardPieces() {
    const initPlacement = [
      ["T", "C", "F", "D", "R", "F", "C", "T"],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      Array(8).fill(" "),
      Array(8).fill(" "),
      Array(8).fill(" "),
      Array(8).fill(" "),
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      ["t", "c", "f", "d", "r", "f", "c", "t"],
    ];

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const piece = initPlacement[i][j];
        const isUpperCase =
          piece !== " " ? piece === piece.toUpperCase() : null;
        const position = [i, j];
        this.board[i][j] = new Piece(piece || " ", isUpperCase, position);
      }
    }

    this.printBoard();
    return this.board;
  }

  movePiece(piece, newPosition) {
	
    if(['p', 'P'].includes(piece.readableName) && !this.isMovePawnValid(piece, newPosition)) return;
    
    this.board[piece.position[0]][piece.position[1]] = " ";
    this.board[newPosition[0]][newPosition[1]] = piece;

    piece.position = newPosition;

    this.printBoard();
  }
	
	isMovePawnValid(piece, newPosition) {
		return(piece.position[0] + 1 === newPosition[0] && piece.position[1] === newPosition[1]);
	}
}

module.exports = Board;
