const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
	var res = message.content.split(" ");
	//~say [couleur] [titre] [msg] 
	if(res[0] === "~say")
	{	
		//Check for parameters
		if(res.length == 4)
			{ 
				if(res[1]==="bleu")
				{
					message.channel.send({embed: {
  						color: 255,
  						title: res[2],
  						description: res[3]
					}});
				}
				if(res[1]==="blanc")
				{
					message.channel.send({embed: {
  						color: 16777215,
  						title: res[2],
  						description: res[3]
					}});
				}
			}
			//Default
			else
			{
				message.channel.send({embed: {
  					color: 16777215,
  					title: res[1],
  					description: res[2]
				}});
			}
	}
	else{

	//Read each word so that it can find insults and doesn't care about casse
	res.forEach(function(element) {
  	if (element.toLowerCase() === 'test') {
    		message.delete(0)
        	.then(msg => console.log(`Deleted message from ${msg.author.username}`))
        	.catch(console.error);
        	message.reply('Bonjour, veuillez respecter les règles de la communauté');
  		}
	});
}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
