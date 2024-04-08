const Ship = require('../src/module-back-end/ship.js');

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

test('changeAxis() OK', () => {
    ship.changeAxis();
    expect(ship.axis).toBe("y");
})

test('setCoordinates() OK', () => {
    ship.setCoordinates([[0,0], [0,5]]);
    expect(ship.coordinates).toEqual([[0,0], [0,5]]);
})

test('hit() & isSunk() OK', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
})