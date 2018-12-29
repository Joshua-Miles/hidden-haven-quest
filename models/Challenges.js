const Model = require('../Model')
const Rounds = require('./Rounds')
const code = Symbol()

class Challenges extends Model {

    constructor(){
        this.data = challenges
    }


    solve(challengeID, code){
        let challenge = this.find(challengeID)
        if(code === challenge[code]) return true
        else return false
    }

}

module.exports = Challenges;

const challenges = [
    {
        id: 1,
        roundID: 1,
        description: 'Find the best christmas movie ever...',
        [code]: 'aaaa',
        solved: false
    }
]