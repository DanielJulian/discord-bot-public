const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('martes')
        .setDescription('MARTEEEEEEEEEEEEEEEEEEEEES'),
    async execute(interaction) {
        if (new Date().getDay() === 2) {
            playAudio(message, "./audios/Otros/martes.mp3", interaction)
        }
        else {
            message.reply("Hoy no es martes :(")
        }
    },
};