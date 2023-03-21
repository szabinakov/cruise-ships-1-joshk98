const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    test('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    test('has a starting port', () => {
        const ship = new Ship(new Port());

        expect(ship.startingPort).toBe(new Port());
    });
    
    test('can set sail', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
});

describe('dock', () => {
    test('', () => {

    });
});