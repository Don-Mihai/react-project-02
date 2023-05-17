const mongoose = require('mongoose');

async function conectDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/freelancedb');
}

module.exports = conectDb;
