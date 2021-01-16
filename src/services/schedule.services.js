'use strict';
var dbConn = require('../../config/db.config');
var Schedule = require('../models/schedule.models');

exports.findAll = (result) => {
    dbConn.query("Select * from schedule", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('schedules : ', res);
            result(null, res);
        }
    });
};

exports.finById = (id, result) => {
    dbConn.query("Select * from schedule where idschedule = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('schedule : ', res);
            result(null, res);
        }
    });
};



exports.create = function(newUser, result) {
    const new_schedule = new Schedule(newUser);

    dbConn.query("INSERT INTO schedule set ?", new_schedule, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};