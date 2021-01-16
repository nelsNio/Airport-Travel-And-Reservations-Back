'use strict';
const City = require('../services/city.services');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = function(req, res) {
    City.findAll(function(err, cities) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', cities);
        res.send(cities);
    });
};


exports.finById = function(req, res) {
    City.finById(req.params.id, function(err, cities) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', cities);
        res.send(cities);
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
        City.create(req.body, function(err, city) {
            if (err)
                res.status(400).send(err);
            else {

                res.json({ error: false, message: "City added successfully!", data: city });
            }
        });
    }
};