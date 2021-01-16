'use strict';
var dbConn = require('../../config/db.config');
var Flight = require('../models/flight.models');

exports.findAll = (result) => {
    const queryDB = "select f.idflight, origin.idcity as originId, origin.name  as originName," +
        " destination.idcity  as destinationId, destination.name  as destinationName" +
        " from flight f left join city origin" +
        " on origin.idcity = f.origin_idcity" +
        " left join  city destination on destination.idcity= f.destination_idcity";
    dbConn.query(queryDB, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('flight : ', res);
            result(null, res);
        }
    });
};
exports.finById = (id, result) => {
    dbConn.query("Select * from flight where idflight = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('flight : ', res);
            result(null, res);
        }
    });
};


exports.create = function(newFlight, result) {
    const new_flight = new Flight(newFlight);

    dbConn.query("INSERT INTO flight set ?", new_flight, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};