import { game } from "./game";
import { blocker } from "./blocker";
import { log } from "./log";

const boardDOM = (() => {
  const boardShip1 = document.querySelector("#board-ship-1");
  const boardShip2 = document.querySelector("#board-ship-2");
  const boardAttack1 = document.querySelector("#board-attack-1");
  const boardAttack2 = document.querySelector("#board-attack-2");
  const boardWrapper1 = document.querySelector("#board-wrapper-1");
  const boardWrapper2 = document.querySelector("#board-wrapper-2");

  const boardShips = [boardShip1, boardShip2];
  const boardAttacks = [boardAttack1, boardAttack2];
  const boardWrappers = [boardWrapper1, boardWrapper2];

  function initBoardPre(player1, player2) {
    _createBoardShip(player1, boardShip1);
    _createBoardShip(player2, boardShip2);
  }

  function getNewBoard(player, n) {
    player.generateBoard();
    if (n === 1) {
      _resetBoard(boardShip1);
      _createBoardShip(player, boardShip1);
    } else if (n === 2) {
      _resetBoard(boardShip2);
      _createBoardShip(player, boardShip2);
    }
  }

  function initBoard(player1, player2) {
    _createBoardAttack(
      player1,
      boardAttack1,
      player2.board.mapShips,
      boardShip2,
    );
    _createBoardAttack(
      player2,
      boardAttack2,
      player1.board.mapShips,
      boardShip1,
    );
  }

  function activatePre() {
    boardShips.forEach((board) => {
      board.classList.add("hidden");
    });

    boardAttacks.forEach((board) => {
      board.classList.remove("hidden");
    });
  }

  function activate(turn) {
    boardWrappers[turn].classList.remove("hidden");
  }

  function deactivate(notTurn) {
    boardWrappers[notTurn].classList.add("hidden");
  }

  function viewShip(n) {
    boardShips[n].classList.remove("hidden");
    boardAttacks[n].classList.add("hidden");
  }

  function viewAttack(n) {
    boardShips[n].classList.add("hidden");
    boardAttacks[n].classList.remove("hidden");
  }

  function simulateAIClick([x, y], turn) {
    const board = document.querySelector(`#board-attack-${turn + 1}`);
    _getBox(`${x}${y}`, board).click();
  }

  function reset() {
    const boards = [...boardShips, ...boardAttacks];
    boards.forEach((board) => {
      _resetBoard(board);
    });

    boardAttacks.forEach((board) => {
      board.classList.add("hidden");
    });

    boardShips.forEach((board) => {
      board.classList.remove("hidden");
    });
  }

  // Private functions
  function _createBoardShip(player, board) {
    const height = player.board.height;
    for (let i = 0; i < Math.pow(height, 2); i++) {
      const box = document.createElement("div");
      box.classList.add(
        "border-2",
        "flex",
        "justify-center",
        "items-center",
        "outline-offset-[-4.5px]",
      );
      box.id = _assignBoxID(i, height);
      box.textContent = _assignShipText(box, player.board.mapShips);
      board.append(box);
    }
  }

  function _createBoardAttack(player, board, mapShipEnemy, boardShipEnemy) {
    const height = player.board.height;
    for (let i = 0; i < Math.pow(height, 2); i++) {
      const box = document.createElement("div");
      box.classList.add(
        "border-2",
        "flex",
        "justify-center",
        "items-center",
        "outline-offset-[-4px]",
        "hover:outline-dashed",
        "hover:outline-yellow-500",
      );
      box.id = _assignBoxID(i, height);
      _addBoxListener(box, player, mapShipEnemy, boardShipEnemy);
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
    box.classList.add("bg-slate-600");
    return ship.name[0];
  }

  function _addBoxListener(box, player, mapShipEnemy, boardShipEnemy) {
    const xy = box.id.split("");
    box.addEventListener(
      "click",
      function () {
        blocker.activate("board");
        log.message(
          `${player.name} launches a missile to [ ${xy[0]} , ${xy[1]} ]`,
          1,
        );

        box.classList.remove(
          "hover:outline-dashed",
          "hover:outline-yellow-500",
        );
        box.classList.add("outline-dashed", "outline-yellow-500");

        setTimeout(() => {
          const ship = mapShipEnemy.get(box.id);

          if (ship) {
            box.classList.remove("outline-dashed", "outline-yellow-500");
            _placeHitMark(box, 1);
            _placeHitMark(_getBox(box.id, boardShipEnemy), 0);
            log.message("H I T", 2);

            if (ship.hp === 1)
              log.message(`${player.name} sunk a ${ship.name}!`, 1);
          } else {
            box.classList.remove("outline-dashed", "outline-yellow-500");
            _placeMissMark(box, 1);
            _placeMissMark(_getBox(box.id, boardShipEnemy), 0);
            log.message("M I S S", 2);
          }

          game.update(box.id);
        }, 500);
      },
      { once: true },
    );
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

  function _resetBoard(board) {
    while (board.children.length > 0) board.removeChild(board.lastChild);
  }

  return {
    initBoardPre,
    getNewBoard,
    initBoard,
    activatePre,
    activate,
    deactivate,
    viewShip,
    viewAttack,
    simulateAIClick,
    reset,
  };
})();

export { boardDOM };
