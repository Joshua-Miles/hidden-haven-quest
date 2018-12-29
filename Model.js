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

module.exports  = Model