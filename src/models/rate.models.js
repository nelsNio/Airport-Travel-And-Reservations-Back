//Rate object create
var Rate = function(rate) {
    this.status = rate.status;
    this.airline_idairline = rate.airline;
    this.space_available = rate.space_available;
    this.price = rate.price;
    this.schedule_idschedule = rate.schedule;
    this.flight_idflight = rate.flight;
};
module.exports = Rate;