const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fine')
        .setDescription('When they ask you if you are fine'),
    async execute(interaction) {
        playAudio("./audios/Otros/When They Ask You How You Are.mp3", interaction)
    },
};