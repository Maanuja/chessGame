class Piece {
  constructor(readableName, color, position) {
    this.readableName = readableName;
    this.color = color;
    this.position = position;
  }

  toString() {
    return this.readableName;
  }
}

module.exports = Piece;
