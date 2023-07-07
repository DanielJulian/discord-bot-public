const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nabufeo')
        .setDescription('s'),
    async execute(interaction) {
        playAudio("./audios/Fede/nabu_feo.ogg", interaction)
    },
};