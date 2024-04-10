import iconGitHub from '../icon/github-mark-white.png';

import { tab } from './tab';
import { boardDOM } from './board-dom';
import { blocker } from './blocker';

const dom = (() => {
    function init(mode, ... players) {
        _initImg();
        tab.init(... players);
        boardDOM.initBoard(mode, ... players);

        const test = document.querySelector("#test");
        const end = document.querySelector("#main-end");
        test.onclick = () => {
            blocker.activateBlock("screen");
            end.classList.remove("hidden");
        }
    }

    function activatePlayer(turn, notTurn) {
        _deactivate(notTurn);
        _activate(turn);
    }

    // Private functions
    function _initImg() {
        const imgGitHub = document.querySelector("#icon-github");
        imgGitHub.src = iconGitHub;
    }

    function _activate(turn) {
        tab.activate(turn);
        boardDOM.activate(turn);
    }

    function _deactivate(notTurn) {
        tab.deactivate(notTurn);
        boardDOM.deactivate(notTurn);
    }

    return { init, activatePlayer };
})()

export { dom };