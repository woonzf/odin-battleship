import iconGitHub from '../icon/github-mark-white.png';

const dom = (() => {
    const tab1 = document.querySelector("#tab-1");
    const tab2 = document.querySelector("#tab-2");
    const board1 = document.querySelector("#board-attack-1");
    const board2 = document.querySelector("#board-attack-2");
    const boardWrapper1 = document.querySelector("#board-wrapper-1");
    const boardWrapper2 = document.querySelector("#board-wrapper-2");

    function init() {
        _initImg();
        _addTabListener();
    }

    function initBoard(player1, player2) {
        _createBoard(player1, board1);
        _createBoard(player2, board2);
    }

    function addBoardListener() {
        _addBoxListener(board1);
        _addBoxListener(board2);
    }

    function _initImg() {
        const imgGitHub = document.querySelector("#icon-github");
        imgGitHub.src = iconGitHub;
    }

    function _addTabListener() {
        tab1.onclick = function() {
            _deactivateTab(tab2, boardWrapper2);
            _activateTab(tab1, boardWrapper1);
        }

        tab2.onclick = function() {
            _deactivateTab(tab1, boardWrapper1);
            _activateTab(tab2, boardWrapper2);
        }
    }

    function _activateTab(tab, boardWrapper) {
        tab.classList.remove("mb-2", "bg-slate-400");
        tab.classList.add("bg-slate-200");
        boardWrapper.classList.remove("hidden");
    }

    function _deactivateTab(tab, boardWrapper) {
        tab.classList.remove("bg-slate-200");
        tab.classList.add("mb-2", "bg-slate-400");
        boardWrapper.classList.add("hidden");
    }

    function _createBoard(player, board) {
        const height = player.board.height;
        for (let i = 0; i < Math.pow(height, 2); i++) {
            const box = document.createElement("div");
            box.classList.add("box", "border-2", "flex", "justify-center", "items-center");
            box.id = _assignBoxID(i, height);
            box.textContent = _assignShipText(box, player.board.mapShips);
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

    function _addBoxListener(board) {
        const boxes = board.querySelectorAll(".box");
        boxes.forEach(box => {
            box.addEventListener("click", function() {
                box.classList.add("outline", "outline-offset-[-4px]", "outline-red-700", "text-2xl", "text-red-700");
                box.textContent = "!";
            }, {once: true})
        });
    }

    return { init, initBoard, addBoardListener };
})()

export { dom };