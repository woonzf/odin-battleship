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
        board.setMap();
        console.log(board.map);
    }

    return { run };
})()

battleship.run();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVztBQUNoQyxxQkFBcUIsbUJBQU8sQ0FBQyxvQ0FBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjLEVBQUUsY0FBYztBQUM5RCxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLEVBQUUsRUFBRSxFQUFFO0FBQ3ZFLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDSkEscUJBQXFCLG1CQUFPLENBQUMsb0NBQWE7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxjQUFjLG1CQUFPLENBQUMsdUNBQWlCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuY3JlYXRlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW5kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY3JlYXRlU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcChcIkNhcnJpZXJcIiwgNSk7XG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcChcIkJhdHRsZXNoaXBcIiwgNCk7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKFwiRGVzdHJveWVyXCIsIDMpO1xuICAgICAgICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcChcIlN1Ym1hcmluZVwiLCAzKTtcbiAgICAgICAgY29uc3QgcGF0cm9sQm9hdCA9IG5ldyBTaGlwKFwiUGF0cm9sIEJvYXRcIiwgMik7XG5cbiAgICAgICAgcmV0dXJuIFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF07XG4gICAgfVxuXG4gICAgc2V0TWFwKCkge1xuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoc2hpcCk7XG4gICAgICAgICAgICBzaGlwLnNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuc2V0KGAke2Nvb3JkaW5hdGVbMF19JHtjb29yZGluYXRlWzFdfWAsIHNoaXApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcyhzaGlwKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzaGlwLmdldEF4aXMoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmdlbmVyYXRlQ29vcmRpbmF0ZXMoYXhpcywgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ29vcmRpbmF0ZXMoYXhpcywgbGVuZ3RoKSB7XG4gICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQodGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgaGVhZCA9IFt4LCB5XTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW2hlYWRdO1xuXG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ICs9IDE7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB5IC09IDE7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGlzVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgICAgICBpZiAoY29vcmRpbmF0ZXMgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgYm9vbCA9IFtdO1xuXG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBpZiAodGhpcy5pc091dE9mQm91bmQoY29vcmRpbmF0ZSkgfHwgdGhpcy5tYXAuaGFzKGAke3h9JHt5fWApKSBib29sLnB1c2goZmFsc2UpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChib29sLmluY2x1ZGVzKGZhbHNlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc091dE9mQm91bmQoW3gsIHldKSB7XG4gICAgICAgIGlmICh4ID4gdGhpcy5oZWlnaHQgLSAxIHx8IHggPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHkgPiB0aGlzLmhlaWdodCAtIDEgfHwgeSA8IDApIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjaygpIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImZ1bmN0aW9uIGdldFJhbmRvbUludChuKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhbmRvbUludDsiLCJjb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5heGlzID0gdGhpcy5zZXRBeGlzKCk7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRBeGlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5heGlzO1xuICAgIH1cblxuICAgIHNldEF4aXMoKSB7XG4gICAgICAgIGNvbnN0IG4gPSBnZXRSYW5kb21JbnQoMik7XG4gICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gXCJ4XCI7XG4gICAgICAgIHJldHVybiBcInlcIjtcbiAgICB9XG5cbiAgICBjaGFuZ2VBeGlzKCkge1xuICAgICAgICBpZiAodGhpcy5heGlzID09PSBcInhcIikgdGhpcy5heGlzID0gXCJ5XCI7XG4gICAgICAgIGVsc2UgdGhpcy5heGlzID0gXCJ4XCI7XG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gMTtcbiAgICAgICAgaWYgKHRoaXMuaHAgPT09IDApIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5hbGl2ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgQm9hcmQgPSByZXF1aXJlKCcuLi9zcmMvYm9hcmQuanMnKTtcblxuY29uc3QgYmF0dGxlc2hpcCA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gcnVuKCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgICAgICBib2FyZC5zZXRNYXAoKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmQubWFwKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBydW4gfTtcbn0pKClcblxuYmF0dGxlc2hpcC5ydW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=