const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('scream')
        .setDescription('aaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    async execute(interaction) {
        playAudio("./audios/Otros/Scream.mp3", interaction)
    },
};