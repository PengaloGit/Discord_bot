
const fs = require('fs');
const allCommands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = {
    name: 'all-command',
    description: 'all the available commands',
    execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows all the available commands")
            } else {
                message.reply("The command all-command does'nt take arguments \n " +
                    "The proper usage would be: !all-command")
            }
        } else {
            var commands = "```cs\n"
            for (const file of allCommands) {
                if (file != "all-command.js") {
                    const command = require(`./${file}`);
                    commands += "'!" + command.name + "' # " + command.description + "\n"
                }
            }
            commands +="```" 
            message.channel.send(commands)
            message.reply("*For more informations type : <command> -info*")
        }
    },
};