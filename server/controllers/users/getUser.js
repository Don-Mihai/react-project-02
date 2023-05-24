const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Получает пользователя по айди
// @route   GET /api/order/by-id
const getUser = expressAsyncHandler(async (req, res) => {
    // Поиск пользователя по идентификатору
    const user = await User.findOne({ id: req.body.id });
    if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
    }

    res.status(200).send(user);
});

module.exports = getUser;
