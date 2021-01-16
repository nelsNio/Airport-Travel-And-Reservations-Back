const express = require('express')
const router = express.Router()

const cityController = require('../controllers/cities.controllers');
const userController = require('../controllers/users.controllers');
const bookingController = require('../controllers/booking.controllers');
const scheduleController = require('../controllers/schedule.controllers');
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

// Define API Bookings
router.get('/bookings', bookingController.findAll);
router.post('/bookings', [authMiddleware.checkJwt], bookingController.create);
router.get('/bookings/:id', bookingController.finById);

// Define API Schedule
router.get('/schedules', scheduleController.findAll);
router.post('/schedules', [authMiddleware.checkJwt], scheduleController.create);
router.get('/schedules/:id', scheduleController.finById);


module.exports = router