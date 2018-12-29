const Model = require('../Model')
const { Stream } = require('../Mason')
let begun = false

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

    async beginGame(){
        if(!begun){
            begun = true
            var twilio = require('twilio');

            // Find your account sid and auth token in your Twilio account Console.
            var client = new twilio('ACdfc49436c4d99c4f38cbdbc067f20b51', '47c58db4b05382a7e9b45d39c0a69627');

            // Send the text message.
            let users = await Model.Users.all()
            users.forEach( user => {
                console.log(user.number)
                client.messages.create({
                    to: '+7138854378', //user.number,
                    from: '+12819496383',
                    body: `Hi ${user.name}, come play Hidden Haven Quest: https://hidden-haven-quest.triframe.cloud/portal/${user.id}`
                });
            })
        } 
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