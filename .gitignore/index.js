const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"

client.login(process.env.BOT_TOKEN);

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
        .setDescription("@everyone Une game de Civilization VI est organisée à" + args.join(" ") + " ! ✅ si présent.")
        client.channels.get("579282279176601610").send({embed})
        .then(function (message) {
            message.react('✅');
        })
    }

    if (command === "lobby") {  
        const embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setTitle("Lien steam : " + args.join(" ") + "\n\nParamètres de la partie :")
        .setDescription("Carte : 1⃣  Pangée | 2⃣  Fractale | 3⃣  Continent | 4⃣ plateau d'Ile | 5⃣ Aléatoire");
        client.channels.get("579282279176601610").send({embed})
        .then(function (message) {
            message.react('1⃣')
            .then(() => message.react('2⃣'))
            .then(() => message.react('3⃣'))
            .then(() => message.react('4⃣'))
            .then(() => message.react('5⃣'));
        })
    }

        if (command === "lobby") {
        const embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setDescription("Timer : 🕒 Dynamique | 🔥 90s Rapide | 🚎 120s Normal | 💤 150s Lent");
        client.channels.get("579282279176601610").send({embed})
        .then(function (message) {
            message.react('🕒')
            .then(() => message.react('🔥'))
            .then(() => message.react('🚎'))
            .then(() => message.react('💤'));
        })    
    }    

    if (command === "lobby") {
        const embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setDescription("Âge du monde : 🗻 Classique | 🌋 Nouveau");
        client.channels.get("579282279176601610").send({embed})
        .then(function (message) {
            message.react('🗻')
            .then(() => message.react('🌋'));
        })
    }   
    
    if (command === "lobby") {
        const embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setDescription("Bans : valable si NombreDeVotes ≥ NombreDeJoueurs/2");
        client.channels.get("579282279176601610").send({embed})
    }   

    if (command === "clear") {
        if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES"))return
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length;
          })
    }
})
