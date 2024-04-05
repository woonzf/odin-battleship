const Board = require('./board.js');
const getRandomInt = require('./helper.js');

class Player {
    constructor(name) {
        this.name = name;
        this.board = new Board();
        this.ships = this.board.getShips();
        this.life = this.ships.length;
    }

    getLife() {
        return this.life;
    }

    updateLife() {
        let life = 0;
        this.ships.forEach(ship => {
            if (!ship.isSunk()) life += 1;
        })
        this.life = life;
    }

    receiveAttack(x, y) {
        this.board.receiveAttack(x, y);
    }

    // AI
    giveAttack(map) {
        let attack = null;
        while (!this.isValidCoordinate(attack, map)) {
            attack = generateAttack();
        }
        return attack;
    }

    generateAttack() {
        let x = getRandomInt(this.height);
        let y = getRandomInt(this.height);
        return [x, y];
    }

    isValidCoordinate(coordinate, map) {
        if (coordinate === null) return false;
        if (map.has(`${coordinate[0]}${coordinate[1]}`)) return false;
        return true;
    }
}

module.exports = Player;