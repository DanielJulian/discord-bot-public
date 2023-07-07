const { playAudio, getRandomFileFromFolderRecursive } = require("../Utils");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('random')
    .setDescription('Audio Random'),
  async execute(interaction) {
    playAudio(getRandomFileFromFolderRecursive("./audios/"), interaction)
  },
};