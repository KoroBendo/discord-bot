const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.members.first();
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Vous n'avez **pas la permission** d'utiliser cette commande :x:`);
      if(!member) return message.reply("Veuillez mentionner un utilisateur :x:");
      let muteRole = message.guild.roles.find("name", "muted");
      if(!muteRole) return message.reply("Le grade muted n'est pas trouvé, impossible de l'enlever à l'utilisateur :x:")
      
      if(!member.roles.has(muteRole.id)) return message.channel.send(`${member.user} n'est **pas mute** :x:`);
      member.removeRole(muteRole.id);
      message.channel.send(`${member.user} a été **unmute** par **${message.author}** :white_check_mark:`)
	}
 
module.exports.help = {
  name: "unmute"
}
