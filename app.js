
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, SERVER_NAME,BOT_NAME } = require('./config.json');

const bot = new Discord.Client();

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    bot.user.setUsername(BOT_NAME)
    console.log(`Logged in as ${bot.user.username}!`);
});

bot.on("guildCreate", function (guild) {
    console.log(`${bot.user.tag} joined ${guild.name} succesfully `);
});

bot.on('guildMemberAdd', (member) => {
    const user = bot.users.cache.get(member.id);

    message = "```Hello I'm " + bot.user.username + ", Welcome to " + SERVER_NAME + " hope you'll enjoy and have a good time with the cammunity, all you need to remember respect is all you need to stay in it.\n```" +
    "Type : **!all-cammand** in general to see the commands we have for you :heart: ";

    user.send(message);
});

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //spliting the input and neglecting the space 
    const args = message.content.slice(prefix.length).split(/ +/);//args =[command,arguments...]
    //pop the cammand name and storing it in command variable
    const commandName = args.shift().toLowerCase();//args = [arguments...]

    const command = bot.commands.get(commandName)
        || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;

    try {
        bot.commands.get(command.name).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

bot.login(token);

