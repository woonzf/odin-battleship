const Board = require('../src/board.js');

const battleship = (() => {
    function run() {
        const board = new Board();
        board.setMap();
        console.log(board.map);
    }

    return { run };
})()

battleship.run();