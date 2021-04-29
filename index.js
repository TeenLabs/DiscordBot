const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client()
const config = require('./config.json');
const prefix = config.prefix;

bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err,files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        return console.log("Aucune commande trouvée.");
    }

    jsfile.forEach((f,i) => {
        let props = require(`./commands/${f}`)
        console.log(`[- ${f} -] chargé!`);
        bot.commands.set(props.help.name, props);
    });

});

bot.on("ready", async () => {
    console.log(bot.user.username+" est connecté");
    bot.user.setActivity("version 1.0.0", {types:"PLAYING"});
})



bot.on("message", async message =>{
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);

    let commandfile = bot.commands.get(command.slice(prefix.length));
    if (commandfile) commandfile.run(bot,message,args);
})

