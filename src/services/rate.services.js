'use strict';
var dbConn = require('../../config/db.config');
var Rate = require('../models/rate.models');

exports.findAll = (result) => {
    const queryDB = "select rate.idrate idrate,rate.price , rate.status, rate.space_available, " +
        "a.name,s.date_schedule,c.name destination, oc.name origin " +
        "from rate" +
        " left outer join airline a on rate.airline_idairline = a.idairline " +
        "left outer join schedule s on s.idschedule = rate.schedule_idschedule " +
        "left join flight f on f.idflight = rate.flight_idflight " +
        "left outer join city oc on oc.idcity = f.origin_idcity " +
        "left outer join city c on c.idcity = f.destination_idcity;"
    dbConn.query(queryDB, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('rate : ', res);
            result(null, res);
        }
    });
};

exports.findAllByUser = (user, result) => {
    console.log("findAllByUser");
    const queryDB = "select rate.idrate idrate,rate.price , rate.status, rate.space_available, " +
        "a.name,s.date_schedule,c.name destination, oc.name origin " +
        "from rate" +
        " left outer join airline a on rate.airline_idairline = a.idairline " +
        "left outer join schedule s on s.idschedule = rate.schedule_idschedule " +
        "left join flight f on f.idflight = rate.flight_idflight " +
        "left outer join city oc on oc.idcity = f.origin_idcity " +
        "left join booking b on rate.idrate = b.rates_idrate " +
        `left outer join city c on c.idcity = f.destination_idcity where  b.user_iduser = ${user}`
    dbConn.query(queryDB, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('rate : ', res);
            result(null, res);
        }
    });
};

exports.finById = (id, result) => {
    dbConn.query("Select * from rate where idrate = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('rate : ', res);
            result(null, res);
        }
    });
};


exports.filterByOrign = (value, result) => {
    const queryDB = "select rate.idrate idrate,rate.price , rate.status, rate.space_available, " +
        "a.name,s.date_schedule,c.name destination, oc.name origin " +
        "from rate" +
        " left outer join airline a on rate.airline_idairline = a.idairline " +
        "left outer join schedule s on s.idschedule = rate.schedule_idschedule " +
        "left join flight f on f.idflight = rate.flight_idflight " +
        "left outer join city oc on oc.idcity = f.origin_idcity " +
        "left outer join city c on c.idcity = f.destination_idcity " +
        `where oc.name like  '%${value}%'`
    dbConn.query(queryDB, value, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('rate : ', res);
            result(null, res);
        }
    });
};

exports.fltByOrignUser = (value, usr, result) => {
    const queryDB = "select rate.idrate idrate,rate.price , rate.status, rate.space_available, " +
        "a.name,s.date_schedule,c.name destination, oc.name origin " +
        "from rate" +
        " left outer join airline a on rate.airline_idairline = a.idairline " +
        "left outer join schedule s on s.idschedule = rate.schedule_idschedule " +
        "left join flight f on f.idflight = rate.flight_idflight " +
        "left outer join city oc on oc.idcity = f.origin_idcity " +
        "left outer join city c on c.idcity = f.destination_idcity " +
        "left join booking b on rate.idrate = b.rates_idrate " +
        `where oc.name like  '%${value}%'  and b.user_iduser=${usr}`
    dbConn.query(queryDB, value, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('rate : ', res);
            result(null, res);
        }
    });
};
exports.fltByDestUser = (value, usr, result) => {
    const queryDB = "select rate.idrate idrate,rate.price , rate.status, rate.space_available, " +
        "a.name,s.date_schedule,c.name destination, oc.name origin " +
        "from rate" +
        " left outer join airline a on rate.airline_idairline = a.idairline " +
        "left outer join schedule s on s.idschedule = rate.schedule_idschedule " +
        "left join flight f on f.idflight = rate.flight_idflight " +
        "left outer join city oc on oc.idcity = f.origin_idcity " +
        "left outer join city c on c.idcity = f.destination_idcity " +
        "left join booking b on rate.idrate = b.rates_idrate " +
        `where c.name like  '%${value}%'  and b.user_iduser=${usr}`
    dbConn.query(queryDB, value, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('rate : ', res);
            result(null, res);
        }
    });
};

exports.filterByDestination = (value, result) => {
    const queryDB = "select rate.idrate idrate,rate.price , rate.status, rate.space_available, " +
        "a.name,s.date_schedule,c.name destination, oc.name origin " +
        "from rate" +
        " left outer join airline a on rate.airline_idairline = a.idairline " +
        "left outer join schedule s on s.idschedule = rate.schedule_idschedule " +
        "left join flight f on f.idflight = rate.flight_idflight " +
        "left outer join city oc on oc.idcity = f.origin_idcity " +
        "left outer join city c on c.idcity = f.destination_idcity " +
        `where c.name like  '%${value}%'`
    dbConn.query(queryDB, value, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('rate : ', res);
            result(null, res);
        }
    });
};