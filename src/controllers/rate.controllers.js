'use strict';
const Rate = require('../services/rate.services');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = function(req, res) {
    Rate.findAll(function(err, rates) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', rates);
        res.send(rates);
    });
};


exports.finById = function(req, res) {
    Rate.finById(req.params.id, function(err, rates) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', rates);
        res.send(rates);
    });
};

exports.filterByDestination = function(req, res) {
    Rate.filterByDestination(req.params.value, function(err, rates) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', rates);
        res.send(rates);
    });
};

exports.filterByOrign = function(req, res) {
    Rate.filterByOrign(req.params.value, function(err, rates) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', rates);
        res.send(rates);
    });
};