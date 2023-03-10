const {SlashCommandBuilder} = require('@discordjs/builders')
const {EmbedBuilder,PermissionFlagsBits,ActionRowBuilder,SelectMenuBuilder,StringSelectMenuBuilde,PermissionsBitField} = require('discord.js')

module.exports = {
  usage: "Usgae: /planel  ",
  data: new SlashCommandBuilder()
    .setName("panel")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .setDescription("Create a reaction role panel")
    .setDMPermission(),
  async execute(interaction, client) {
    await interaction.deferReply();
    const { guildId, member, guild, channel } = interaction;
    const ReactionRoleSchema = require("../../../models/roles.js");

    try {
      const data = await ReactionRoleSchema.findOne({
        GuildId: guildId,
      });

      if (!data.roles.length > 0) {
        return interaction.editReply({
          content: "This Server has no data",
          ephemeral: true,
        });
      }
      const roles = data.roles;
      const embed = new EmbedBuilder()
        .setTitle("Reaction Roles")
        .setDescription("Select a role to get it")
        .setColor("Random");
      const options = data.roles.map((x) => {
        return {
          label: x.name,
          description: x.description,
          value: x.role,
          emoji: x.emoji,
        };
      });

      const menuComponent = [
        new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId("roles")
            .setPlaceholder("Select a role")
            .setMaxValues(options.length)
            .addOptions(options)
        ),
      ];
      const msg = await channel.send({
        embeds: [embed],
        components: menuComponent,
      });
      interaction.editReply({ content: "Created the panel", ephemeral: true });
    } catch (error) {}
  },
};


