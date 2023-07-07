const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('allbymyself')
        .setDescription('All by myseeeeelf'),
    async execute(interaction) {
        playAudio("./audios/Otros/allbymyself.mp3", interaction)
    },
};