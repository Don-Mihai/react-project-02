const express = require('express');
const getBookmarks = require('../controllers/bookmarks/getBookmarks');
const createBookmark = require('../controllers/bookmarks/createBookmark');
const deleteBookmark = require('../controllers/bookmarks/getBookmarks');

const router = express.Router();

router.route('/bookmarks').get(getBookmarks);

router.route('/create').post(createBookmark);

router.route('/delete').post(deleteBookmark);

module.exports = router;
