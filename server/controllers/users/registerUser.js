const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Регистрирует пользователя
// @route   GET /api/user/register
const registerUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const user = await User.create(data);

    res.status(200).send(user);
});

module.exports = registerUser;
