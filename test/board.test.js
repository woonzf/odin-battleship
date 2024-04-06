const Board = require('../src/game-logic/board.js');

const board = new Board();

test('isValidCoordinates() OK', () => {
    board.mapShips = new Map();
    expect(board.isValidCoordinates([[0, 0], [1, 1]])).toBe(true);
})

test('isOutOfBound() OK', () => {
    expect(board.isOutOfBound(-1, 0)).toBe(true);
})

test('receiveAttack() OK', () => {
    board.receiveAttack(0, 0)
    expect(board.mapAttacks.get("00")).toBe(0);
})