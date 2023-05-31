const express = require('express');
const sendMeessage = require('../controllers/messages/sendMessage');
const getMessages = require('../controllers/messages/getMessages');
const getMessagesUser = require('../controllers/messages/getMessagesUser');

const router = express.Router();

router.route('/send').post(sendMeessage);

router.route('/messages').get(getMessages);

router.route('/messages-user').post(getMessagesUser);

module.exports = router;
