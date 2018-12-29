const Model = require('../Model')

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
        round.challenges = Model.Challenges.all().filter( challenge => challenge.roundID == round.id )

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