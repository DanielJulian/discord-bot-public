const { playAudio } = require("../Utils");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tortuga')
    .setDescription('Gemido de tortuga'),
  async execute(interaction) {

    await interaction.reply({ attachment: [new MessageAttachment("./images/tortuga.gif")] });

    playAudio("./audios/Otros/Gemido de tortuga.mp3", interaction)
  },
};