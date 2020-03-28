  
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const bot = new Discord.Client();

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    bot.user.setUsername("testingBot")
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('guildMemberAdd',(member) => {
    const user = bot.users.cache.get(member.id);
    user.send('hello');
});

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //spliting the input and neglecting the space 
    const args = message.content.slice(prefix.length).split(/ +/);//args =[command,arguments...]
    //pop the cammand name and storing it in command variable
    const command = args.shift().toLowerCase();//args = [arguments...]

	if (!bot.commands.has(command)) return;

	try {
		bot.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

bot.login(token);

