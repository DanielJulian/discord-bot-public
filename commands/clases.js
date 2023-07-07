const { playAudio } = require("../Utils");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mañananohayclases')
    .setDescription('s'),
  async execute(interaction) {
    playAudio(
      "./audios/Otros/mañana no hay clases.mp3",
      interaction
    )
  },
};