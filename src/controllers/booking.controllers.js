'use strict';
const Booking = require('../services/booking.services');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = function(req, res) {
    Booking.findAll(function(err, bookings) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', bookings);
        res.send(bookings);
    });
};


exports.finById = function(req, res) {
    Booking.finById(req.params.id, function(err, bookings) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', bookings);
        res.send(bookings);
    });
};

exports.finByUser = function(req, res) {
    Booking.finByUser(req.params.id, function(err, bookings) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', bookings);
        res.send(bookings);
    });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = function(req, res) {

    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Booking.create(req.body, function(err, booking) {
            if (err)
                res.status(400).send(err);
            else {

                res.json({ error: false, message: "Booking added successfully!", data: booking });
            }
        });
    }
};