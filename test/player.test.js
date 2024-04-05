const Player = require('../src/player.js');

const player = new Player();

test('updateLive() OK', () => {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            player.receiveAttack([i, j]);
        }
    }

    player.updateLife();
    expect(player.life).toBe(0);
})

test('isValidCoordinate() OK', () => {
    const map = new Map();
    map.set("00", 1);
    expect(player.isValidCoordinate([0, 0], map)).toBe(false);
})