const superagent = require('superagent');

module.exports = {
    name: 'joke',
    description: 'get a random joke',
    execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows a random joke")
            } else {
                message.reply("The command joke does'nt take arguments \n " +
                    "The proper usage would be: !joke or !joke -info")
            }
        } else {
            superagent
                .get('https://official-joke-api.appspot.com/jokes/random')
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if (err) message.channel.send("Something bad happend");
                    else message.channel.send(res.body.setup + "\r\n" + res.body.punchline);
                });
        }
    },
};