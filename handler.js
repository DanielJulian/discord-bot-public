const prefix = '/1k';
const { getRandomFileFromFolder } = require("./Utils");
const { AttachmentBuilder } = require('discord.js');

function checkAramTag(bot, message) {
    const aramCode = '<@&785217011407519774>'

    if (message.content == aramCode) {
        const attachment = new AttachmentBuilder(getRandomFileFromFolder("./images/aram/"))
        message.channel.send({ files: [attachment] }) // If I wanted to send text, add context: "text" in the json
    }
}

function checkValorantTag(bot, message) {
    const valorantCode = '<@&709112216007213076>'

    if (message.content == valorantCode) {
        const attachment = new AttachmentBuilder(getRandomFileFromFolder("./images/valorant/"))
        message.channel.send({ files: [attachment] })
    }
}


module.exports.handleMessage = function handleMessage(bot, message) {
    checkAramTag(bot, message);
    checkValorantTag(bot, message);
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // If we dont have a match for the command
    if (!command) {
        message.reply('No te estaría entendiendo... Si necesitas ayuda, escribí /1k help');
        return
    }

    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('Ocurrió un error al ejecutar ese comando... contactate con el dano nomá para asistencia, gracias.');
    }

    return true;
};