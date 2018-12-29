Object.defineProperty(Object.prototype, 'entries', {enumerable:false, writable:true, value: 
    function(){
        return Object.entries(this)
    }
});

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

}