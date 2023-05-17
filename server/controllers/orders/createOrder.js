const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

// @desc    Создаёт новый заказ
// @route   GET /api/posts/create-post
const createOrder = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const order = await Order.create({ name: data.name, describe: data.describe, filter: data.filter });
    res.status(200).send(order);

    // res.json(user)
});

module.exports = createOrder;
