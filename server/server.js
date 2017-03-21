// Initialitze library requirements: express, socket.io and ioredires
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');

// Create new Redis instance
var redis = new Redis();