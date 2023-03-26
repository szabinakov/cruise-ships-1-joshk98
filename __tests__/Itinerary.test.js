const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

let dover;
let calais;
let itinerary;

beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
});

describe('Itinerary', () => {
    test('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    test('it can have ports', () => {
        expect(itinerary.ports).toEqual([dover, calais]);
    });
});
