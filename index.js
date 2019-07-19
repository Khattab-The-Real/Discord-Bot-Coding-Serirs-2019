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

    if(command === `${prefix}botinfo`){
       let bicon = bot.user.displayAvatarURL; 

       let botEmbed = new Discord.RichEmbed()
       .setTitle("Bot Information")
        .setDescription("This is the Bots info")
        .setColor("#51f542")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Date Created", bot.user.createdAt);


       message.channel.send(botEmbed)
    };


    if(command === `${prefix}serverinfo`){
        let sicon = message.guild.displayAvatarURL;
        let serverEmbed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setDescription("This is server info")
        .setColor("#6042f5")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created at", message.guild.createdAt)
        .addField("You Joined At", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount)
        .addField("Your Username", message.author.tag);


        message.channel.send(serverEmbed)
    }

   
    
});


bot.login(tokenfile.token);


