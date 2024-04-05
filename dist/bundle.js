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

    getShips() {
        return this.ships;
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
const Board = __webpack_require__(/*! ./board.js */ "./src/board.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVztBQUNoQyxxQkFBcUIsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYyxFQUFFLGNBQWM7QUFDekQsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJELEVBQUUsRUFBRSxFQUFFO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLEVBQUUsRUFBRSxFQUFFO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsRUFBRSxFQUFFLEVBQUU7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDSkEscUJBQXFCLG1CQUFPLENBQUMsb0NBQWE7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxjQUFjLG1CQUFPLENBQUMsa0NBQVk7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuY3JlYXRlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBTaGlwcyA9IHRoaXMuY3JlYXRlTWFwU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBBdHRhY2tzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGdldFNoaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcztcbiAgICB9XG5cbiAgICBjcmVhdGVTaGlwcygpIHtcbiAgICAgICAgY29uc3QgY2FycmllciA9IG5ldyBTaGlwKFwiQ2FycmllclwiLCA1KTtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKFwiQmF0dGxlc2hpcFwiLCA0KTtcbiAgICAgICAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoXCJEZXN0cm95ZXJcIiwgMyk7XG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKFwiU3VibWFyaW5lXCIsIDMpO1xuICAgICAgICBjb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoXCJQYXRyb2wgQm9hdFwiLCAyKTtcblxuICAgICAgICByZXR1cm4gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0XTtcbiAgICB9XG5cbiAgICBjcmVhdGVNYXBTaGlwcygpIHtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5nZXRDb29yZGluYXRlcyhzaGlwLCBtYXApO1xuICAgICAgICAgICAgc2hpcC5zZXRDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIG1hcC5zZXQoYCR7Y29vcmRpbmF0ZVswXX0ke2Nvb3JkaW5hdGVbMV19YCwgc2hpcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoc2hpcCwgbWFwKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzaGlwLmdldEF4aXMoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBtYXApKSB7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IHRoaXMuZ2VuZXJhdGVDb29yZGluYXRlcyhheGlzLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb29yZGluYXRlcyhheGlzLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IHggPSBnZXRSYW5kb21JbnQodGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IGdldFJhbmRvbUludCh0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCBoZWFkID0gW3gsIHldO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbaGVhZF07XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHggKz0gMTtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHkgLT0gMTtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgaXNWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBtYXApIHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IG1hcFNoaXBzID0gbnVsbDtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIG1hcFNoaXBzID0gbWFwO1xuICAgICAgICBlbHNlIG1hcFNoaXBzID0gdGhpcy5tYXBTaGlwcztcblxuICAgICAgICBsZXQgYm9vbCA9IFtdO1xuXG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0T2ZCb3VuZCh4LCB5KSB8fCBtYXBTaGlwcy5oYXMoYCR7eH0ke3l9YCkpIHtcbiAgICAgICAgICAgICAgICBib29sLnB1c2goZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChib29sLmluY2x1ZGVzKGZhbHNlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc091dE9mQm91bmQoeCwgeSkge1xuICAgICAgICBpZiAoeCA+IHRoaXMuaGVpZ2h0IC0gMSB8fCB4IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh5ID4gdGhpcy5oZWlnaHQgLSAxIHx8IHkgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzQXR0YWNrZWQoeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5tYXBBdHRhY2tzLmhhcyhgJHt4fSR7eX1gKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7eH0ke3l9YDtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMubWFwU2hpcHMuZ2V0KGtleSk7XG5cbiAgICAgICAgaWYgKEJvb2xlYW4oc2hpcCkpIHtcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLm1hcEF0dGFja3Muc2V0KGtleSwgMSk7XG4gICAgICAgIH0gZWxzZSB0aGlzLm1hcEF0dGFja3Muc2V0KGtleSwgMCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImZ1bmN0aW9uIGdldFJhbmRvbUludChuKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhbmRvbUludDsiLCJjb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5heGlzID0gdGhpcy5zZXRBeGlzKCk7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRBeGlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5heGlzO1xuICAgIH1cblxuICAgIHNldEF4aXMoKSB7XG4gICAgICAgIGNvbnN0IG4gPSBnZXRSYW5kb21JbnQoMik7XG4gICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gXCJ4XCI7XG4gICAgICAgIHJldHVybiBcInlcIjtcbiAgICB9XG5cbiAgICBjaGFuZ2VBeGlzKCkge1xuICAgICAgICBpZiAodGhpcy5heGlzID09PSBcInhcIikgdGhpcy5heGlzID0gXCJ5XCI7XG4gICAgICAgIGVsc2UgdGhpcy5heGlzID0gXCJ4XCI7XG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gMTtcbiAgICAgICAgaWYgKHRoaXMuaHAgPT09IDApIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5hbGl2ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgQm9hcmQgPSByZXF1aXJlKCcuL2JvYXJkLmpzJyk7XG5cbmNvbnN0IGJhdHRsZXNoaXAgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmQubWFwU2hpcHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJ1biB9O1xufSkoKVxuXG5iYXR0bGVzaGlwLnJ1bigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==