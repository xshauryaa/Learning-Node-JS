const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
});

const server = http.createServer(app, (req, res) => {
    console.log(req);
});

server.listen(3000);