// Initialitze library requirements: express, socket.io and ioredires
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');

// Create new Redis instance
var redis = new Redis();

// Subscribe to all Redis Channels
redis.psubscribe('*', function(err, count) {
    // Nothing to do here?
    console.log('Subscribe to: ' + count + ' channel');
    if (err) {
        console.log('Errors subscribing to channel:' + err);
    }
});

// Broadcast message when recieved from Redis on all channels
redis.on('pmessage', function(subscribed,channel, message) {
    console.log('Message Recieved at channel(' + channel + '): ' + message);
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});

// Listen web socket on port 300
http.listen(3000, function(){
    console.log('Listening on Port 3000');
});