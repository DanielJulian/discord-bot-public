const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

clientId = "596858198384705546"
token = "NTk2ODU4MTk4Mzg0NzA1NTQ2.Gf_JAB.KfgPyCTNW8A6hbTvPjU8g1jTnD18MfPrO4V4ys"


module.exports.deleteAllCommands = function deleteAllCommands(guildId) {
    const rest = new REST({ version: '9' }).setToken(token);
    rest.get(Routes.applicationGuildCommands(clientId, guildId))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        return Promise.all(promises);
    });
}