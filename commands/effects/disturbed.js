const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('disturbed')
        .setDescription('hoo wah ha ha'),
    async execute(interaction) {
        playAudio("./audios/Otros/hoo_wah_ah_ah_ah.mp3", interaction)
    },
};