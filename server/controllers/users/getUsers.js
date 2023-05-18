const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Получает всех пользователей
// @route   GET /api/user/by-id
const getUsers = expressAsyncHandler(async (req, res) => {
    const users = await User.find({});

    // const procUsers = users.map(user => {
    //     const obj = {name: user.name}
    //     // delete obj.password

    //     return obj
    // })

    res.status(200).send(users);
});

module.exports = getUsers;
