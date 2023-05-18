const shortid = require('shortid');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookmarkScheme = new Schema(
    {
        _id: { type: String },
        userId: {
            type: mongoose.ObjectId,
            ref: 'UserModel',
        },
        orderId: {
            type: String,
            ref: 'OrderModel',
        },
    },
    { versionKey: false }
);

const OrderModel = mongoose.model('BookmarkModel', BookmarkScheme);

module.exports = OrderModel;
