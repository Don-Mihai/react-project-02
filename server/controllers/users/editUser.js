const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Редактирует пользователя
// @route   GET /api/user/edit
const editUser = expressAsyncHandler(async (req, res) => {
    const id = req.body.id;

    const editedUser = await User.updateOne({ id: id }, req.body);
    res.status(200).send(editedUser);
});

module.exports = editUser;
