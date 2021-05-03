const Discord = require('discord.js')

module.exports.run = async(bot,message,args,prefix) => {
    //if (!message.member.roles.cache.has('812247075202662431') && !message.member.roles.cache.has('831830033492344833')) return console.log('pas les roles');

    const filter = m => m.author.id === message.author.id

    message.channel.send('Quel était le nom du Teenlympics ?')
    message.channel.awaitMessages(filter,{time:10000}).then((collected) => {
        var nom = collected.first().content
        message.channel.send(nom)

        message.channel.send("Quel projet l'a remporté (id message) ?")
        message.channel.awaitMessages(filter,{time:20000}).then((collected) => {
            var id_winner = collected.first().content
            message.channel.send(id_winner)

            message.channel.send("Quel était le message d'annonce de ce TeenLympic (id message) ?")
            message.channel.awaitMessages(filter,{time:30000}).then((collected) => {
                var id = collected.first().content
                message.channel.send(id)
            }).catch((e) => {
                message.channel.send(":x: Pas de réponse. Commande annulée")
                console.log(e)
            })

        }).catch((e) => {
            message.channel.send(":x: Pas de réponse. Commande annulée")
            console.log(e)
        })

    }).catch((e) => {
        message.channel.send(":x: Pas de réponse. Commande annulée")
        console.log(e)
    })

}

module.exports.config = {
    name:"addteenlympics",
    aliases:["addtl","add_tl","add_teenlympic","add_teenlympic","atl"]
}
