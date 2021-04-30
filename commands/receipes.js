const Discord = require('discord.js')
const fs = require('fs')
const spawn = require("child_process").spawn;







// lorsque la commande à été appelée, on apelle la fonction loadReceipes
module.exports.run = async(bot,message,args) => {

    if (fs.existsSync('receipe.json') == true) {
        const receipe = require('../receipe.json')
        const embed = new Discord.MessageEmbed()
            .setColor('#F099ff')
            .setTitle(`${receipe.name}`)
            .setURL(`${receipe.link}`)
            .setAuthor(`Auteur : ${receipe.author}`)
            .setDescription(`${receipe.tutorial.ingredients}\n\n${receipe.tutorial.preparation}`)
            .setImage(`${receipe.img_link}`)
            .setFooter(`${receipe.tags.replace("[","").replace("]","").replace(/,/g,"").replace(/'/g,"").split(" ").join(' / ')}`);
        await message.channel.send(embed)
    }

    else{
        
        const pythonProcess = await spawn('python',["../get_receipe.py"]);
        pythonProcess.stdout.on('data', (data) => {
            console.log(data)
        });
        
        const receipe = require('../receipe.json');
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${receipe.name}`)
            .setURL(`${receipe.link}`)
            .setAuthor(`Auteur : ${receipe.author}`)
            .setDescription(`${receipe.tutorial.ingredients}\n\n${receipe.tutorial.preparation}`)
            .setImage(`${receipe.img_link}`)
            .setFooter(`Tags : ${receipe.tags.replace("[","").replace("]","").replace(/,/g,"").replace(/'/g,"").split(" ").join(' / ')}`);
        await message.channel.send(embed)
    }
}


module.exports.config = {
    name:"recette",             // name est le nom de la commande
    aliases:["rec","receipe"]   // aliases est une liste regroupant les alias de cette commande
}
