var express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authController');
const AppController = require('../controllers/appController')


router.post('/payment', AppController.Payment);
router.post('/notification_request', AppController.notification_request);
router.get('/get_notification', AppController.get_notification);


module.exports = router;