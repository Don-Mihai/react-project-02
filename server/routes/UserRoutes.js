const express = require('express');
const getUser = require('../controllers/users/getUser');
const getUsers = require('../controllers/users/getUsers');
const registerUser = require('../controllers/users/registerUser');
const authUser = require('../controllers/users/authUser');
const editUser = require('../controllers/users/editUser');
const getMyUser = require('../controllers/users/getMyUser');

const router = express.Router();

router.route('/by-id').get(getUser);

router.route('/my').get(getMyUser);

router.route('/users').post(getUsers);

router.route('/register').post(registerUser);

router.route('/auth').post(authUser);

router.route('/edit').post(editUser);

module.exports = router;
