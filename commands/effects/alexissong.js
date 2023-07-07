const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alexissong')
        .setDescription('EiN'),
    async execute(interaction) {
        playAudio("./audios/Alexis/alexissong.mp3", interaction)
    },
};