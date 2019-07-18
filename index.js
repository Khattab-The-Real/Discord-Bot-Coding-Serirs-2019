const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
    console.log(`${bot.user.username} Is online`);
    bot.user.setActivity('Khattab on Youtube', {type: 'WATCHING'});
});



bot.login(botconfig.token);
