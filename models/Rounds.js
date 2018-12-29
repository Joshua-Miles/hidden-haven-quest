const Model = require('../Model')
const { Stream } = require('../Mason')

class Rounds extends Model {


    constructor(){
        super()
        this.data = rounds
        this.cursor = 0
    }

    current(){
        return new Stream( resolve => {

            let currentRound = () => {
                if(this.cursor >= this.data.length) return { complete: true }

                //Find Round
                let round = this.data[this.cursor]

                //Include Challenges
               Model.Challenges.all()
                .then( challenges => {
                    round.challenges = challenges.filter( challenge => challenge.roundID == round.id )
                    let solved = 0;
                    round.challenges.forEach( challenge =>{
                        Model.Challenges.on(`solved-${challenge.id}` , () => {
                            solved++
                            if(solved == round.challenges.length){
                                this.update(round.id, { complete: true })
                                this.cursor++
                                currentRound()
                            }
                        })
                    })
                    resolve(round)
                })
            }

            //Return Round
            currentRound()
        }) 
    }

}

module.exports = Rounds;

const rounds = [
    {
        id: 1,
        name: 'Round 1'
    },
    {
        id: 2,
        name: 'Round 2'
    }
]