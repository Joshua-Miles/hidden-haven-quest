const Model = require('../Model')
const { Stream } = require('../Mason')

let deadline = false
let timelimit = 1

class Timer extends Model {

    remaining(){
        return new Stream( emit => {
            if(!deadline) deadline = (new Date).getTime() + 1000 * 60 * timelimit
            let now = (new Date).getTime()
            setInterval( () => {
                let now = (new Date).getTime()
                emit(deadline-now)
            }, 1000)
            emit(deadline - now)
        })
       
    }

    
}

module.exports = Timer;
