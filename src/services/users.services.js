'use strict';
var dbConn = require('./../../config/db.config');
var User = require('../models/users.models');

exports.findAll = (result) => {
    dbConn.query("Select * from user", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err);
        } else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};

exports.finById = (id, result) => {
    dbConn.query("Select * from user where iduser = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err);
        } else {
            console.log('User encontrado :', res[0].email);
            console.log('user : ', res);
            result(null, res);
        }
    });
};


exports.create = function(newUser, result) {
    const new_user = new User(newUser);



    dbConn.query("INSERT INTO user set ?", new_user, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });


    /****/
};