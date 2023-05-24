const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');
const jwt = require('jsonwebtoken');

// @desc    Получает текущего пользователя
// @route   GET /api/user/my
const getMyUser = expressAsyncHandler(async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Авторизация провалена' });
    }

    // Верификация и декодирование токена
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    // Поиск пользователя по идентификатору
    const user = await User.findOne({ id: decodedToken.userId });
    if (!user) {
        return res.status(404).json({ message: 'ПОльзователь не найден' });
    }

    res.status(200).send(user);
});

module.exports = getMyUser;
