class Board {
  constructor() {
    this.board = this.initBoard();
  }

  initBoard() {
    let board = new Array(8).fill(null).map(() => new Array(8).fill(null));
    return board;
  }

  printBoard() {
    console.log(this.board.map((row) => row.join(" ")).join("\n"));
  }

}

module.exports = Board;
