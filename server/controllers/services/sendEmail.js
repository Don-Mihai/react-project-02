const expressAsyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');

// @desc    Отправляет сообщение на почту
// @route   GET /api/service/send-email
const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru', // Замените на адрес SMTP-сервера вашего почтового провайдера
        port: 465, // Замените на порт вашего SMTP-сервера
        secure: true, // Установите true, если ваш SMTP-сервер требует SSL
        auth: {
            user: 'mihai807@mail.ru', // Замените на имя пользователя вашего почтового провайдера
            pass: 'ZnjjZ0idaV1DfyyLwbnM', // Замените на пароль вашего почтового провайдера
        },
    });

    // Настройка опций письма
    const mailOptions = {
        from: 'mihai807@mail.ru',
        to: 'leonardovinci8007@gmail.com',
        subject: 'Новое сообщение с вашего веб-сайта',
        text: `От: ${name}\nEmail: ${email}\n\nСообщение:\n${message}`,
    };

    // Отправка письма
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Произошла ошибка при отправке письма.');
        } else {
            console.log('Письмо успешно отправлено: ' + info.response);
            res.status(200).send('Письмо успешно отправлено.');
        }
    });
});

module.exports = sendEmail;
