const express = require('express');
const greenlock = require('greenlock-express');
const https = require('https');
const http = require('http');
const redirect = require('redirect-https');

const ssl = greenlock.create({
    server: 'https://acme-v01.api.letsencrypt.org/directory',
    email: 'admin@triframe.io',
    agreeTos: true,
    approvedDomains:[ "hidden-haven-quest.triframe.cloud" ]
})

const httpServer = http.createServer(ssl.middleware(redirect()));
const httpsServer = https.createServer(ssl.httpsOptions, ssl.middleware(app));

const io = require('socket.io')(httpsServer);

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

httpServer.listen(80, function () {
    console.log(`Listening on 80`)
});

httpsServer.listen(443, () => {
    console.log(`Listening on 443`)
})