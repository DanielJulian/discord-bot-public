const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('diededie')
        .setDescription('die de die de die'),
    async execute(interaction) {
        playAudio("./audios/Ima/diededie.ogg", interaction)
    },
};