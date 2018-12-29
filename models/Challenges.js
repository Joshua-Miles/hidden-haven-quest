const Model = require('../Model')
const code = Symbol()

class Challenges extends Model {

    constructor(){
        super()
        this.data = challenges
    }


    solve(challengeID, guess){
        let challenge = this.find(challengeID)
        if(challenge.completed) return
        if(guess === challenge[code]) {
            this.emit(`solved-${challengeID}`)
            return true
        } else {
            return false
        }
    }

}

module.exports = Challenges;

const challenges = [
    {
        id: 1,
        roundID: 1,
        description: 'Find the best christmas movie ever...',
        [code]: 'one',
        solved: false
    },
    {
        id: 2,
        roundID: 2,
        description: 'Find the best christmas movie ever...',
        [code]: 'bbbb',
        solved: false
    }
]