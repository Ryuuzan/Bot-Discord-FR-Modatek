const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.delete(0)
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error)
        .edit('Bonjour'+ ${msg.author.username}+', veuillez respecter les règles de la communauté');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
