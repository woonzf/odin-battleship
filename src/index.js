const Board = require('./board.js');

const battleship = (() => {
    function run() {
        const board = new Board();
        console.log(board.mapShips);
    }

    return { run };
})()

battleship.run();