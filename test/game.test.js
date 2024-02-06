const Board = require("../Board.js");

const game = new Board();

test("Pawn's mouvment on [3,0]", () => {
  const boardWithPieces = game.initBoardPieces();

  const pawn = boardWithPieces[1][0];
  const oldPosition = pawn.position;
  const newPosition = [3, 0];

  game.movePiece(pawn, newPosition);

  expect(game.board[newPosition[0]][newPosition[1]]).toBe(pawn);
  expect(game.board[oldPosition[0]][oldPosition[1]]).toBe(" ");
});

