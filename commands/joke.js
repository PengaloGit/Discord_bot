const superagent = require('superagent');

module.exports = {
	name: 'joke',
	description: 'Random joke',
	execute(message, args) {
        superagent
        .get('https://official-joke-api.appspot.com/jokes/random')
        .set('Accept', 'application/json')
        .end((err, res) => {
            if(err) message.channel.send("Something bad happend");
            else message.channel.send(res.body.setup + "\r\n" + res.body.punchline);    
        });
	},
};