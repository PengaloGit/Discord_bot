const superagent = require('superagent');

module.exports = {
    name: 'meme',
    description: 'get a random meme',
    execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows a random meme")
            } else {
                message.reply("The command meme does'nt take arguments \n " +
                    "The proper usage would be: !meme or !meme -info")
            }
        } else {
            superagent
                .get('https://meme-api.herokuapp.com/gimme')
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) message.channel.send("Something bad happend");
                else {
                    message.channel.send(res.body.url);
                }
            });
        }
    },
};