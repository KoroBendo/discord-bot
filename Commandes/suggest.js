const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
	
    if(!args[0]) return message.channel.send('Utiliser: /suggest "question"')

    const pollEmbed = new Discord.RichEmbed()
        .setDescription(`Sondage demandé par ${message.author.username}`)
        .setColor("#ffce00")
        .setFooter('Appuyez sur les réactions ci-dessous')
        .setTitle(args.join(' '))

    let msg = await message.channel.send(pollEmbed);
    await msg.react('✅')
    await msg.react('❌')
};

module.exports.help = {
    name: "suggest"
};