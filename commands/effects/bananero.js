const { playAudio, getRandomFileFromFolder } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bananero')
        .setDescription('Sape'),
    async execute(interaction) {
        playAudio(getRandomFileFromFolder("./audios/Otros/Bananero/"), interaction)
    },
};