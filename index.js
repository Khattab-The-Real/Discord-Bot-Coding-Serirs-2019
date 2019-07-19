const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const tokenfile = require('./tokenfile.json');
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
    console.log(`${bot.user.username} Is online`);
    bot.user.setActivity('Khattab on Youtube', {type: 'WATCHING'});
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.reply('Nothing works here :)');

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);


    
});


bot.login(tokenfile.token);


