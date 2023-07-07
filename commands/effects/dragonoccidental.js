const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dragonoccidental')
        .setDescription('s'),
    async execute(interaction) {
        playAudio("./audios/Otros/DragonOccidental.mp3", interaction)
    },
};