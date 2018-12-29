const Model = require('../Model')
let Challenges = require('./Challenges.js')
console.log(Challenges)
Challenges = new Challenges
class Rounds extends Model {


    constructor(){
        super()
        this.data = rounds
        this.cursor = 1
    }

    current(){
        
        //Find Round
        let round = rounds.find( round => round.id == this.cursor)

        //Include Challenges
        round.challenges = Challenges.all().filter( challenge => challenge.roundID == round.id )

        //Return Round
        return round
    }

}

module.exports = Rounds;

const rounds = [
    {
        id: 1,
        name: 'Round 1'
    }
]