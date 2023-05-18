const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Авторизирует пользователя
// @route   GET /api/user/auth
const authUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const user = await User.findOne({ login: data.login, password: data.password });

    if (user?._id) {
        res.status(200).send(user);
    } else {
        res.status(400).send({ errorMessage: 'Неправильный логин или пароль' });
    }
});

module.exports = authUser;
