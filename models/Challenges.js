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
        id: 1,
        roundID: 1,
        description: 'What is the best Christmas movie of all time?',
        [code]: 'one',
        solved: false
    },
    {
        id: 2,
        roundID: 1,
        description: 'Where grows a most marvelous fruit?',
        [code]: 'two',
        solved: false
    },
    {
        id: 10,
        roundID: 1,
        description: 'Where is the door to the internet?',
        [code]: 'ten',
        solved: false
    },
    
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
    },
    {
        id: 7,
        roundID: 3,
        description: 'What\'s traveled the sea and now contains cleaning supplies?',
        [code]: 'seven',
        solved: false
    },
    {
        id: 8,
        roundID: 3,
        description: 'What is the favored instrument of a Legume named Tarantino?',
        [code]: 'eight',
        solved: false
    },
    {
        id: 9,
        roundID: 3,
        description: 'Where waits and watches professor McGonagall?',
        [code]: 'nine',
        solved: false
    },
    {
        id: 3,
        roundID: 4,
        description: 'What box contains the most silver and gold in the house?',
        [code]: 'three',
        solved: false
    },
    {
        id: 11,
        roundID: 4,
        description: 'What painting asks, who kooks for you?',
        [code]: 'eleven',
        solved: false
    },
    {
        id: 12,
        roundID: 4,
        description: 'What is used to make angled cuts?',
        [code]: 'twelve',
        solved: false
    }
]