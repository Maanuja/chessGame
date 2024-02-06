const Board = require("../Board.js");

const game = new Board();

test("Piece's mouvment on [3,0]", () => {
  const boardWithPieces = game.initBoardPieces();

  const piece = boardWithPieces[1][0];
  const oldPosition = piece.position;
  const newPosition = [3, 0];

  game.movePiece(piece, newPosition);

  expect(game.board[newPosition[0]][newPosition[1]]).toBe(piece);
  expect(game.board[oldPosition[0]][oldPosition[1]]).toBe(" ");
});

test("Check pawn didn't move because mouvement unauthorized", () => {
  const boardWithPieces = game.initBoardPieces();
  
  const pawn = boardWithPieces[1][0];
  const oldPosition = pawn.position;
  const newPosition = [5, 1];

  game.movePiece(piece, newPosition);

  expect(game.board[newPosition[0]][newPosition[1]]).toBe(" ");
  expect(game.board[oldPosition[0]][oldPosition[1]]).toBe(piece);
});
