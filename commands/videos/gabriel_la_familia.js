const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gabrielfamilia')
    .setDescription('Si gabi'),
  async execute(interaction) {
    await interaction.reply({ attachment: [new MessageAttachment("./videos/gabriel la familia.mp4")] });
  },
};