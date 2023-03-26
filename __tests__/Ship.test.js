const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

let ship;
let dover;
let calais;
let itinerary;

beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
});

describe('Ship', () => {
    test('can be instantiated', () => {
        expect(ship).toBeInstanceOf(Object);
    });

    test('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
    });

    test('can set sail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover);
        expect(dover.ships).not.toContain(ship);
    });

    test('gets added to port on instantiation', () => {
        expect(dover.ships).toContain(ship);
    });

    test('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
});

describe('dock', () => {
    test('can dock at a different port', () => {
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });
});