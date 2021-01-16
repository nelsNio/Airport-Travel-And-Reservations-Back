'use strict';
const Flight = require('../services/flight.services');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = function(req, res) {
    Flight.findAll(function(err, flights) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', flights);
        res.send(flights);
    });
};


exports.finById = function(req, res) {
    Flight.finById(req.params.id, function(err, flights) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', flights);
        res.send(flights);
    });
};

exports.filterDestination = function(req, res) {
    Flight.filterDestination(req.params.value, function(err, flights) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', flights);
        res.send(flights);
    });
};

exports.filterOrigin = function(req, res) {
    Flight.filterOrigin(req.params.value, function(err, flights) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', flights);
        res.send(flights);
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
        Flight.create(req.body, function(err, Flight) {
            if (err)
                res.status(400).send(err);
            else {

                res.json({ error: false, message: "Flight added successfully!", data: Flight });
            }
        });
    }
};