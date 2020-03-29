const superagent = require('superagent');
const { cat_api_key } = require('../config.json');
module.exports = {
	name: 'cat',
    description: 'get a random cat picture',
    aliases: ['meow', 'nya'],
	execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows a random cat picture")
            } else {
                message.reply("The command dog does'nt take arguments \n " +
                    "The proper usage would be: !cat or !cat -info")
            }
        }else{
            superagent
            .get('https://api.thecatapi.com/v1/images/search')
            .set('X-API-Key', cat_api_key)
            .set('Accept', 'application/json')
            .end((err, res) => {
                if(err) message.channel.send("Something bad happend");
                else {
                    message.channel.send(res.body[0].url); 
                }   
            });
        }

	},
};