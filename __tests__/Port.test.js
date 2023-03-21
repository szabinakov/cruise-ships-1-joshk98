const Port = require('../src/Port.js');

describe('Port', () => {
    test('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    test('has a name property', () => {
        const port = new Port('Porty');

        expect(port.name).toBe('Porty');
    });
});
