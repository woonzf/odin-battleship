import iconGitHub from '../icon/github-mark-white.png';

import { tab } from './tab.js';
import { boardDOM } from './board-dom.js';

const dom = (() => {
    function init(... players) {
        _initImg();
        tab.init(... players);
        boardDOM.initBoard(... players);
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