const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#ffce00")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription(":grinning: Bienvenue " + user + " sur " + user.guild.name + " !")
        .setFooter("Nevoria | By DreamShow")
    user.guild.channels.get("836611465268035620").send(joinEmbed)
});

client.on("guildMemberRemove", user =>{
  let leaveEmbed = new Discord.RichEmbed()
  .setColor("#ffce00")
  .setAuthor(user.user.username, user.user.displayAvatarURL)
  .setDescription(":cry: Sniff... " + user + " a quitté " + user.guild.name + " !")
  .setFooter("Nevoria | By DreamShow")
user.guild.channels.get("689123154932793348").send(leaveEmbed)
});

client.on('ready', () => {
  console.log("Bien Connecté");
});

client.on('message', msg => {
  if (msg.content === 'v!ip') {
    msg.reply('play.nevoria.com , http.nevoria.fr');
  }
});

/*Mp all*/
client.on('message', msg => {
  if (msg.guild && msg.content.startsWith('/dmbot')) {
    let text = msg.content.slice('/dmbot'.length); // cuts off the /dmbot part
    msg.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text);
    });
  }
});

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
      game: {
          name: 'v!help - by DreamShow',
          type: "STREAMING",
          url: "https://www.twitch.tv/user"
      }
  });
});

client.login('process.env.TOKEN');

client.on('message', msg => {
  if (msg.content === 'bonjour') {
    msg.reply('hola');
  }
});

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commandes trouvée !");

    commandes.forEach((f) => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events chargés`);

    f.forEach((f) => {
       const events = require(`./Events/${f}`);
       const event = f.split(".")[0];

      client.on(event, events.bind(null, client));
  });
});

"use strict";

var banni = [
   "fdp",
   "pute",
   "salope",
   "ntm",
];

//Discord.js
client.on("message", (msg) => {
  if (banni.some(x => msg.content.toLowerCase().split(/\s+/).includes(x))) {
    return msg.channel.send("Attention à ton langage !");
  }
});
