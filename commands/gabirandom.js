const { playAudio, getRandomFileFromFolderRecursive } = require("../Utils");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gabirandom')
    .setDescription('Audio Random de Gabi'),
  async execute(interaction) {
    playAudio(getRandomFileFromFolderRecursive("./audios/Gabi/"), interaction)
  },
};