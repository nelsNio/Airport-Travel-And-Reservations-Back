//Booking object create
var Booking = function(booking) {
    this.user_iduser = booking.user;
    this.flight_idflight = booking.flight;
};
module.exports = Booking;