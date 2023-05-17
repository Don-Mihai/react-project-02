const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Получает заказы по айдишнику пользователя
// @route   GET /api/order/by-id
const getUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ id: req.body.id });
    res.status(200).send(user);
});

module.exports = getUser;
