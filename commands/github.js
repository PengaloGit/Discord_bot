module.exports = {
    name: 'github',
    description: "get the owner's github",
    execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows the owner's github")
            } else {
                message.reply("The command dog does'nt take arguments \n " +
                    "The proper usage would be: !github or !github -info")
            }
        } else {
            message.channel.send('https://github.com/PengaloGit');
        }
    },
};