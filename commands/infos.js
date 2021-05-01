const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#7004fc')
        .setAuthor('teenlabs.fr','','https://teenlabs.fr')
        .setTitle('Informations')
        .setURL('https://teenlabs.fr/content/4-qui-sommes-nous')
        .setThumbnail('https://d1fdloi71mui9q.cloudfront.net/pJXqaoKkRveBxFLnBOkx_qeaEA43N4iAiVIqn')
        .setDescription("TeenLabs recherche et partage les meilleures activités disponibles pour les adolescent.e.s, de 12 à 20 ans.\n\nTeenLabs accompagne les jeunes pour les aider à donner au Numérique une place de choix dans leur avenir.\n\nhttps://youtu.be/e8iTg-0YdIw")
        .addField("Instagtam :","https://www.instagram.com/teenlabs.fr/")
        .addField("Facebook :","https://teenlabs.fr/content/4-qui-sommes-nous")
        .addField("Linktree :","https://linktr.ee/TeenLabs.fr")
        .addField("Ils en parlent :","https://www.cnews.fr/vie-numerique/2021-03-11/teenlabs-se-former-au-numerique-des-ladolescence-1057206");
    
        await message.channel.send(embed)
        await message.channel.send('*Une vidéo est peut être plus parlante*\n👉 https://youtu.be/e8iTg-0YdIw')
}

module.exports.config = {
    name:"infos",
    aliases:["info"]
}