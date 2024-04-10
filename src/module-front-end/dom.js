import iconGitHub from '../icon/github-mark-white.png';

import { tab } from './tab';
import { boardDOM } from './board-dom';
import { blocker } from './blocker';
import { welcome } from './welcome';

const dom = (() => {
    const test = document.querySelector("#test");
    const end = document.querySelector("#main-end");
    const rematch = document.querySelector("#button-rematch");
    const mainMenu = document.querySelector("#button-main-menu");

    let mode = null;

    function init(n, ... players) {
        mode = n;
        _initImg();
        tab.init(... players);
        boardDOM.initBoard(mode, ... players);

        // Test
        test.onclick = () => {
            blocker.activateBlock("screen");
            end.classList.remove("hidden");
        }

        rematch.onclick = () => {
            _reset();
            welcome.rematch(mode);
        }

        mainMenu.onclick = () => {
            _reset();
            welcome.show();
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

    function _reset() {
        boardDOM.reset();
        blocker.reset();
        end.classList.add("hidden");
    }

    return { init, activatePlayer };
})()

export { dom };