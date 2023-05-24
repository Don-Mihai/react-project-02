const express = require('express');
const sendEmail = require('../controllers/services/sendEmail');

const router = express.Router();

router.route('/send-email').post(sendEmail);

module.exports = router;
