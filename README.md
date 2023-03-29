<h1>Cruise Ships</h1>

This program simulates a cruise ship. It includes three classes: Port, Ship, and Itinerary. The Port class represents a port, with the ability to add and remove ships. The Ship class represents a ship, which can set sail from a port and dock at another port. The Itinerary class represents an itinerary, which is a list of ports that the ship visits.

<h2>Installation</h2>

To use this program, you must have Node.js installed on your machine.

Clone the repository from GitHub:

    git clone https://github.com/[USERNAME]/cruise-ships.git

Navigate to the cruise-ships directory:

    cd cruise-ships

Install the dependencies:

    npm install

Run the tests:

    npm test

<h2>Usage</h2>

To use this program, you can create instances of the Port, Ship, and Itinerary classes in your own code.

<h3>Port</h3>

    const Port = require('./src/Port.js');

    const port = new Port('Dover');

    // Add a ship to the port
    const ship = {};
    port.addShip(ship);

    // Remove a ship from the port
    port.removeShip(ship);

<h3>Ship</h3>

    const Ship = require('./src/Ship.js');
    const Itinerary = require('./src/Itinerary.js');

    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);

    const ship = new Ship(itinerary);

    // Set sail from the current port
    ship.setSail();

    // Dock at the next port in the itinerary
    ship.dock();

<h3>Itinerary</h3>

    const Itinerary = require('./src/Itinerary.js');
    const Port = require('./src/Port.js');

    const dover = new Port('Dover');
    const calais = new Port('Calais');

    const itinerary = new Itinerary([dover, calais]);

<h2>Contributing</h2>

This program was created as part of a coding challenge, and is not currently accepting contributions.