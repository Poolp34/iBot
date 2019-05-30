const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"

client.login("NTc5MjMwMTA3MTUxODkyNDgw.XOEsUA.bHnUizomEWkzWzjCTdYJhOCsNzo");

client.on("message", async (message) => {
    if (command === "clear") {
        if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES"))return
         message.channel.fetchMessages()
         .then(messages => {
             message.channel.bulkDelete(messages);
             messagesDeleted = messages.array().length;
        })
    }    
})