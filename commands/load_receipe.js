const Discord = require('discord.js')
const fs = require('fs');
const { get } = require('http');
const {PythonShell} = require('python-shell')

async function test () {
    PythonShell.run('get_receipe.py', null, function (err) {
            if (err) throw err;
            let today = new Date();
            let date = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`
            let heure = `${today.getHours()}:${today.getMinutes()}`
            console.log('programme `get_receipe.py` executé le  '+`${date} à ${heure}`);
        });
}


module.exports.run = async(bot,message,args) => {
    test()
    message.channel.send('Dernière recette chargée\nFaites `%recette` pour y accèder')
}


module.exports.config = {
    name:"charge la recette",             // name est le nom de la commande
    aliases:["load_receipe","charge_recette","charge la dernière recette","charge les recettes"]   // aliases est une liste regroupant les alias de cette commande
}
