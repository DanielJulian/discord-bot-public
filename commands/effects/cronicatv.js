const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cronicatv')
        .setDescription('Cronica TV pa'),
    async execute(interaction) {
        playAudio("./audios/Otros/cronicatv.mp3", interaction)
    },
};