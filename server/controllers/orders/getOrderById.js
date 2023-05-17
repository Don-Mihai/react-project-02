const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

// @desc    Получает заказы по айдишнику пользователя
// @route   GET /api/order/by-id
const getOrdersById = expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ _id: req.body.id });
    res.status(200).send(orders);
});

module.exports = getOrdersById;
