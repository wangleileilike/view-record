const express = require('express')
const path = require('path')
const fs = require('fs');
const app = express()

// app.use(express.static(path.join(__dirname, './index.html')))

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    const htmlContent = fs.readFileSync(path.join(__dirname, './express.html'));
    res.send(htmlContent)
});

app.get('/getInfo', function (req, res) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    const data = fs.readFileSync(path.join(__dirname, './geek.json'));
    res.send(data);
});

app.listen(3000)