const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc    Регистрирует пользователя
// @route   GET /api/user/register
const registerUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const existingEmail = User.findOne({ email: data.email });
    const existingLogin = User.findOne({ login: data.login });

    if (existingEmail?.id) {
        res.status(400).send({ message: 'Пользователь с таким email уже существует' });
    }

    if (existingLogin?.id) {
        res.status(400).send({ message: 'Пользователь с таким логином уже существует' });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({ ...data, password: hashedPassword });

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
    });

    res.status(201).send({ token });
});

module.exports = registerUser;
