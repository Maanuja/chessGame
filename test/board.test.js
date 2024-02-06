const Board = require("../Board.js");

const game = new Board();

test("Check if board contains 64 pieces", () => {
  const pieces = game.initBoardPieces();
  expect(pieces.flat().filter((piece) => piece !== null).length).toBe(64);
});

test("Pieces are initialized correctly based on initPlacement", () => {
  const initGame = game.initBoardPieces();

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
      const boardPiece = initGame[i][j];
      const initPiece = initPlacement[i][j];
      expect(boardPiece.readableName).toBe(initPiece);
      if (initPiece === " ") {
        expect(boardPiece.isUppercase).toBeNull();
      } else {
        expect(boardPiece.isUppercase).toBe(
          initPiece === initPiece.toUpperCase()
        );
      }
    }
  }
});
