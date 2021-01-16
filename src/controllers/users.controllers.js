'use strict';
const User = require('../services/users.services');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = function(req, res) {
    User.findAll(function(err, users) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', users);
        res.send(users);
    });
};


exports.finById = function(req, res) {
    User.finById(req.params.id, function(err, users) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', users);
        res.send(users);
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
        User.create(req.body, function(err, city) {
            if (err)

                res.status(400).send(err);
            else {

                res.json({ error: false, message: "User added successfully!", data: city });
            }
        });
    }
};