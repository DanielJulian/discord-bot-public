const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quesale')
        .setDescription('s'),
    async execute(interaction) {
        playAudio("./audios/Fede/broders_4.ogg", interaction)
    },
};