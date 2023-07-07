const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jueves')
        .setDescription('el fercho noma'),
    async execute(interaction) {
        if (new Date().getDay() === 4) {
            playAudio("./audios/Otros/fercho_jueves.mp3", interaction);
        } else {
            message.reply("Hoy no es Jueves :(")
        }
    },
};