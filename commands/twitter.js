module.exports = {
    name: 'twitter',
    description: "get the owner's Twitter",
    execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows the owner's twitter")
            } else {
                message.reply("The command twitter does'nt take arguments \n " +
                    "The proper usage would be: !twitter or !twitter -info")
            }
        } else message.channel.send('https://twitter.com/LoukmaneMaada');
    },
};