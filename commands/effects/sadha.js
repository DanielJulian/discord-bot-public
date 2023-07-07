const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sadha')
        .setDescription('sadha'),
    async execute(interaction) {
        playAudio("./audios/Otros/sadha.mp3", interaction)
    },
};