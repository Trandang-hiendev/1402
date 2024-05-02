const keepAliveServer = require('./keep_alive.js');
const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
  client.user.setActivity("miss you :<", { type: "STREAMING", url: "https://youtu.be/JXn03fcoLT8?si=Dce3k_PNBDVp0zlM" })
  setInterval(async () => {
    client.channels.fetch("1235470514252943391")
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});
client.login(process.env.token);
