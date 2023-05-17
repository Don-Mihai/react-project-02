const express = require('express');
const createOrder = require('../controllers/orders/createOrder');
const getOrders = require('../controllers/orders/getOrders');
const deleteOrder = require('../controllers/orders/deleteOrder');
const editOrder = require('../controllers/orders/editOrder');
const getOrderById = require('../controllers/orders/getOrderById');

const router = express.Router();

router.route('/create').post(createOrder);

router.route('/orders').get(getOrders);

router.route('/delete').post(deleteOrder);

router.route('/edit').post(editOrder);

router.route('/by-id').post(getOrderById);

module.exports = router;
