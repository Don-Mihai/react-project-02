const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new mongoose.Schema({
    filename: String,
    path: String,
});

const ImageModel = mongoose.model('imageModel', imageSchema);

module.exports = ImageModel;
