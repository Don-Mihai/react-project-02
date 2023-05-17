const express = require('express');
const bodyParser = require('body-parser');
const OrdersRoutes = require('./routes/OrdersRoutes');
const UserRoutes = require('./routes/UserRoutes');
const conectDb = require('./config/bd');

conectDb();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;

app.use('/order', OrdersRoutes);

app.use('/user', UserRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
