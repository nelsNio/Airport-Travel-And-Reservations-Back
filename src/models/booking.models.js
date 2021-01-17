//Booking object create
var Booking = function(booking) {
    this.user_iduser = booking.user;
    this.rates_idrate = booking.rate;
};
module.exports = Booking;