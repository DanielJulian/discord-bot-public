const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('huevos')
        .setDescription('huevos'),
    async execute(interaction) {
        playAudio("./audios/Otros/huevos.mp3", interaction)
    },
};