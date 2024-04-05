const Player = require('./player.js');

const battleship = (() => {
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
            
            if (isGame()) break;
            updateTurn();
        }

        console.log(`${turn.name} wins!`)
    }

    function isGame() {
        if (!Boolean(player1.life)) return true;
        if (!Boolean(player2.life)) return true;
        return false;
    }

    function updateTurn() {
        const temp = turn;
        turn = notTurn;
        notTurn = temp;
    }

    return { run };
})()

battleship.run();