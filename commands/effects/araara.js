const { playAudio, getRandomFileFromFolder } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('araara')
        .setDescription('ara ara'),
    async execute(interaction) {
        playAudio(getRandomFileFromFolder("./audios/Otros/ara/"), interaction)
    },
};