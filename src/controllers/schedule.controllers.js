'use strict';
const Schedule = require('../services/schedule.services');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = function(req, res) {
    Schedule.findAll(function(err, schedules) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', schedules);
        res.send(schedules);
    });
};


exports.finById = function(req, res) {
    Schedule.finById(req.params.id, function(err, schedules) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', schedules);
        res.send(schedules);
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
        Schedule.create(req.body, function(err, city) {
            if (err)
                res.status(400).send(err);
            else {

                res.json({ error: false, message: "Schedule added successfully!", data: city });
            }
        });
    }
};