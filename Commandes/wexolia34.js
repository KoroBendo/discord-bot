const Discord = require('discord.js');

module.exports.run = (client, message, args) => {    
    let member = message.guild.member(message.author);
    let members = message.guild.member(message.author.id);
    let role = message.guild.roles.find(x => x.name === "Membre");
    member.addRole(role).catch(console.error);
    members.addRole(role).catch(console.error);

};

module.exports.help = {
    name: 'wexolia34'
};