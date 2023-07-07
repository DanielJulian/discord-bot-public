const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bruh')
        .setDescription('Braaa'),
    async execute(interaction) {
        playAudio("./audios/Otros/Bruh.mp3", interaction)
    },
};