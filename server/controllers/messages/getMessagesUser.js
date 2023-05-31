const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');

// @desc    Получает сообщения
// @route   POST /api/message/messages
const getMessagesUser = expressAsyncHandler(async (req, res) => {
    const { sender, recipient } = req.body;
    const messages = await Message.find({ sender, recipient });

    res.status(200).send(messages);
});

module.exports = getMessagesUser;
