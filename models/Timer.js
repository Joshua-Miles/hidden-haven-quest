const Model = require('../Model')

let deadline = false
let timelimit = 1

class Timer extends Model {

    remaining(){
        if(!deadline){
            deadline = (new Date).getTime() + 1000 * 60 * timelimit
        }
        let now = (new Date).getTime()
        return (deadline - now)
    }

    
}

module.exports = Timer;
