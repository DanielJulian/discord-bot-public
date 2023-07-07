const { playAudio } = require("../../Utils");;
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('richiecallate')
        .setDescription('Richie callate un poco'),
    async execute(interaction) {
        playAudio("./audios/Richie/callate/richie_callate_un_poco.mp3", interaction)
    },
};