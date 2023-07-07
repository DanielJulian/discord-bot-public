const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('imaondrugs')
        .setDescription('s'),
    async execute(interaction) {
        playAudio("./audios/Ima/imaondrugs.ogg", interaction)
    },
};