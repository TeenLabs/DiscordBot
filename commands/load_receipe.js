const Discord = require('discord.js')
const fs = require('fs');
const {PythonShell} = require('python-shell')

async function test () {
    PythonShell.run('get_receipe.py', null, function (err) {
            if (err) throw err;
            console.log('finished');
        });
}


module.exports.run = async(bot,message,args) => {
    test()
    message.channel.send('Dernière recette chargée\nFaites `%recette` pour y accèder')
}


module.exports.config = {
    name:"charge les recettes",             // name est le nom de la commande
    aliases:["load_receipe","charge_recette"]   // aliases est une liste regroupant les alias de cette commande
}
