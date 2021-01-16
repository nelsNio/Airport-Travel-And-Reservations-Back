'use strict';
var dbConn = require('./../../config/db.config');
var City = require('../models/city.models');

exports.findAll = (result) => {
    dbConn.query("Select * from city", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('city : ', res);
            result(null, res);
        }
    });
};
exports.finById = (id, result) => {
    dbConn.query("Select * from city where idcity = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('city : ', res);
            result(null, res);
        }
    });
};


exports.create = function(newCity, result) {
    const new_city = new City(newCity);

    dbConn.query("INSERT INTO city set ?", new_city, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};