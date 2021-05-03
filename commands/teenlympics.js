const Discord = require('discord.js')

module.exports.run = async(bot,message,args,prefix) => {

    const embed = new Discord.MessageEmbed()
        .setColor('#f8f4fc')
        .setAuthor('teenlabs.fr','','https://teenlabs.fr')
        .setTitle('🏆 TeenLympics :')
        .setDescription("Les Teenlympics consistent tout simplement en challenges !\n1 mercredi sur 2, <@797071621831393310> lancera un nouveau défi à réaliser.\nVous aurez jusqu'au mercredi suivant pour le faire.")
        .addField("Où ça se passe ?","Pour les annonces des Teenlympics et les résultats, rendez-vous ici : <#819253450139369472>\nPour débatre, poser des questions sur les Teenlympics, c'est par là : <#825991363136061440>");
    
    const embed2 = new Discord.MessageEmbed()
        .setColor('#7004fc')
        .setTitle('Précédents Teenlympics')
        .addField("Teenlympics  #1 :","Donner personnage historique ou de pop culture à chaque domaine de TeenLabs (les 7 domaines/activités sont : https://teenlabs.fr/2-les-activites)\n\nNoms retenus (1/domaine) :\n- Alan Turing en Coding\n- Iron Men en Team & Projet\n- Squeezie en Communication\n- Tetris en Gaming\n- Tim Berners Lee en Web & App\n- Rick de Rick&Morty en Robot & Fablab\n- Moi, moche et méchant en Digital Arts\n\nMessage : <#821791533014712320>")
        .addField("Teenlympics  #2 :","Dessiner un logo pour les TeenLympics.\n\nLogo vainqueur : <#825090843068989490>\n\nMessage : <#824327737749274704>")
        .addField("Teenlympics  #3 :","Créer un chatbot à l'aide d'artibot.\n\nBot vainqueur : <#836616570599112824>\n\nMessage : <#831924481584529459>")
        .addField("Teenlympics  #4 :","Créer une animation en CSS.\n\nVainqueur : Résultats à venir\n\nMessage : <#836996148149092422>");
   
        await message.channel.send(embed)
        await message.channel.send(embed2)
}

module.exports.config = {
    name:"teenlympics",
    aliases:["tl","teenlympic","tenlympic","teenlimpic","teenlimpyc","teenlimpycs","teenlimpics"]
}
