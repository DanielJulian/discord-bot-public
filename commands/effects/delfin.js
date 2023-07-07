const { playAudio, getRandomFileFromFolder } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('delfin')
        .setDescription('El pequeño delfin que hacia..'),
    async execute(interaction) {
        playAudio(getRandomFileFromFolder("./audios/Otros/Delfin/"), interaction)
    },
};