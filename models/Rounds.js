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
                if(this.cursor >= this.data.length) return resolve( { complete: true })

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

    beginGame(){
        console.log('sending')
        var twilio = require('twilio');

        // Find your account sid and auth token in your Twilio account Console.
        var client = new twilio('ACdfc49436c4d99c4f38cbdbc067f20b51', '47c58db4b05382a7e9b45d39c0a69627');

        // Send the text message.
        client.messages.create({
            to: '+17138854378',
            from: '+12819496383',
            body: 'Hello from Twilio!'
        });
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