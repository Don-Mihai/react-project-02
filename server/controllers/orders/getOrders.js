const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

// @desc    Получает все заказы
// @route   GET /api/order/orders
const getOrders = expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.status(200).send(orders);
});

module.exports = getOrders;
