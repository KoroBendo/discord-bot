const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setFooter(`Made by DreamShow`, client.user.avatarURL)
        .setDescription("Listes des commandes disponibles :")
        .addField("<:pepeLink:678042343605272577> Administration :", "v!kick, v!ban, v!addrole, v!delrole, v!clear")
        .addField("<:MrSparklePeek:678042488627396619> Modération :", "v!kick, v!ban, v!addrole, v!delrole, v!clear")
        .addField("<:blobcorn:678042437230526465> Utilitaires :", "v!ip,")
        .addField("<:cool_flushed:678042256002908180> Divertissement :", "v!ip")
        .setColor("#F04747")
    message.channel.send(help)
}

module.exports.help = {
    name: "help"
}
