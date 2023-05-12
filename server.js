const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;

const Schema = mongoose.Schema;

const userScheme = new Schema(
    {
        name: String,
        describe: String,
    },
    { versionKey: false }
);

const Order = mongoose.model('Order', userScheme);

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/freelancedb');
}

main();

app.post('/posts', async (req, res) => {
    const data = req.body;

    const order = await Order.create({ name: data.name, describe: data.describe });
    res.status(200).send(order);
});

app.get('/posts', async (req, res) => {
    const orders = await Order.find({});
    res.status(200).send(orders);
});

app.post('/order-delete', async (req, res) => {
    const name = req.body.name;

    const deletedOrder = await Order.findOneAndDelete({ name: name });

    res.status(200).send('ок');
});

app.post('/order-edit', async (req, res) => {
    const name = req.body.name;

    const deletedOrder = await Order.updateOne({ name: name }, req.body);

    res.status(200).send('ок');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
