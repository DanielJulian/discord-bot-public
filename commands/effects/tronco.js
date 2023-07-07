const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tronco')
        .setDescription('Que pasa tronco!'),
    async execute(interaction) {
        playAudio("./audios/Otros/tronco.ogg", interaction)
    },
};