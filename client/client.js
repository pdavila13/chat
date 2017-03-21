var socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function(){
    console.log("Client connected OK to localhost port 3000");
});

socket.on('chat', function(data){
    console.log("Chat received!");
    console.log(data)
});

socket.on('disconnect', function(){
    console.log("Client disconnected OK from localhost port 3000");
});