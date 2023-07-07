const { playAudio, getRandomFileFromFolder } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('navidad')
        .setDescription('Feliz navidad'),
    async execute(interaction) {
        playAudio(getRandomFileFromFolder("./audios/Otros/Navidad/"), interaction)
    },
};