module.exports.run = async (bot, msg, args) => {
    const Discord = require("discord.js");
    const fetch = require("snekfetch");
    const hexcols = [`#4285F4, #2D313C, #ffd700`];

    if(!args) {
      return reply("Donnez-moi quelque chose à chercher idiot!");
    }
    fecth.get("http://api.urbandictionary.com/v0/define?term" + args).then(res => {
      if(res.body.list[0] === undefined) {
        return msg.channel.send("Could not find that term");
      }
      const definition = res.body.list[0].defenition;
      const word = res.body.list[0].word;
      const Author = res.body.list[0].author;
      const exam = res.body.list[0].example;
      const thump = res.body.list[0].thumbs_up;
      const thumbdown = res.body.list[0].thumbs_down;
      const embed = new Discord.RichEmbed()
      .setColor(hexcols[~~(Math.random() * hexcols.length)])
      .setTitle(`Info on the word: **${word}**`)
      .addField("Definition:", `${defenition}`)
      .addField("Author:", `${author}`)
      .addField("Example:", ~`${exam}`)
      .addField("Ratings", `:thumbsup: ${thumbup} :thumbsdown: ${thumbdown}`, true)
      .setThumbnail("Here is your search results", msg.author.displayAvatarURL);
      msg.channel.send({embed}).catch(e => logger.error(e));
    }).catch(err => {
      if(err) {}
    });
  };


  module.exports.help = {
    name: "Urban"
  }
