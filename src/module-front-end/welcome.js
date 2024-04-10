import { game } from "./game";

const welcome = (() => {
    const screenWelcome = document.querySelector("#welcome");
    const screenMain = document.querySelector("#main");
    
    const buttonPVAI = document.querySelector("#button-pvai");
    const buttonPVP = document.querySelector("#button-pvp");
    
    const dialogPVAI = document.querySelector("#dialog-pvai");
    const namePVAI1 = document.querySelector("#name-pvai-1");
    const okPVAI = document.querySelector("#ok-pvai");
    const closePVAI = document.querySelector("#close-pvai");

    const dialogPVP = document.querySelector("#dialog-pvp");
    const namePVP1 = document.querySelector("#name-pvp-1");
    const namePVP2 = document.querySelector("#name-pvp-1");
    const okPVP = document.querySelector("#ok-pvp");
    const closePVP = document.querySelector("#close-pvp");
    
    function init() {
        _initPVAI();
        _initPVP();
    }

    function show() {
        screenWelcome.classList.remove("hidden");
    }

    function rematch(mode) {
        if (mode === 1) okPVAI.click();
        else if (mode === 2) okPVP.click();
    }

    // Private functions
    function _initPVAI() {
        buttonPVAI.onclick = () => { dialogPVAI.showModal(); }
        closePVAI.onclick = () => { dialogPVAI.close(); }
        okPVAI.onclick = () => {
            game.createGame(namePVAI1.value || "Player 1", "AI", 1);
            namePVAI1.value = "";
            screenWelcome.classList.add("hidden");
            screenMain.classList.remove("hidden");
        }
    }

    function _initPVP() {
        buttonPVP.onclick = () => { dialogPVP.showModal(); }
        closePVP.onclick = () => { dialogPVP.close(); }
        okPVP.onclick = () => {
            game.createGame(namePVP1.value || "Player 1", namePVP2.value || "Player 2", 2);
            namePVP1.value = "";
            namePVP2.value = "";
            screenWelcome.classList.add("hidden");
            screenMain.classList.remove("hidden");
        }
    }

    return { init, show, rematch }
})()

export { welcome }