import iconGitHub from '../icon/github-mark-white.png';

import { tab } from './tab';
import { boardDOM } from './board-dom';
import { blocker } from './blocker';
import { welcome } from './welcome';
import { log } from './log';

const dom = (() => {
    const end = document.querySelector("#main-end");
    const winner = document.querySelector("#winner");
    const rematch = document.querySelector("#button-rematch");
    const mainMenu = document.querySelector("#button-main-menu");
    const view1 = document.querySelector("#view-1");
    const view2 = document.querySelector("#view-2");

    const views = [view1, view2];
    let mode = null;

    function init(n, ... players) {
        mode = n;
        _initImg();
        tab.init(... players);
        boardDOM.initBoard(mode, ... players);

        rematch.onclick = () => {
            _reset();
            welcome.rematch(mode);
        }

        mainMenu.onclick = () => {
            _reset();
            welcome.hide("main");
            welcome.show("welcome");
        }

        view1.onmousedown = () => {
            boardDOM.viewShip(0);
        }

        view1.onmouseup = () => {
            boardDOM.viewAttack(0);
        }

        view2.onmousedown = () => {
            boardDOM.viewShip(1);
        }

        view2.onmouseup = () => {
            boardDOM.viewAttack(1);
        }
    }

    function activatePlayer(turn, notTurn) {
        _deactivate(notTurn);
        _activate(turn);
    }

    function endGame(name) {
        blocker.deactivateBlock("board");
        blocker.activateBlock("screen");
        winner.textContent = `${name} wins!`;
        end.classList.remove("hidden");
    }

    // Private functions
    function _initImg() {
        const imgGitHub = document.querySelector("#icon-github");
        imgGitHub.src = iconGitHub;
    }

    function _activate(turn) {
        tab.activate(turn);
        boardDOM.activate(turn);
        views[turn].classList.remove("hidden");
    }

    function _deactivate(notTurn) {
        tab.deactivate(notTurn);
        boardDOM.deactivate(notTurn);
        views[notTurn].classList.add("hidden");
    }

    function _reset() {
        boardDOM.reset();
        log.reset();
        blocker.reset();
        end.classList.add("hidden");
    }

    return { init, activatePlayer, endGame };
})()

export { dom };