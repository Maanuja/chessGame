class Piece {
  constructor(readableName, isUppercase, position) {
    this.readableName = readableName;
    this.isUppercase = isUppercase;
    this.position = position;
  }

  toString() {
    return this.readableName;
  }
}

module.exports = Piece;
