const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('miercoles')
        .setDescription('It is wednesday my dudes'),
    async execute(interaction) {
        playAudio("./audios/Otros/it is wednesday my dudes.mp3", interaction)
    },
};