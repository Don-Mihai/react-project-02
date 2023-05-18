const expressAsyncHandler = require('express-async-handler');
const Bookmark = require('../../model/BookmarkModel');
const shortid = require('shortid');

// @desc    Создаёт закладку
// @route   GET /api/bookmark/create
const createBookmark = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const bookmark = await Bookmark.create({ ...data, _id: shortid.generate() });
    res.status(200).send(bookmark);
});

module.exports = createBookmark;
