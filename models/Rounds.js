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

            // Find your account sid and auth token in your Twilio account Console.
            var TMClient = require('textmagic-rest-client');
            var text = new TMClient('joshuamiles', 'key');
            // Send the text message.
            let users = await Model.Users.all()
            users.forEach( user => {
                text.Messages.send({
                    text: `Hi ${user.name}, come play Hidden Haven Quest: https://hidden-haven-quest.triframe.cloud/portal/${user.id}`, 
                    phones:'17138854378', //user.number,
                }, function(err, res){
                    console.log('Messages.send()', err, res);
                });
            })
        } 
    }

}

module.exports = Rounds;

const rounds = [
 
    {
        id: 2,
        name: 'Round 2'
    }
]