/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
const getRandomInt = __webpack_require__(/*! ./helper.js */ "./src/helper.js");

class Board {
    constructor() {
        this.height = 10;
        this.ships = this.createShips();
        this.mapShips = this.createMapShips();
        this.mapAttacks = new Map();
    }

    createShips() {
        const carrier = new Ship("Carrier", 5);
        const battleship = new Ship("Battleship", 4);
        const destroyer = new Ship("Destroyer", 3);
        const submarine = new Ship("Submarine", 3);
        const patrolBoat = new Ship("Patrol Boat", 2);

        return [carrier, battleship, destroyer, submarine, patrolBoat];
    }

    createMapShips() {
        const map = new Map();

        this.ships.forEach(ship => {
            const coordinates = this.getCoordinates(ship, map);
            ship.setCoordinates(coordinates);
            coordinates.forEach(coordinate => {
                map.set(`${coordinate[0]}${coordinate[1]}`, ship);
            })
        })

        return map;
    }

    getCoordinates(ship, map) {
        let coordinates = null;

        while (!this.isValidCoordinates(coordinates, map)) {
            coordinates = this.generateCoordinates(ship.axis, ship.length);
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

    isValidCoordinates(coordinates, map) {
        if (coordinates === null) return false;

        let mapShips = null;
        if (arguments.length === 2) mapShips = map;
        else mapShips = this.mapShips;

        let bool = [];

        coordinates.forEach(coordinate => {
            let x = coordinate[0];
            let y = coordinate[1];

            if (this.isOutOfBound(x, y) || mapShips.has(`${x}${y}`)) {
                bool.push(false);
            }
        })

        if (bool.includes(false)) return false;
        return true;
    }

    isOutOfBound(x, y) {
        if (x > this.height - 1 || x < 0) return true;
        if (y > this.height - 1 || y < 0) return true;
        return false;
    }

    isAttacked(x, y) {
        if (this.mapAttacks.has(`${x}${y}`)) return true;
        return false;
    }

    receiveAttack(x, y) {
        const key = `${x}${y}`;
        const ship = this.mapShips.get(key);

        if (Boolean(ship)) {
            ship.hit();
            this.mapAttacks.set(key, 1);
        } else this.mapAttacks.set(key, 0);
    }
}

module.exports = Board;

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((module) => {

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

module.exports = getRandomInt;

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Board = __webpack_require__(/*! ./board.js */ "./src/board.js");
const getRandomInt = __webpack_require__(/*! ./helper.js */ "./src/helper.js");

class Player {
    constructor(name) {
        this.name = name;
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

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getRandomInt = __webpack_require__(/*! ./helper.js */ "./src/helper.js");

class Ship {
    constructor(name, length) {
        this.name = name;
        this.axis = this.setAxis();
        this.length = length;
        this.coordinates = null;
        this.hp = this.length;
        this.alive = true;
    }

    setAxis() {
        const n = getRandomInt(2);
        if (n === 0) return "x";
        return "y";
    }

    changeAxis() {
        if (this.axis === "x") this.axis = "y";
        else this.axis = "x";
    }

    setCoordinates(coordinates) {
        this.coordinates = coordinates;
    }

    hit() {
        this.hp -= 1;
        if (this.hp === 0) this.alive = false;
    }

    isSunk() {
        return !this.alive;
    }
}

module.exports = Ship;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const Player = __webpack_require__(/*! ./player.js */ "./src/player.js");

const battleship = (() => {
    let name = null;
    let player1 = null;
    let player2 = null;
    let turn = null;
    let notTurn = null;

    function run() {
        name = "Player 1";
        player1 = new Player(name);
        player2 = new Player("Player 2");
        turn = player1;
        notTurn = player2;

        // Game loop
        while (1) {
            // AI vs AI
            const map = notTurn.board.mapAttacks;
            const attack = turn.giveAttack(map);
            notTurn.receiveAttack(attack);

            console.log(`${player1.name}: ${player1.life}, ${player2.name}: ${player2.life}`)
            
            if (isGame()) break;
            updateTurn();
        }

        console.log(`${turn.name} wins!`)
    }

    function isGame() {
        if (!Boolean(player1.life)) return true;
        if (!Boolean(player2.life)) return true;
        return false;
    }

    function updateTurn() {
        const temp = turn;
        turn = notTurn;
        notTurn = temp;
    }

    return { run };
})()

battleship.run();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVztBQUNoQyxxQkFBcUIsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjLEVBQUUsY0FBYztBQUN6RCxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJEQUEyRCxFQUFFLEVBQUUsRUFBRTtBQUNqRTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxFQUFFLEVBQUUsRUFBRTtBQUN6QztBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLEVBQUUsRUFBRSxFQUFFO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ0pBLGNBQWMsbUJBQU8sQ0FBQyxrQ0FBWTtBQUNsQyxxQkFBcUIsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWMsRUFBRSxjQUFjO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DQSxxQkFBcUIsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLGVBQWUsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGFBQWEsSUFBSSxhQUFhLElBQUksYUFBYSxJQUFJLGFBQWE7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLFdBQVc7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuY3JlYXRlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBTaGlwcyA9IHRoaXMuY3JlYXRlTWFwU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBBdHRhY2tzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNoaXBzKCkge1xuICAgICAgICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoXCJDYXJyaWVyXCIsIDUpO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwXCIsIDQpO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcChcIkRlc3Ryb3llclwiLCAzKTtcbiAgICAgICAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoXCJTdWJtYXJpbmVcIiwgMyk7XG4gICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0XCIsIDIpO1xuXG4gICAgICAgIHJldHVybiBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgIH1cblxuICAgIGNyZWF0ZU1hcFNoaXBzKCkge1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLmdldENvb3JkaW5hdGVzKHNoaXAsIG1hcCk7XG4gICAgICAgICAgICBzaGlwLnNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwLnNldChgJHtjb29yZGluYXRlWzBdfSR7Y29vcmRpbmF0ZVsxXX1gLCBzaGlwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcyhzaGlwLCBtYXApIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBtYXApKSB7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IHRoaXMuZ2VuZXJhdGVDb29yZGluYXRlcyhzaGlwLmF4aXMsIHNoaXAubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ29vcmRpbmF0ZXMoYXhpcywgbGVuZ3RoKSB7XG4gICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQodGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgaGVhZCA9IFt4LCB5XTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW2hlYWRdO1xuXG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ICs9IDE7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB5IC09IDE7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGlzVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcywgbWFwKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlcyA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGxldCBtYXBTaGlwcyA9IG51bGw7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSBtYXBTaGlwcyA9IG1hcDtcbiAgICAgICAgZWxzZSBtYXBTaGlwcyA9IHRoaXMubWFwU2hpcHM7XG5cbiAgICAgICAgbGV0IGJvb2wgPSBbXTtcblxuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlWzFdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dE9mQm91bmQoeCwgeSkgfHwgbWFwU2hpcHMuaGFzKGAke3h9JHt5fWApKSB7XG4gICAgICAgICAgICAgICAgYm9vbC5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYm9vbC5pbmNsdWRlcyhmYWxzZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaXNPdXRPZkJvdW5kKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPiB0aGlzLmhlaWdodCAtIDEgfHwgeCA8IDApIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoeSA+IHRoaXMuaGVpZ2h0IC0gMSB8fCB5IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0F0dGFja2VkKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwQXR0YWNrcy5oYXMoYCR7eH0ke3l9YCkpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3h9JHt5fWA7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLm1hcFNoaXBzLmdldChrZXkpO1xuXG4gICAgICAgIGlmIChCb29sZWFuKHNoaXApKSB7XG4gICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5tYXBBdHRhY2tzLnNldChrZXksIDEpO1xuICAgICAgICB9IGVsc2UgdGhpcy5tYXBBdHRhY2tzLnNldChrZXksIDApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJmdW5jdGlvbiBnZXRSYW5kb21JbnQobikge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYW5kb21JbnQ7IiwiY29uc3QgQm9hcmQgPSByZXF1aXJlKCcuL2JvYXJkLmpzJyk7XG5jb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy5ib2FyZC5zaGlwcztcbiAgICAgICAgdGhpcy5saWZlID0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgdXBkYXRlTGlmZSgpIHtcbiAgICAgICAgbGV0IGxpZmUgPSAwO1xuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIGxpZmUgKz0gMTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5saWZlID0gbGlmZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKFt4LCB5XSkge1xuICAgICAgICB0aGlzLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIHRoaXMudXBkYXRlTGlmZSgpO1xuICAgIH1cblxuICAgIC8vIEFJXG4gICAgZ2l2ZUF0dGFjayhtYXApIHtcbiAgICAgICAgbGV0IGF0dGFjayA9IG51bGw7XG4gICAgICAgIHdoaWxlICghdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShhdHRhY2ssIG1hcCkpIHtcbiAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuZ2VuZXJhdGVBdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXR0YWNrO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQXR0YWNrKCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmJvYXJkLmhlaWdodDtcbiAgICAgICAgbGV0IHggPSBnZXRSYW5kb21JbnQoaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQoaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkQ29vcmRpbmF0ZShjb29yZGluYXRlLCBtYXApIHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG1hcC5oYXMoYCR7Y29vcmRpbmF0ZVswXX0ke2Nvb3JkaW5hdGVbMV19YCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCJjb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5heGlzID0gdGhpcy5zZXRBeGlzKCk7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRBeGlzKCkge1xuICAgICAgICBjb25zdCBuID0gZ2V0UmFuZG9tSW50KDIpO1xuICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIFwieFwiO1xuICAgICAgICByZXR1cm4gXCJ5XCI7XG4gICAgfVxuXG4gICAgY2hhbmdlQXhpcygpIHtcbiAgICAgICAgaWYgKHRoaXMuYXhpcyA9PT0gXCJ4XCIpIHRoaXMuYXhpcyA9IFwieVwiO1xuICAgICAgICBlbHNlIHRoaXMuYXhpcyA9IFwieFwiO1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gMTtcbiAgICAgICAgaWYgKHRoaXMuaHAgPT09IDApIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5hbGl2ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXIuanMnKTtcblxuY29uc3QgYmF0dGxlc2hpcCA9ICgoKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBudWxsO1xuICAgIGxldCBwbGF5ZXIxID0gbnVsbDtcbiAgICBsZXQgcGxheWVyMiA9IG51bGw7XG4gICAgbGV0IHR1cm4gPSBudWxsO1xuICAgIGxldCBub3RUdXJuID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgICAgbmFtZSA9IFwiUGxheWVyIDFcIjtcbiAgICAgICAgcGxheWVyMSA9IG5ldyBQbGF5ZXIobmFtZSk7XG4gICAgICAgIHBsYXllcjIgPSBuZXcgUGxheWVyKFwiUGxheWVyIDJcIik7XG4gICAgICAgIHR1cm4gPSBwbGF5ZXIxO1xuICAgICAgICBub3RUdXJuID0gcGxheWVyMjtcblxuICAgICAgICAvLyBHYW1lIGxvb3BcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIC8vIEFJIHZzIEFJXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBub3RUdXJuLmJvYXJkLm1hcEF0dGFja3M7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB0dXJuLmdpdmVBdHRhY2sobWFwKTtcbiAgICAgICAgICAgIG5vdFR1cm4ucmVjZWl2ZUF0dGFjayhhdHRhY2spO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIxLm5hbWV9OiAke3BsYXllcjEubGlmZX0sICR7cGxheWVyMi5uYW1lfTogJHtwbGF5ZXIyLmxpZmV9YClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGlzR2FtZSgpKSBicmVhaztcbiAgICAgICAgICAgIHVwZGF0ZVR1cm4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3R1cm4ubmFtZX0gd2lucyFgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzR2FtZSgpIHtcbiAgICAgICAgaWYgKCFCb29sZWFuKHBsYXllcjEubGlmZSkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIUJvb2xlYW4ocGxheWVyMi5saWZlKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUdXJuKCkge1xuICAgICAgICBjb25zdCB0ZW1wID0gdHVybjtcbiAgICAgICAgdHVybiA9IG5vdFR1cm47XG4gICAgICAgIG5vdFR1cm4gPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJ1biB9O1xufSkoKVxuXG5iYXR0bGVzaGlwLnJ1bigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==