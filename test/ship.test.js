const Ship = require('../src/ship.js');

const ship = new Ship("Carrier", 5);
ship.axis = "x";

test('new Ship() OK', () => {
    expect(ship).toEqual({
                    name: "Carrier",
                    length: 5,
                    axis: "x",
                    coordinates: null,
                    hp: 5,
                    alive: true
                });
})

test('changeAxis() & getAxis() OK', () => {
    ship.changeAxis();
    expect(ship.getAxis()).toBe("y");
})

test('getLength() OK', () => {
    expect(ship.getLength()).toBe(5);
})

test('setCoordinates() & getCoordinates() OK', () => {
    ship.setCoordinates([[0,0], [0,5]]);
    expect(ship.getCoordinates()).toEqual([[0,0], [0,5]]);
})

test('hit() & isSunk() OK', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
})