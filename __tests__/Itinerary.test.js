const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    test('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    test('has a ports property', () => {
        const list = new Itinerary();

        expect(list.ports).toBe([]);
    });
});
