const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
        recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
        content: String,
        timestamp: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
