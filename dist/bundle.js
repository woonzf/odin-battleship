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
        const axis = ship.getAxis();
        const length = ship.getLength();
        let coordinates = null;

        while (!this.isValidCoordinates(coordinates, map)) {
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

    getAxis() {
        return this.axis;
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

    getLength() {
        return this.length;
    }

    getCoordinates() {
        return this.coordinates;
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
const Board = __webpack_require__(/*! ../src/board.js */ "./src/board.js");

const battleship = (() => {
    function run() {
        const board = new Board();
        console.log(board.mapShips);
    }

    return { run };
})()

battleship.run();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVztBQUNoQyxxQkFBcUIsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjLEVBQUUsY0FBYztBQUN6RCxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyREFBMkQsRUFBRSxFQUFFLEVBQUU7QUFDakU7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsRUFBRSxFQUFFLEVBQUU7QUFDekM7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixFQUFFLEVBQUUsRUFBRTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNKQSxxQkFBcUIsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNqREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLGNBQWMsbUJBQU8sQ0FBQyx1Q0FBaUI7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuY3JlYXRlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBTaGlwcyA9IHRoaXMuY3JlYXRlTWFwU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBBdHRhY2tzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNoaXBzKCkge1xuICAgICAgICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoXCJDYXJyaWVyXCIsIDUpO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwXCIsIDQpO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcChcIkRlc3Ryb3llclwiLCAzKTtcbiAgICAgICAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoXCJTdWJtYXJpbmVcIiwgMyk7XG4gICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0XCIsIDIpO1xuXG4gICAgICAgIHJldHVybiBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgIH1cblxuICAgIGNyZWF0ZU1hcFNoaXBzKCkge1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLmdldENvb3JkaW5hdGVzKHNoaXAsIG1hcCk7XG4gICAgICAgICAgICBzaGlwLnNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwLnNldChgJHtjb29yZGluYXRlWzBdfSR7Y29vcmRpbmF0ZVsxXX1gLCBzaGlwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcyhzaGlwLCBtYXApIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHNoaXAuZ2V0QXhpcygpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldExlbmd0aCgpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBudWxsO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIG1hcCkpIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5nZW5lcmF0ZUNvb3JkaW5hdGVzKGF4aXMsIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvb3JkaW5hdGVzKGF4aXMsIGxlbmd0aCkge1xuICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCh0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IGhlYWQgPSBbeCwgeV07XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtoZWFkXTtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeCArPSAxO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeSAtPSAxO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBpc1ZhbGlkQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIG1hcCkge1xuICAgICAgICBpZiAoY29vcmRpbmF0ZXMgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgbWFwU2hpcHMgPSBudWxsO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgbWFwU2hpcHMgPSBtYXA7XG4gICAgICAgIGVsc2UgbWFwU2hpcHMgPSB0aGlzLm1hcFNoaXBzO1xuXG4gICAgICAgIGxldCBib29sID0gW107XG5cbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZVsxXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRPZkJvdW5kKHgsIHkpIHx8IG1hcFNoaXBzLmhhcyhgJHt4fSR7eX1gKSkge1xuICAgICAgICAgICAgICAgIGJvb2wucHVzaChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGJvb2wuaW5jbHVkZXMoZmFsc2UpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlzT3V0T2ZCb3VuZCh4LCB5KSB7XG4gICAgICAgIGlmICh4ID4gdGhpcy5oZWlnaHQgLSAxIHx8IHggPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHkgPiB0aGlzLmhlaWdodCAtIDEgfHwgeSA8IDApIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNBdHRhY2tlZCh4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLm1hcEF0dGFja3MuaGFzKGAke3h9JHt5fWApKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHt4fSR7eX1gO1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5tYXBTaGlwcy5nZXQoa2V5KTtcblxuICAgICAgICBpZiAoQm9vbGVhbihzaGlwKSkge1xuICAgICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMubWFwQXR0YWNrcy5zZXQoa2V5LCAxKTtcbiAgICAgICAgfSBlbHNlIHRoaXMubWFwQXR0YWNrcy5zZXQoa2V5LCAwKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmFuZG9tSW50OyIsImNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF4aXMgPSB0aGlzLnNldEF4aXMoKTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhwID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldEF4aXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF4aXM7XG4gICAgfVxuXG4gICAgc2V0QXhpcygpIHtcbiAgICAgICAgY29uc3QgbiA9IGdldFJhbmRvbUludCgyKTtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBcInhcIjtcbiAgICAgICAgcmV0dXJuIFwieVwiO1xuICAgIH1cblxuICAgIGNoYW5nZUF4aXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmF4aXMgPT09IFwieFwiKSB0aGlzLmF4aXMgPSBcInlcIjtcbiAgICAgICAgZWxzZSB0aGlzLmF4aXMgPSBcInhcIjtcbiAgICB9XG5cbiAgICBnZXRMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5ocCAtPSAxO1xuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCkgdGhpcy5hbGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmFsaXZlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCBCb2FyZCA9IHJlcXVpcmUoJy4uL3NyYy9ib2FyZC5qcycpO1xuXG5jb25zdCBiYXR0bGVzaGlwID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBydW4oKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkLm1hcFNoaXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBydW4gfTtcbn0pKClcblxuYmF0dGxlc2hpcC5ydW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=