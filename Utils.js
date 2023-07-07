const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require("@discordjs/voice")
const path = require('path');
const fs = require('fs');

let disconnectTimeout; // Used so the bot disconnects after beign idle for x amount of time

module.exports.playAudio = function playAudio(audioPath, interaction) {
    disconnectTimeoutClear();

    const voiceChannelID = interaction.member.voice.channel.id;
    const guildID = interaction.guild.id;
    const adapterCreator = interaction.guild.voiceAdapterCreator;

    if (!voiceChannelID) {
        interaction.reply('Metete en un channel de voz macaco...');
        return
    }

    const player = createAudioPlayer();

    player.on(AudioPlayerStatus.Playing, () => {
        console.log('The audio player has started playing!');
    });

    player.on('error', error => {
        console.error(`Error: ${error.message} with resource`);
    });

    const connection = joinVoiceChannel({
        channelId: voiceChannelID,
        guildId: guildID,
        adapterCreator: adapterCreator,
    })

    connection.subscribe(player)
    const resource = createAudioResource(audioPath)
    player.play(resource)

    disconnectTimeoutStart(connection)

    interaction.reply("Ahi va el audio ñeri")
}


module.exports.getRandomFileFromFolder = function getRandomFileFromFolder(folder) {
    let files = fs.readdirSync(folder);
    return folder + files[Math.floor(Math.random() * files.length)];
};

module.exports.getRandomFileFromFolderRecursive = function getRandomFileFromFolderRecursive(folder) {
    let files = [];
    getFilesRecursively(folder, files);
    return files[Math.floor(Math.random() * files.length)];
};

module.exports.getCommandFiles = function getCommandFiles() {
    let baseFolder = './commands';
    let files = [];
    getFilesRecursively(baseFolder, files);
    return files;
};

function getFilesRecursively(base, list, currentFiles) {
    currentFiles = currentFiles || fs.readdirSync(base);
    currentFiles.forEach(
        function (file) {
            let newbase = path.join(base, file);
            if (fs.statSync(newbase).isDirectory()) {
                getFilesRecursively(newbase, list, fs.readdirSync(newbase));
            } else {
                list.push('./' + newbase);
            }
        }
    )
}


function disconnectTimeoutStart(connection) {
    disconnectTimeout = setTimeout(() => {
        connection.destroy();
    }, 300000) // 5 minutos de timeout
}

function disconnectTimeoutClear() {
    if (disconnectTimeout != null) {
        clearTimeout(disconnectTimeout);
        disconnectTimeout = null;
    }
}

