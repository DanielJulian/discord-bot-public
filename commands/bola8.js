const { SlashCommandBuilder } = require('@discordjs/builders');
const { playAudio, getRandomFileFromFolder } = require("../Utils");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bola8')
        .setDescription('bola8'),
    async execute(interaction) {
        const folder_path = getRandomFileFromFolder("./audios/Bola8/");
        const folder_name = getFolderNameFromPath(folder_path);
        try {
            interaction.reply(folder_name);
        } catch (e) { }
        playAudio(getRandomFileFromFolder(folder_path + "/"), interaction)
    },
};


function getFolderNameFromPath(path) {
    const splitted = path.split("/");
    return splitted[splitted.length - 1];
}