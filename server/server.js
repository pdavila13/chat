// Initialitze library requirements: express, socket.io and ioredires
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');

// Create new Redis instance
var redis = new Redis();

io.emit('chat:missatge');

// Listen web socket on port 3000
http.listen(3000, function(){
    console.log('Listening on Port 3000');
});