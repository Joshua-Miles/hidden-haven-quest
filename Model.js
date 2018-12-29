let cache 
const { Stream, EventEmitter } = require('./Mason')

class Model {

    constructor(){
        this.events = new EventEmitter
    }

    static get all(){
        if(!cache) {
            cache = {}
            const normalizedPath = require("path").join(__dirname, "models");
            require("fs").readdirSync(normalizedPath).forEach(function(file) {
                let [name] = file.split('.')
                let ModelClass = require("./models/" + file);
                cache[name] = Model[name] =  new ModelClass
            });
        }
        return cache
    }

    all(){
        return this.data
    }

    find(id){
        return this.data.find( document => document.id == id)
    }

    update(id, values){
        let document = this.find(id)
        Object.assign(document, values)
        this.events.emit(`updated-${id}`, document)
        return document
    }
    
    subscribe(id){
        return new Stream( resolve => {
            this.events.on(`updated-${id}`, document => resolve(document))
            resolve(this.find(id))
        })
    }
}



module.exports  = Model