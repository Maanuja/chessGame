const Player = require("./Player.js");

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
}

module.exports = Board;
