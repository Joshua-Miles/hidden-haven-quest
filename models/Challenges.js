const Model = require('../Model')
const code = Symbol()

class Challenges extends Model {

    constructor(){
        super()
        this.data = challenges
    }


    solve(challengeID, guess){
        let challenge = this.find(challengeID)
        if(challenge.solved) return true
        if(guess === challenge[code]) {
            this.update(challengeID, { solved: true})
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
        id: 4,
        roundID: 2,
        description: 'The house of which, despite its name, is not a performance improvement program.',
        [code]: 'four',
        solved: false
    },
    {
        id: 5,
        roundID: 2,
        description: 'What is Nonni and Abuelita\'s weapon of choice?',
        [code]: 'five',
        solved: false
    },
    {
        id: 6,
        roundID: 2,
        description: 'What evades aliens and color alike and is the last of its kind?',
        [code]: 'six',
        solved: false
    }
]