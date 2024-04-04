const Board = require('../src/board.js');
const Ship = require('../src/ship.js');

const board = new Board();
const ship = new Ship("Carrier", 5);
ship.axis = "x";

test('isValidCoordinates() OK', () => {
    expect(board.isValidCoordinates([[0, 0], [1, 1]])).toBe(true);
})

test('isOutOfBound() OK', () => {
    expect(board.isOutOfBound([-1, 0])).toBe(true);
})