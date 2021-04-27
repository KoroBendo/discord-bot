const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
      let reason = args.slice(2).join(" ");
      let member = message.mentions.members.first();
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Vous n'avez **pas la permission** d'utiliser cette commande :x:`);
      if(!member) return message.reply("Veuillez mentionner un utilisateur :x:");
      let muteRole = message.guild.roles.find("name", "muted");
      if(!muteRole) return message.reply("Le grade `muted` n'est pas trouvé :x:")
      let params = message.content.split(" ").slice(1);
      let time = params [1];
      if(!time) return message.reply("Veuiller spécifier un temps de mute :x:");
      if(!reason) return message.channel.send("Veuillez indiquer **une raison** :x:")
      if(member.roles.has(muteRole.id)) return message.channel.send(`${member.user} est **déjà mute** :x:`);
      let verifytime = isNaN(args[1])
      if(verifytime === false) return message.channel.send('Veuillez utiliser un temps en **secondes (s), minutes (m), days (d)** :x:')
      if(!(time.includes('0') || time.includes('1') || time.includes('2') || time.includes('3') || time.includes('4') || time.includes('5') || time.includes('6') || time.includes('7') || time.includes('8') || time.includes('9'))) return message.channel.send('(erreur ou jai du mal) Veuillez utiliser un temps en **secondes (s), minutes (m), days (d)** :x:')
      if(!(time.includes('s') || time.includes('d') || time.includes('h') || time.includes('m'))) return message.channel.send('Veuillez utiliser un temps en **secondes (s), minutes (m), days (d)** :x:')

      member.addRole(muteRole.id);
      message.channel.send(`${member.user} a été **mute** pendant **${ms(ms(time), {long: true})}** pour** ${reason}** par **${message.author}** :white_check_mark:`)

      setTimeout(function(){
          member.removeRole(muteRole.id);
          message.channel.send(`${member.user} a été **unmute** :white_check_mark:`)
          
      },ms(time));
	}
 
module.exports.help = {
  name: "tempmute"
}
