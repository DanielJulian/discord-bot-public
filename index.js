const utils = require("./Utils");
const handler = require("./handler");
const fs = require('fs');
const { Client, GatewayIntentBits , Collection, Events } = require('discord.js');
const { deleteAllCommands } = require("./delete-all-commands");
const { deployCommands } = require("./deploy-commands");


const client = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildBans,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildVoiceStates,
    ]
  });


client.commands = new Collection();
const commandFiles = utils.getCommandFiles();

for (const file of commandFiles) {
	const command = require(file);
	// set a new item in the Collection with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


client.on(Events.MessageCreate, message => {
    handler.handleMessage(client, message);
});


client.on(Events.MessageReactionAdd, function(messageReaction, user) {
    const emojiName = messageReaction._emoji.name;
    const valorantReaction = messageReaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === 'valorant');
    if (messageReaction.message.content.toLowerCase().includes(valorantReaction.toString())) {
        if (emojiName === 'masuno') {
            let masUnoCount = messageReaction._emoji.reaction.count;
            if (masUnoCount == 4) {
                messageReaction.message.channel.send(`SI ${user}. Sale con fritas ndeaaa`);
            }
            else if (masUnoCount < 4) {
                messageReaction.message.channel.send(`SI ${user}. Faltan ${4 - masUnoCount} y sale bruh`);
            } else {
                messageReaction.message.channel.send(`${user} llegaste tarde maquinola, disfrutá el stream :movie_camera:`);
            }
        } else if (emojiName === 'menosuno') {
            messageReaction.message.channel.send(`Alta putita ${user}`);
        }
    }
});




client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


client.once(Events.ClientReady, () => {
    const guilds = client.guilds.cache.map(guild => guild.id);

    // Refresh slash commands in all servers
    guilds.forEach(guild => {
        //deleteAllCommands(guild)
    });

    guilds.forEach(guild => {
        //deployCommands(guild)
    });

    console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);
