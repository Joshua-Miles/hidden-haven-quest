Object.defineProperty(Object.prototype, 'entries', {enumerable:false, writable:true, value: 
    function(){
        return Object.entries(this)
    }
});


class Stream {
    constructor(callback){
        this.callbacks = new Array
        setTimeout( () => callback( (...args) => this.emit(...args) ) )
    }

    then(callback){
        this.callbacks.push(callback)
    }

    emit(...args){
        this.callbacks.forEach(callback => callback(...args))
    }
}

class EventEmitter {

    constructor(){
        this.bin = new Object
    }

    on(event, callback){
        this.bin[event] = this.bin[event] || new Array
        this.bin[event].push(callback)
    }

    emit(event, payload){
        if(this.bin[event]) this.bin[event].forEach( callback => callback(payload))
    }
}

module.exports = {

    map(object = new Object, callback){
        let returnValues = new Object;
        for( let index in object ){
            let element = object[index]
            returnValues[index] = callback(index, element, object);
        }
        return returnValues; 
    },
      
    each(object = new Object, callback){
        for( const [index, element] of object.entries() ){
            callback(index, element, object);
        }
    },

    Stream,

    EventEmitter

}