const { EmbedBuilder } = require('discord.js');
require('dotenv').config();
async function dmhandler(client,message,type,level=0) {
    const embed = new EmbedBuilder()
    const {id} = message.author
    const {guilds} = client
    const {channels} = client
    const {members} = client
    const {roles} = client
    const {emojis} = client
    const {presences} = client
    const {voiceStates} = client
    const {messages} = client
    const {threads} = client
    const {invites} = client
    const {stickers} = client
    const {stageInstances} = client
    const {bans} = client
    const {integrations} = client
    const {webhooks} = client
    const {voice} = client
    const {user} = client
    const {permissions} = client
    const {premiumSince} = client
    const {premiumSinceTimestamp} = client
    const {pending} = client
    const {joinedAt} = client
    const {joinedTimestamp} = client
    const {deaf} = client
    const {mute} = client
    const {nickname} = client
    const {displayName} = client
    const {voiceChannel} = client
    const {voiceChannelId} = client
    const {voiceSessionId} = client
    const {voiceState} = client
    const {voiceSuppressed} = client
    const {voiceRequestToSpeakTimestamp} = client
    const {voiceDeaf} = client
    const {voiceMute} = client
    const {voiceSelfDeaf} = client
    const {voiceSelfMute} = client
    const {voiceStreaming} = client
    const {voiceSpeaking} = client
    const {voiceSuppress} = client
    const {voiceRequestToSpeak} = client
    const {voiceChannelJoinable} = client
    const {voiceChannelSpeakable} = client
    const {voiceChannelDeaf} = client
    const {voiceChannelMute} = client
    const {voiceChannelSelf} = client
    const {voiceChannelSelfDeaf} = client
    const {voiceChannelSelfMute} = client
    const {voiceChannelVideo} = client
    const {voiceChannelVideoQuality} = client
    const {voiceChannelRtcRegion} = client
    const {voiceChannelUserLimit} = client

    if (type == "undefined") {
      return;
       
    } else if (type == "badword") {
        let user = client.users.cache.get(id);
        const server = client.guilds.cache.get(message.guild.id);
        embed.setTitle("Bad Word Detected")
        embed.setDescription(`Hey ${user}!, You Just Said A Bad Word ON ${server.name}!`)
        embed.setColor("Random")
       .setThumbnail(process.env.BOT_AVATAR)
        embed.setFooter({ 
            text: `Bad Word Detected By: ${user.username}`,
        })

       
        user.send({ embeds: [embed] })
    }
    else if (type == "levelup") {
        const user = client.users.cache.get(id);
        const server = client.guilds.cache.get(message.guild.id);
        embed.setTitle("Level Up!")
        embed.setDescription(
            `GG ${user}!, You Just Leveled Up to Level ${level} ON ${server.name}`
        )
        embed.setColor("Random")
        .setThumbnail(process.env.BOT_AVATAR)
        embed.setFooter({
            text: `Level Up By: ${user.username}`,
        })
        user.send({ embeds: [embed] })

    }




  
}

module.exports = {
    dmhandler: dmhandler
}