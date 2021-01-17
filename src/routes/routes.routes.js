const express = require('express')
const router = express.Router()

const cityController = require('../controllers/cities.controllers');
const userController = require('../controllers/users.controllers');
const bookingController = require('../controllers/booking.controllers');
const rateController = require('../controllers/rate.controllers');
const scheduleController = require('../controllers/schedule.controllers');
const flightController = require('../controllers/flights.controllers');
const loginController = require('../controllers/login.controllers');
var authMiddleware = require('../middleware/auth');

//Auth
// Define Login
router.post('/login', loginController.login);


// Define API Cities
router.get('/cities', authMiddleware.checkJwt, cityController.findAll);
router.post('/cities', [authMiddleware.checkJwt], cityController.create);
router.get('/cities/:id', cityController.finById);

// Define API Users
router.get('/users', userController.findAll);
router.post('/users', userController.create);
router.get('/users/:id', userController.finById);
router.get('/user/rates/', [authMiddleware.checkJwt], rateController.findAllByUser);

// Define API Bookings
router.get('/bookings', bookingController.findAll);
router.post('/bookings/:idrate', [authMiddleware.checkJwt], bookingController.create);
router.get('/bookings/:id', bookingController.finById);
router.get('/bookings/user/:id', bookingController.finByUser);

// Define API Rate
router.get('/rates', rateController.findAll);
router.get('/rates/:id', rateController.finById);
router.get('/rates/user/search/destination/:value', [authMiddleware.checkJwt], rateController.fltByDestUser);
router.get('/rates/search/destination/:value', rateController.filterByDestination);
router.get('/rates/user/search/origin/:value', [authMiddleware.checkJwt], rateController.fltByOrignUser);
router.get('/rates/search/origin/:value', rateController.filterByOrign);

// Define API Schedule
router.get('/schedules', scheduleController.findAll);
router.post('/schedules', [authMiddleware.checkJwt], scheduleController.create);
router.get('/schedules/:id', scheduleController.finById);

// Define API Flight
router.get('/flights', flightController.findAll);
router.post('/flights', [authMiddleware.checkJwt], flightController.create);
router.get('/flights/:id', flightController.finById);
router.get('/flights/search/destination/:value', flightController.filterDestination);
router.get('/flights/search/origin/:value', flightController.filterOrigin);


module.exports = router