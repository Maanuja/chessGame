const Board = require("../Board.js");

const {players} = new Board();

test("Check if we have 2 players", () => {
  expect(players.length).toBe(2);
});

test("Check if players are different", () => {  
	expect(players[0].uppercase).not.toBe(players[1].uppercase);
});