const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('godno')
        .setDescription('GOD NO PLEASE'),
    async execute(interaction) {
        playAudio("./audios/Otros/godno.mp3", interaction)
    },
};