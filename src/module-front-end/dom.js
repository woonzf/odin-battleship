import iconGitHub from '../icon/github-mark-white.png';
import iconLoading from '../icon/loading-custom.png';

import { tab } from './tab';
import { boardDOM } from './board-dom';
import { blocker } from './blocker';
import { welcome } from './welcome';
import { log } from './log';
import { game } from './game';

const dom = (() => {
    const imgLoading1 = document.querySelector("#loading-1");
    const imgLoading2 = document.querySelector("#loading-2");

    const end = document.querySelector("#main-end");
    const winner = document.querySelector("#winner");
    const rematch = document.querySelector("#button-rematch");
    const mainMenu = document.querySelector("#button-main-menu");
    const view1 = document.querySelector("#view-1");
    const view2 = document.querySelector("#view-2");

    const randomize1 = document.querySelector("#randomize-1");
    const randomize2 = document.querySelector("#randomize-2");
    const okRandomize1 = document.querySelector("#ok-randomize-1");
    const okRandomize2 = document.querySelector("#ok-randomize-2");
    const randomInnerWrapper1 = document.querySelector("#random-inner-wrapper-1");
    const randomInnerWrapper2 = document.querySelector("#random-inner-wrapper-2");
    const randomWrapper = document.querySelector("#random-wrapper");
    const viewWrapper = document.querySelector("#view-wrapper");

    const spanOK1 = document.querySelector("#ok-randomize-1 > span");
    const spanOK2 = document.querySelector("#ok-randomize-2 > span");

    const imgLoadings = [imgLoading1, imgLoading2];
    const views = [view1, view2];
    const okRandomizes = [okRandomize1, okRandomize2];
    const randomInnerWrappers = [randomInnerWrapper1, randomInnerWrapper2];
    const spanOKs = [spanOK1, spanOK2];
    
    let mode = null;
    let players = null;

    function init() {
        _initImg();
        _initListeners();
    }

    function initPreGame(n, ... arr) {
        mode = n;
        players = [... arr];
        tab.init(... players);
        boardDOM.initBoardPre(... players);
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
        imgLoadings.forEach(img => {
            img.src = iconLoading;
        });
    }

    function _initListeners() {
        rematch.onclick = () => {
            _reset();
            welcome.rematch(mode);
        }

        mainMenu.onclick = () => {
            _reset();
            welcome.hide("main");
            welcome.show("welcome");
        }

        view1.onpointerdown = () => { boardDOM.viewShip(0); }
        view1.onpointerup = () => { boardDOM.viewAttack(0); }

        randomize1.onclick = () => { boardDOM.getNewBoard([... players][0], 1); }
        randomize2.onclick = () => { boardDOM.getNewBoard([... players][1], 2); }

        okRandomize1.onclick = () => {
            if (mode === 1) {
                okRandomize1.disabled = true;
                spanOK1.classList.add("hidden");
                imgLoading1.classList.remove("hidden");
                _countDownToGame();
            }
            else _activatePlayerPre(1);
        }

        okRandomize2.onclick = () => {
            okRandomize2.disabled = true;
            spanOK2.classList.add("hidden");
            imgLoading2.classList.remove("hidden");
            _countDownToGame();
        }
    }

    function _countDownToGame(n = 3) {
        log.message("Game starting in", 1);
        log.message(`${n}`, 2);
        const startInterval = setInterval(() => {
            n--;
            if (n === 0) {
                clearInterval(startInterval);
                _initGame(... players);
            } else log.message(`${n}`, 2);
        }, 1000)
    }

    function _initGame(... players) {
        randomWrapper.classList.add("hidden");
        viewWrapper.classList.remove("hidden");

        boardDOM.activatePre();
        boardDOM.initBoard(... players);

        if (mode === 1) {
            view2.disabled = true;
            view2.removeEventListener("onpointerdown", boardDOM.viewShip);
            view2.removeEventListener("onpointerup", boardDOM.viewAttack);
        }
        else if (mode === 2) {
            view2.disabled = false;
            view2.onpointerdown = () => { boardDOM.viewShip(1); }
            view2.onpointerup = () => { boardDOM.viewAttack(1); }
        }

        game.run();
    }

    function _activatePlayerPre(n) {
        _deactivatePre(+!n);
        _activatePre(n);
    }

    function _activatePre(n) {
        tab.activate(n);
        boardDOM.activate(n);
        randomInnerWrappers[n].classList.remove("hidden");
    }

    function _deactivatePre(n) {
        tab.deactivate(n);
        boardDOM.deactivate(n);
        randomInnerWrappers[n].classList.add("hidden");
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
        _resetOK();
        _resetWrappers();
        boardDOM.reset();
        log.reset();
        blocker.reset();
        end.classList.add("hidden");
    }

    function _resetWrappers() {
        viewWrapper.classList.add("hidden");
        randomWrapper.classList.remove("hidden");
        _activatePlayerPre(0);
    }

    function _resetOK() {
        okRandomizes.forEach(button => { button.disabled = false; })
        spanOKs.forEach(span => { span.classList.remove("hidden"); })
        imgLoadings.forEach(img => { img.classList.add("hidden"); })
    }

    return { init, initPreGame, activatePlayer, endGame };
})()

export { dom };