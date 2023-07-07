const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wombocombo')
        .setDescription('wombocombo'),
    async execute(interaction) {
        playAudio("./audios/Otros/wombo combo.mp3", interaction)
    },
};