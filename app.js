const express = require('express');
const path = require("path");
const app = express()

app.use('/static', express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
    console.log('Server running at https://localhost:3000!')
});