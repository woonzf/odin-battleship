import '../style.css';
import { dom } from './dom.js';
import { tab } from './tab.js';
import { boardDOM } from './board-dom.js';

const Player = require('../module-back-end/player.js');

const game = (() => {
    let players = null;
    let turn = null;
    let notTurn = null;

    function init() {
        _initPlayers();
        dom.init(... players);
        _AImove();
    }

    function update(id) {
        const xy = id.split("");
        players[notTurn].receiveAttack([+xy[0], +xy[1]]);
        tab.updateLife(players[notTurn], notTurn);

        if (_isGame()) {
            alert(`${players[turn].name} wins!`);
            return;
        };

        _updateTurn();
        dom.activatePlayer(turn, notTurn);

        _AImove();
    }

    // Private functions
    function _initPlayers() {
        const player1 = new Player("AI");
        const player2 = new Player("AI");
        players = [player1, player2];
        turn = 0;
        notTurn = 1;
    }
    
    function _AImove() {
        if (players[turn].name === "AI") {
            setTimeout(() => {
                const map = players[notTurn].board.mapAttacks;
                const attack = players[turn].giveAttack(map);
                boardDOM.simulateAIClick(attack, turn);
            }, 1000);
        }
    }

    function _isGame() {
        for (const player of players) {
            if (player.life === 0) return true;
        }
        return false;
    }

    function _updateTurn() {
        const temp = turn;
        turn = +!turn;
        notTurn = temp;
    }

    return { init, update };
})()

export { game };