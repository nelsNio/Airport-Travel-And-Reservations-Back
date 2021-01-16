//Flight object create
var Flight = function(flight) {
    this.origin_idcity = flight.origin;
    this.destination_idcity = flight.destination;
};
module.exports = Flight;