function Ship(startingPort) {
    this.startingPort = new Port();
    this.currentPort = ;
}

function Port(name) {
    this.name = name;
}

Ship.prototype.setSail = function () {
    this.startingPort = '';
}

Ship.prototype.dock = function (dockName) {
    this.startingPort = new Port(dockName)
}

module.exports = Ship, Port;