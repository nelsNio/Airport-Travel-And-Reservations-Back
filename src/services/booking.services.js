'use strict';
var dbConn = require('../../config/db.config');
var Booking = require('../models/booking.models');

exports.findAll = (result) => {
    dbConn.query("Select * from booking", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('booking : ', res);
            result(null, res);
        }
    });
};
exports.finById = (id, result) => {
    dbConn.query("Select * from booking where idbooking = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('booking : ', res);
            result(null, res);
        }
    });
};


exports.create = function(newbooking, result) {
    const new_booking = new Booking(newbooking);

    dbConn.query("INSERT INTO booking set ?", new_booking, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};