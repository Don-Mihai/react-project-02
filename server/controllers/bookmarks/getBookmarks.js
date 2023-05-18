const expressAsyncHandler = require('express-async-handler');
const Bookmark = require('../../model/BookmarkModel');

// @desc    Получает все заказы
// @route   GET /api/order/orders
const getBookmarks = expressAsyncHandler(async (req, res) => {
    const bookmark = await Bookmark.find({});
    res.status(200).send(bookmark);
});

module.exports = getBookmarks;
