let cache 

class Model {

    static get all(){
        if(!cache) {
            cache = {}
            const normalizedPath = require("path").join(__dirname, "models");
            require("fs").readdirSync(normalizedPath).forEach(function(file) {
                let [name] = file.split('.')
                let Model = require("./models/" + file);
                cache[name] = Model[name] =  new Model
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
    
    subscribe(){

    }
}



module.exports  = Model