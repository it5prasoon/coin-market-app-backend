const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server: WebSocketServer } = require('socket.io');

const app = express();
const server = createServer(app);
const wss = new WebSocketServer(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

// Enable CORS
app.use(cors());

module.exports = { app, server, wss };
