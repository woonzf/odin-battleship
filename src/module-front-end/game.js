import { dom } from './dom';
import { tab } from './tab';
import { boardDOM } from './board-dom';
import { blocker } from './blocker';

const Player = require('../module-back-end/player.js');

const game = (() => {
    let players = null;
    let turn = null;
    let notTurn = null;

    function createGame(name1, name2, mode) {
        _initPlayers(name1, name2);
        dom.init(mode, ... players);
        _AImove();
    }

    function update(id) {
        const xy = id.split("");
        players[notTurn].receiveAttack([+xy[0], +xy[1]]);
        tab.updateLife(players[notTurn], notTurn);
        setTimeout(() => {
            if (_isGame()) {
                alert(`${players[turn].name} wins!`);
                return;
            };
    
            _updateTurn();
            dom.activatePlayer(turn, notTurn);
            if (players[turn].name !== "AI") blocker.deactivateBlock("board");
    
            _AImove();
        }, 1000)
    }

    // Private functions
    function _initPlayers(name1, name2) {
        const player1 = new Player(name1);
        const player2 = new Player(name2);
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

    return { createGame, update };
})()

export { game };