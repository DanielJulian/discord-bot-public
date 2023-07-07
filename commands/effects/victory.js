const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('victory')
        .setDescription('victory'),
    async execute(interaction) {
        playAudio("./audios/Otros/victory.mp3", interaction)
    },
};