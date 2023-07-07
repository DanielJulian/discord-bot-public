const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('omg')
        .setDescription('OH mai gaaaad'),
    async execute(interaction) {
        playAudio("./audios/Otros/omg.mp3", interaction)
    },
};