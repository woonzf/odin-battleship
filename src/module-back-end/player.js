const Board = require('./board.js');
const getRandomInt = require('./helper.js');

class Player {
    constructor(name) {
        this.name = name;
        this.board = new Board();
        this.ships = this.board.ships;
        this.life = this.ships.length;
    }

    generateBoard() {
        this.board = new Board();
        this.ships = this.board.ships;
        this.life = this.ships.length;
    }

    updateLife() {
        let life = 0;
        this.ships.forEach(ship => {
            if (!ship.isSunk()) life += 1;
        })
        this.life = life;
    }

    receiveAttack([x, y]) {
        this.board.receiveAttack(x, y);
        this.updateLife();
    }

    // AI
    giveAttack(map) {
        let attack = null;
        while (!this.isValidCoordinate(attack, map)) {
            attack = this.generateAttack();
        }
        return attack;
    }

    generateAttack() {
        const height = this.board.height;
        let x = getRandomInt(height);
        let y = getRandomInt(height);
        return [x, y];
    }

    isValidCoordinate(coordinate, map) {
        if (coordinate === null) return false;
        if (map.has(`${coordinate[0]}${coordinate[1]}`)) return false;
        return true;
    }
}

module.exports = Player;