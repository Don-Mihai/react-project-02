const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/posts', (req, res) => {
    const data = req.body;
    fs.readFile('data.json', (err, jsonData) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading data file');
            return;
        }

        let dataArray = [];
        if (jsonData) {
            dataArray = JSON.parse(jsonData);
        }

        dataArray.push(data);
        fs.writeFile('data.json', JSON.stringify(dataArray), err => {
            if (err) {
                console.error(err);
                res.status(500).send('Error saving data');
            } else {
                console.log('Data saved successfully');
                res.send('Data saved successfully');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
