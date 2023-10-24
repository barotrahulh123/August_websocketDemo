const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket)=> {
    console.log('A user connected');

    socket.ong('message', (data) => {
        console.log('Received Message:', data);
        io.emit('message',data);
    })
    
    socket.on('disconnect',() => {
        console.log('A user disconnected')
    })
})

server.listen(3000, () => {
    console.log('Websocket server is running on port 3000');
})