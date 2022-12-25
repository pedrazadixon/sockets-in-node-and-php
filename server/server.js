// importamos las librerías requeridas
const path = require("path");
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const WebSocketServer = require("websocket").server;

const wsServer = new WebSocketServer({ httpServer: server, autoAcceptConnections: false });

app.set("port", 3000);
app.use(cors());
app.use(express.json());

wsServer.on("connect", (webSocketConnection) => {
    console.log("new connect from: " + webSocketConnection.remoteAddress)
});

wsServer.on("request", (request) => {

    const connection = request.accept(null, request.origin);

    connection.on("message", (message) => {
        console.log("recived: " + message.utf8Data);
        connection.sendUTF("pong");
        console.log("responsed: pong");
    });

    connection.on("close", (reasonCode, description) => {
        console.log("client close");
    });
});


// Iniciamos el servidor en el puerto establecido por la variable port (3000)
server.listen(app.get('port'), () => {
    console.log('server listen on port: ' + app.get('port'));
})
