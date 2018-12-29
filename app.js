const express = require('express');
const greenlock = require('greenlock-express');
const app = express()
const Model = require('./Model')

const { map, each } = require('./Mason')

function getMethods($class) {
  var prototype = $class.prototype
  var props = [];

  do {
    if(prototype != Object.prototype) props = props.concat(Object.getOwnPropertyNames(prototype));
  } while (prototype = Object.getPrototypeOf(prototype));

  return props.filter( prop => prop != 'constructor');
}


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
  
  , app: app
  
    // Get notified of important updates and help me make greenlock better
  , communityMember: false
  
  , debug: true
}).listen(80, 443);


const io = require('socket.io')(server);
let counter = 0
io.on('connection', function(socket){

  socket.on('fetch-models', (payload, respond) => {
   each(Model.all, (name,  model) => {
     console.log(name, model)
      getMethods(model).forEach( method => {
        socket.on(`${name}-${method}`, async ( payload, respond ) => {
            let subscriptionID = counter++;
            respond( subscriptionID )
            let result = model[method](...payload)
            if(result && result.then) result.then( result => socket.emit(subscriptionID, result))
            else setTimeout( () => socket.emit(subscriptionID, result), 1 )
        })
      })
    })
    respond({ models: map(Model.all, (name, model) => getMethods(model) )})
  })
})

app.use(express.static('public'))

app.use('/deploy', function(req, res){
    console.log('~DEPLOYING~')
    const exec = require('child-process-promise').exec
    exec('git pull origin master')
    res.send(200)
})