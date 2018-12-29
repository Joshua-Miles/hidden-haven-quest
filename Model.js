class Model {

    all(){
        return this.data
    }

    find(id){
        return this.data.find( document => document.id == id)
    }
    
    subscribe(){

    }
}

const normalizedPath = require("path").join(__dirname, "models");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    let [name] = file.split('.')
    let Model = require("./models/" + file);
    Model[name] =  new Model
});

module.exports  = Model