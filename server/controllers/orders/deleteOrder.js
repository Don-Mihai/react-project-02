const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

// @desc    Удаляет заказ по его айдишнику
// @route   GET /api/order/delete
const deleteOrder = expressAsyncHandler(async (req, res) => {
    const id = req.body._id;

    const deletedOrder = await Order.findOneAndDelete({ _id: id });
    console.log(id, deletedOrder);

    res.status(200).send(deletedOrder);
});

module.exports = deleteOrder;
