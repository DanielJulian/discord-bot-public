const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('narutoflute')
        .setDescription('Flute Fail!'),
    async execute(interaction) {
        playAudio("./audios/Otros/narutoflute.mp3", interaction)
    },
};