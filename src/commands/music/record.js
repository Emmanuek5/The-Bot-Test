const {SlashCommandBuilder} = require('@discordjs/builders');
const {EmbedBuilder} = require('discord.js');


module.exports = {
    usage: "Usage: /record - Records the current voice channel",
    data: new SlashCommandBuilder()
        .setName('record')
        .setDescription('Records the current voice channel'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Record')
            .setDescription('This command is currently under development')
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL() })
            .setTimestamp();
        return interaction.reply({ embeds: [embed] });
    }
}
