const superagent = require('superagent');

module.exports = {
	name: 'dog',
    description: 'get a random dog picture',
    aliases: ['woof'],
	execute(message, args) {
        if(args.length > 0){
           if(args[0] === "-info"){
               message.reply("This command shows a random dog picture")
           }else{
            message.reply("The command dog does'nt take arguments \n "+
            "The proper usage would be: !dog or !dog -info")
           }
        }else{
            superagent
        .get('https://dog.ceo/api/breeds/image/random')
        .set('Accept', 'application/json')
        .end((err, res) => {
            if(err) message.channel.send("Something bad happend");
            else {
                console.log(res.body.message)
                message.channel.send(res.body.message); 
            }   
        });
        }
	},
};