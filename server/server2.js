const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


io.on('connection', (socket) => {
    console.log('user id "' + socket.id + '" connected');

    socket.on('message', (msg) => {
        console.log('recived: ' + msg);
        socket.emit('message', 'pong');
        console.log("responsed in 'message' chanel: pong");
    });

    socket.on('disconnect', () => {
        console.log('user id "' + socket.id + '" disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
