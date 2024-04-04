const Ship = require('./ship.js');
const getRandomInt = require('./helper.js');

class Board {
    constructor() {
        this.height = 10;
        this.ships = this.createShips();
        this.map = new Map();
        this.end = false;
    }

    createShips() {
        const carrier = new Ship("Carrier", 5);
        const battleship = new Ship("Battleship", 4);
        const destroyer = new Ship("Destroyer", 3);
        const submarine = new Ship("Submarine", 3);
        const patrolBoat = new Ship("Patrol Boat", 2);

        return [carrier, battleship, destroyer, submarine, patrolBoat];
    }

    setMap() {
        this.ships.forEach(ship => {
            const coordinates = this.getCoordinates(ship);
            ship.setCoordinates(coordinates);
            coordinates.forEach(coordinate => {
                this.map.set(`${coordinate[0]}${coordinate[1]}`, ship);
            })
        })
    }

    getCoordinates(ship) {
        const axis = ship.getAxis();
        const length = ship.getLength();
        let coordinates = null;

        while (!this.isValidCoordinates(coordinates)) {
            coordinates = this.generateCoordinates(axis, length);
        }
        
        return coordinates;
    }

    generateCoordinates(axis, length) {
        let x = getRandomInt(this.height);
        let y = getRandomInt(this.height);
        let head = [x, y];
        let coordinates = [head];

        if (axis === "x") {
            for (let i = 0; i < length - 1; i++) {
                x += 1;
                coordinates.push([x, y]);
            }
        } else {
            for (let i = 0; i < length - 1; i++) {
                y -= 1;
                coordinates.push([x, y]);
            }
        }

        return coordinates;
    }

    isValidCoordinates(coordinates) {
        if (coordinates === null) return false;

        let bool = [];

        coordinates.forEach(coordinate => {
            let x = coordinate[0];
            let y = coordinate[1];
            if (this.isOutOfBound(coordinate) || this.map.has(`${x}${y}`)) bool.push(false);
        })

        if (bool.includes(false)) return false;
        return true;
    }

    isOutOfBound([x, y]) {
        if (x > this.height - 1 || x < 0) return true;
        if (y > this.height - 1 || y < 0) return true;
        return false;
    }

    receiveAttack() {
        
    }
}

module.exports = Board;