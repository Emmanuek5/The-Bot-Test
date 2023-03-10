const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, Colors } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");

const configureration = new Configuration({
  apiKey: process.env.KEY,
});

const openai = new OpenAIApi(configureration);

module.exports = {
  usage: "Ask Chat Gpt A Question",
  data: new SlashCommandBuilder()
    .setName("imagine")
    .setDescription("Turn Your Imagination Into Reality")
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setRequired(true)
        .setDescription("The Image Prompt")
    ),
  async execute(interaction) {
    const prompt = interaction.options.getString("prompt");
    await interaction.deferReply();
    try {
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });
        const image_url = response.data.data[0].url;
      const embed = new EmbedBuilder().setImage(image_url).setTitle(">"+prompt)


      await interaction.editReply({embeds: [embed] });
    } catch (error) {
      await interaction.editReply({
        content: `Request Faild With Code *${error}*`,
      });
    }
  },
};
