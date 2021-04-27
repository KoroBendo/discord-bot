module.exports = async(client) => {

    client.user.setStatus('available')
    client.user.setPresence({
      game: {
          name: 'v!help - by DreamShow',
          type: "STREAMING",
          url: "https://www.twitch.tv/user"
        }
    })
};
