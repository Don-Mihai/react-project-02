const shortid = require('shortid');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userScheme = new Schema(
    {
        id: { type: String, default: shortid.generate() },
        login: String,
        password: String,
        birthDate: String,
        email: String,
        name: String,
        surname: String,
        userDescribe: String,
        imgUrl: String,
        themeUrl: String,
        skills: Array,
        activeRole: String,
    },
    { versionKey: false }
);

const UserModel = mongoose.model('UserModel', userScheme);

module.exports = UserModel;
