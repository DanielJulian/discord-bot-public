const { SlashCommandBuilder } = require('@discordjs/builders');

var textArray = [
    'YES',
    'NO'
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yesorno')
        .setDescription('yesorno'),
    async execute(interaction) {
        var randomNumber = Math.floor(Math.random() * textArray.length);
        interaction.reply(textArray[randomNumber]);
    },
};
