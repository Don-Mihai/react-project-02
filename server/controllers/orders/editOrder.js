const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

// @desc    Редактирует заказ по айдишкнику
// @route   GET /api/order/edit
const editOrder = expressAsyncHandler(async (req, res) => {
    const id = req.body._id;

    const oldOrder = await Order.findOne({ _id: id });

    const EditedOrder = await Order.updateOne({ _id: id }, req.body);
    res.status(200).send(EditedOrder);
});

module.exports = editOrder;
