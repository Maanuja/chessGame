const Board = require("../Board.js");

test("Check if board is 8x8", () => {
  const game = new Board();
  expect(game.board.length).toBe(8);
  expect(game.board.every(row => row.length === 8)).toBe(true);
});

