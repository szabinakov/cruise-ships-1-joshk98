const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    test('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    test('it can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});
