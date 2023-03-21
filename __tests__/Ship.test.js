const Ship = require('../src/Ship.js');

describe('Ship', () => {
    test('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    test('has a starting port', () => {
        const ship = new Ship('Dover');

        expect(ship.startingPort).toBe('Dover');
    });
});