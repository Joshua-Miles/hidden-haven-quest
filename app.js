const express = require('express');
const greenlock = require('greenlock-express');
const app = express()

const server = greenlock.create({
    // Let's Encrypt v2 is ACME draft 11
  version: 'draft-11'

  , server: 'https://acme-v02.api.letsencrypt.org/directory'
    // Note: If at first you don't succeed, stop and switch to staging
    // https://acme-staging-v02.api.letsencrypt.org/directory
  
    // You MUST change this to a valid email address
  , email: 'joshua@christetulit.org'
  
    // You MUST NOT build clients that accept the ToS without asking the user
  , agreeTos: true
  
    // You MUST change these to valid domains
    // NOTE: all domains will validated and listed on the certificate
  , approvedDomains: [ 'hidden-haven-quest.triframe.cloud' ]
  
    // You MUST have access to write to directory where certs are saved
    // ex: /home/foouser/acme/etc
  , configDir: '~/.config/acme/'
  
  , app: require('express')().use('/', function (req, res) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end('Hello, World!\n\n💚 🔒.js');
    })
  
    // Get notified of important updates and help me make greenlock better
  , communityMember: false
  
  , debug: true
}).listen(80, 443);

// const httpServer = http.createServer(ssl.middleware(redirect()));
// const httpsServer = https.createServer(ssl.httpsOptions, ssl.middleware(app));

const io = require('socket.io')(server);

io.on('connection', function(socket){

    console.log('socket connected')

})

// app.use(express.static('public'))

// app.use('/deploy', function(req, res){
//     console.log('~DEPLOYING~')
//     const exec = require('child-process-promise').exec
//     exec('git pull origin master')
//     res.send(200)
// })

// httpServer.listen(80, function () {
//     console.log(`Listening on 80`)
// });

// httpsServer.listen(443, () => {
//     console.log(`Listening on 443`)
// })