const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const users = require('./routes/users');

app.use(express.static(__dirname + '/src'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '/src') });
});

http.createServer(app).listen(3000);

module.exports = app;
