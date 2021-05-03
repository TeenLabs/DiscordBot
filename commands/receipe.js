const Discord = require('discord.js')
const fs = require('fs')

module.exports.run = async(bot,message,args) => {
    if (fs.existsSync('receipe.json') == false) {
        return message.channel.send(":x: Les recettes n'ont pas étées chargées.\nFait `%load_receipe` pour les charger puis réutilise cette commande");
    }
    const recette = require('../receipe.json')
    tags = recette.tags.toString()

    const embed = new Discord.MessageEmbed()
        .setColor('#7004fc')
        .setTitle(`${recette.name}`)
        .setURL(`${recette.link}`)
        .setAuthor(`Auteur : ${recette.author}`)
        .setDescription(`${recette.tutorial.ingredients}\n\n${recette.tutorial.preparation}`)
        .setImage(`${recette.img_link}`)
        .setFooter(`${tags.replace(/,/g," / ")}`);
    await message.channel.send(embed)
}

module.exports.config = {
    name:"recette",
    aliases:["rec","receipe","recettes"]
}