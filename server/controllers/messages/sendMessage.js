const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');
const User = require('../../model/UserModel');

// @desc    Отправляет сообщение
// @route   GET /api/message/send
const sendMessage = expressAsyncHandler(async (req, res) => {
    const message = req.body;

    // const { content } = message;

    // const regex = /@'([^']+)'/;

    // const match = content.match(regex);

    // if (match) {
    //     const username = match[1]; // Получение имени пользователя без кавычек
    //     const user = await User.findOne({ username });

    //     if (user) {
    //         const createdMessage = await Message.create({ ...message, recipient: user._id });
    //         res.status(200).send('Сообщение успешно отправлено!');
    //     } else {
    //         res.status(404).send('Пользователь не найден!');
    //     }
    // } else {
    //     res.status(400).send('Неправильный формат сообщения!');
    // }

    const createdMessage = await Message.create(message);
    res.status(200).send('Сообщение успешно отправлено!');
});

module.exports = sendMessage;
