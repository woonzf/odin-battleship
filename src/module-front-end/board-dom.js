import { game } from "./game";

const boardDOM = (() => {
    const boardShip1 = document.querySelector("#board-ship-1");
    const boardShip2 = document.querySelector("#board-ship-2");
    const boardAttack1 = document.querySelector("#board-attack-1");
    const boardAttack2 = document.querySelector("#board-attack-2");
    const boardShipWrapper1 = document.querySelector("#board-ship-wrapper-1");
    const boardShipWrapper2 = document.querySelector("#board-ship-wrapper-2");
    const boardAttackWrapper1 = document.querySelector("#board-attack-wrapper-1");
    const boardAttackWrapper2 = document.querySelector("#board-attack-wrapper-2");

    const boardShipWrappers = [boardShipWrapper1, boardShipWrapper2];
    const boardAttackWrappers = [boardAttackWrapper1, boardAttackWrapper2];

    function initBoard(player1, player2) {
        _createBoardShip(player1, boardShip1);
        _createBoardShip(player2, boardShip2);
        _createBoardAttack(player1, boardAttack1, player2.board.mapShips, boardShip2);
        _createBoardAttack(player2, boardAttack2, player1.board.mapShips, boardShip1);
    }

    function activate(turn) {
        boardShipWrappers[turn].classList.remove("hidden");
        boardAttackWrappers[turn].classList.remove("hidden");
    }

    function deactivate(notTurn) {
        boardShipWrappers[notTurn].classList.add("hidden");
        boardAttackWrappers[notTurn].classList.add("hidden");
    }

    function simulateAIClick([x, y], turn) {
        const board = document.querySelector(`#board-attack-${turn + 1}`);
        _getBox(`${x}${y}`, board).click();
    }

    // Private functions
    function _createBoardShip(player, board) {
        const height = player.board.height;
        for (let i = 0; i < Math.pow(height, 2); i++) {
            const box = document.createElement("div");
            box.classList.add("box", "border-2", "flex", "justify-center", "items-center", "outline-offset-[-4.5px]");
            box.id = _assignBoxID(i, height);
            box.textContent = _assignShipText(box, player.board.mapShips);
            board.append(box);
        }
    }

    function _createBoardAttack(player, board, mapShipEnemy, boardShipEnemy) {
        const height = player.board.height;
        for (let i = 0; i < Math.pow(height, 2); i++) {
            const box = document.createElement("div");
            box.classList.add("box", "border-2", "flex", "justify-center", "items-center", "outline-offset-[-4px]", "hover:outline-dashed", "hover:outline-yellow-500");
            box.id = _assignBoxID(i, height);
            _addBoxListener(box, mapShipEnemy, boardShipEnemy);
            board.append(box);
        }
    }

    function _assignBoxID(i, height) {
        const x = i % height;
        const y = -(Math.floor(i / height) - (height - 1));
        return `${x}${y}`;
    }

    function _assignShipText(box, map) {
        const ship = map.get(box.id);
        if (!ship) return "";
        box.classList.add("bg-slate-400");
        return ship.name[0]; 
    }

    function _addBoxListener(box, mapShipEnemy, boardShipEnemy) {
        box.addEventListener("click", function() {
            box.classList.remove("hover:outline-dashed", "hover:outline-yellow-500");
            
            if (mapShipEnemy.has(box.id)) {
                _placeHitMark(box, 1);
                _placeHitMark(_getBox(box.id, boardShipEnemy), 0);
            } else {
                _placeMissMark(box, 1);
                _placeMissMark(_getBox(box.id, boardShipEnemy), 0);
            }

            setTimeout(() => {
                game.update(box.id);
            }, 1000);
        }, {once: true})
    }

    function _getBox(boxID, board) {
        return board.querySelector(`[id = "${boxID}"]`);
    }

    function _placeHitMark(box, n) {
        box.classList.add("outline", "outline-red-700", "text-red-700");
        if (n) {
            box.classList.add("text-2xl");
            box.textContent = "!";
        }
    }

    function _placeMissMark(box, n) {
        box.classList.add("outline", "outline-green-700", "text-green-700");
        if (n) {
            box.classList.add("text-2xl");
            box.textContent = "/";
        }
    }

    return { initBoard, activate, deactivate, simulateAIClick };
})()

export { boardDOM }