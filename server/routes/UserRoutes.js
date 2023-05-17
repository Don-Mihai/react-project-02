const express = require('express');
const getUser = require('../controllers/users/getUser');

const router = express.Router();

router.route('/create').post(getUser);

module.exports = router;
