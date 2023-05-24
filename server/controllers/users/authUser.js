const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc    Авторизирует пользователя
// @route   GET /api/user/auth
const authUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const user = await User.findOne({ login: data.login });

    if (!user?.id) {
        console.log(user);
        res.status(400).send({ errorMessage: 'Неправильный логин' });
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
        return res.status(401).send({ errorMessage: 'Неправильный пароль' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
    });

    res.json({ token });
});

module.exports = authUser;
