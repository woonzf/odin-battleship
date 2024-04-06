import './style.css';
import { dom } from './dom/dom.js';

const Player = require('./game-logic/player.js');

const battleship = (() => {
    dom.init();

    let name = null;
    let player1 = null;
    let player2 = null;
    let turn = null;
    let notTurn = null;

    function run() {
        name = "Player 1";
        player1 = new Player(name);
        player2 = new Player("Player 2");
        turn = player1;
        notTurn = player2;

        // Game loop
        while (1) {
            // AI vs AI
            const map = notTurn.board.mapAttacks;
            const attack = turn.giveAttack(map);
            notTurn.receiveAttack(attack);

            console.log(`${player1.name}: ${player1.life}, ${player2.name}: ${player2.life}`)
            
            if (_isGame()) break;
            _updateTurn();
        }

        console.log(`${turn.name} wins!`)
    }

    function _isGame() {
        if (!Boolean(player1.life)) return true;
        if (!Boolean(player2.life)) return true;
        return false;
    }

    function _updateTurn() {
        const temp = turn;
        turn = notTurn;
        notTurn = temp;
    }

    return { run };
})()

battleship.run();