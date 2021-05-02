const Discord = require('discord.js')

module.exports.run = async(bot,message,args,prefix) => {

    const embed = new Discord.MessageEmbed()
        .setColor('#7004fc')
        .setAuthor('teenlabs.fr','','https://teenlabs.fr')
        .setTitle('Commandes :')
        .addField("`infos`","- Mais au fait c'est quoi TeenLabs ? -Essaye cette commande")
        .addField("`help`","Renvoie ce message que tu lis")
        .addField("`charge_recette`","Charge la dernière recette du site https://www.cuisine-libre.org")
        .addField("`recette`","Renvoie la dernière recette chargée");    

    const embed2 = new Discord.MessageEmbed()
        .setColor("#f8f4fc")
        .setTitle('Quelques infos en +')
        .setDescription(`Mon préfix actuel est : ${prefix}\n\nN'oublie pas d'de l'ajouter devant chaque commande\n`+"exemple : `"+`${prefix}`+"help`")
        .addField("Code Source :","Vous pouvez retrouver mon code source ici : https://github.com/TeenLabs/DiscordBot")
        .addField("Version :",`v.${0.2} - En développement`)
        .addField("Contributeurs :","<@!337950764498419732>");

    await message.channel.send(embed)
    await message.channel.send(embed2)
}

module.exports.config = {
    name:"help",
    aliases:["aide","aide bot"]
}
