module.exports = {
	name: 'discord',
	description: "get the owner's discord",
	execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows the owner's discord")
            } else {
                message.reply("The command dicord does'nt take arguments \n " +
                    "The proper usage would be: !discord or !discord -info")
            }
        }else message.channel.send('Pengalo#5062');
	},
};