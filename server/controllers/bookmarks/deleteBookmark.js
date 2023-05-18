const expressAsyncHandler = require('express-async-handler');
const Bookmark = require('../../model/BookmarkModel');

// @desc    Удаляет заказ по его айдишнику
// @route   GET /api/order/delete
const deleteOrder = expressAsyncHandler(async (req, res) => {
    const id = req.body._id;

    const deletedOrder = await Bookmark.findOneAndDelete({ _id: id });
    console.log(id, deletedOrder);

    res.status(200).send(deletedOrder);
});

module.exports = deleteOrder;
