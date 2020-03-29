
module.exports = {
    name: 'avatar',
    description: 'get the avatar URL of the tagged user(s), or your own avatar.',
    aliases: ['icon', 'pfp'],
    execute(message, args) {
        if (args.length > 0) {
            if (args[0] === "-info") {
                message.reply("This command shows the user avatar if no user is mentioned or the mentioned users avatar\n alias : icon, pfp")
            } else {
                message.reply("The command dog does'nt take arguments \n " +
                    "The proper usage would be: !avatar or !avatar -info or !avatar <mention list of users>")
            }
        } else {
            if (!message.mentions.users.size) {
                return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`);
            }

            const avatarList = message.mentions.users.map(user => {
                return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
            });

            message.channel.send(avatarList);
        }
    },
};