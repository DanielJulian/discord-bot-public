const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('titanicflute')
        .setDescription('Titanic Flute Fail'),
    async execute(interaction) {
        playAudio("./audios/Otros/titanicflute.mp3", interaction)
    },
};