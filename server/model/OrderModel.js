const shortid = require('shortid');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userScheme = new Schema(
    {
        _id: { type: String, default: shortid.generate() },
        name: String,
        describe: String,
        filter: String,
    },
    { versionKey: false }
);

const OrderModel = mongoose.model('OrderModel', userScheme);

module.exports = OrderModel;
