var express = require('express');
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){

    console.log('socket connected')

})

app.use(express.static('public'))

app.use('/deploy', function(req, res){
    console.log('~DEPLOYING~')
    const exec = require('child-process-promise').exec
    exec('git pull origin master')
    res.send(200)
})

server.listen(80)