var express = require('express');

var colors = require('../models/colors');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get ('/', function(req, res){
    console.log("got this");
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/colors', function(req, res){
    console.log('colors are working');
    res.send(colors);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;
