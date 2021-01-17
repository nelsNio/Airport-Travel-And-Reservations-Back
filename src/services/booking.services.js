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


exports.finByUser = (id, result) => {
    dbConn.query("Select * from booking where user_iduser = ? ", id, function(err, res) {
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
    const queryCount = `SELECT COUNT(*) bookings from booking b  join
    rate r on r.idrate = b.rates_idrate
    join schedule s on s.idschedule = r.schedule_idschedule
    where s.idschedule=(select s.idschedule from rate r join schedule s on s.idschedule = r.schedule_idschedule
    where r.idrate=${new_booking.rates_idrate}) and b.user_iduser= ${new_booking.user_iduser};`;


    dbConn.query(queryCount, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err);
        } else {
            if (res[0].bookings != 0) {
                console.log('Maxmimo');
                result({ ok: false, err: 'Al parecer ya tienes agendado un vuelo para la misma fecha' }, null);

            } else {
                dbConn.query("INSERT INTO booking set ?", new_booking, function(err, res) {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                    } else {
                        console.log(res.insertId);
                        result(null, res.insertId);
                    }
                });
            }

        }

    })

};