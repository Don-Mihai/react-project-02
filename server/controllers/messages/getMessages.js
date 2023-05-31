const expressAsyncHandler = require('express-async-handler');
const events = require('events');
const Message = require('../../model/MessageModel');

const emmiter = new events.EventEmitter();

// @desc    Получает сообщения
// @route   POST /api/message/messages
const getMessages = expressAsyncHandler(async (req, res) => {
    const messages = await Message.find({});
    res.status(200).send(messages);
});

module.exports = getMessages;
