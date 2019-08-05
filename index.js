const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on(`ready`, async () => {
  console.log(`${bot.user.username} Is online!`)
  bot.user.setActivity("Testing Myself for a test!")
});


bot.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return message.reply("I can not respond to Dm's!");

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd === `${prefix}kick`){
    //!kick @Noob#4567 asking for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(`${message.author.username} Can not find that user`);
    let kReason = args.join(" ").slice(22);
    //We are going to check if the person sending the command has Permissions to do so
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`${message.author.username} you do not have Proper Permissions to do that! `);
    if(kUser.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`No can do pal, they are a staff member`);

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("Kicked a User")
    .setDescription("This is a message to let people know someone is Kicked :tada:")
    .setColor("#ff0000")
    .addField("Kicked User:", `${kUser} With ID: ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.username}> With ID: ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.reply("No incidents channel Found!")

    message.guild.member(kUser).kick(kReason)
    kickChannel.send(kickEmbed);

  }

  if(cmd === `${prefix}ban`){
    //!kick @Noob#4567 asking for it

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(`${message.author.username} Can not find that user`);
    let bReason = args.join(" ").slice(22);
    //We are going to check if the person sending the command has Permissions to do so
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`${message.author.username} you do not have Proper Permissions to do that! `);
    if(bUser.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`No can do pal, they are a staff member`);

    let banEmbed = new Discord.RichEmbed()
    .setTitle("banned a user")
    .setDescription("This is a message to let people know someone is Banned :tada:")
    .setColor("#ff0000")
    .addField("Banned User:", `${bUser} With ID: ${bUser.id}`)
    .addField("banned By", `<@${message.author.username}> With ID: ${message.author.id}`)
    .addField("banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "incidents");
    if(!banChannel) return message.reply("No incidents channel Found!")

    message.guild.member(bUser).ban(bReason)
    banChannel.send(banEmbed);

  }

});

bot.login(botconfig.token);
