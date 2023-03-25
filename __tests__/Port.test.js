const Port = require('../src/Port.js');

describe('Port', () => {
    test('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    test('has a name property', () => {
        const port = new Port('Dover');

        expect(port.name).toBe('Dover');
    });
});

describe('addShip', () => {
    test('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
});

describe('removeShip', () => {
    test('', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});
