const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const OrdersRoutes = require('./routes/OrdersRoutes');
const ServiceRoutes = require('./routes/ServiceRoutes');
const UserRoutes = require('./routes/UserRoutes');
const BookmarkRoutes = require('./routes/BookmarkRoutes');
const conectDb = require('./config/bd');
const multer = require('multer');
const path = require('path');
const Image = require('./model/ImageModel');

conectDb();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

// todo: поправить раздачу статики
app.use('/uploads', express.static('/uploads'));

// Конфигурация Multer для загрузки файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const filename = Date.now() + path.extname(file.originalname);
        cb(null, filename);
        req.filename = filename; // Добавьте эту строку
    },
});

const upload = multer({ storage });

// Маршрут для загрузки изображений
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Файл не был загружен' });
    }

    const { filename } = req; // Измените эту строку

    // Сохранение информации об изображении в базе данных
    // const newImage = new Image({ filename, path: req.file.path });
    Image.create({ filename, path: req.file.path });

    res.status(200).send(filename);
});

app.use('/service', ServiceRoutes);

app.use('/order', OrdersRoutes);

app.use('/user', UserRoutes);

app.use('/bookmark', BookmarkRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
