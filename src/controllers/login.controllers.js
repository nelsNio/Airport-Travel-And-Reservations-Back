'use strict';
const Login = require('../services/login.services');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.login = function(req, res) {
    console.log(req.body);

    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Login.login(req.body, function(err, user) {
            if (err)
                res.send(err);
            else {

                res.json({ error: false, message: "Login successfully!", data: user });
            }
        });
    }
};