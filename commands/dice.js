module.exports = {
    name: 'dice',
    description: 'roll a dice',
    execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows a random number between 1 and 6")
            } else {
                message.reply("The command dog does'nt take arguments \n " +
                    "The proper usage would be: !dice or !dice -info")
            }
        } else {
            const dice = Math.floor(Math.random() * 6) + 1
            message.channel.send('Dice rolled number ' + dice);
        }
    },
};