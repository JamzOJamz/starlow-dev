const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NDc2MTI5NDA2Mjg1MzgxNjQ0.DkpmFw.tcCTNWVG7gJSXEqaXncUdLfY0kQ'

bot.on('message', function(message){
    if(message.content == 's!hello Starlow')
    {
        message.reply('hello! How are you?');
    }
    if(message.content == 's!help')
    {
        message.reply('`Here is a list of all of my current commands. Please note that I am currently in a beta stage, so if a command does not work, please send a DM to a developer.`')
    }
});

bot.on('ready', () => { bot.user.setGame('use s!help') })

bot.on('ready',function(){
    console.log("Successfully booted!");
})

bot.login(TOKEN);