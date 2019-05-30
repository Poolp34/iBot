const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.login("NTc5MjMwMTA3MTUxODkyNDgw.XOEsUA.bHnUizomEWkzWzjCTdYJhOCsNzo");

client.on("message", async (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command === "game") {  
        const embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setTitle("Organisation d'une partie :")
        .setDescription(" **@agents** ")
        client.channels.get("579282279176601610").send({embed})
        .then(function (message) {
            message.react('✅');
        })  
    }          
})  
