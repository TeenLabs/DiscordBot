const Discord = require('discord.js')
const fs = require('fs')
const spawn = require('child_process').spawn;

var exist = false;
function isExisting () {
    if(fs.existsSync('receipe.json')) {
        exist = true;
    }
}

// loadReceipes est une fonction qui permet d'executer le fichier 'get_receipe.py'
function loadReceipes(message) {
    const process = spawn('python', ['get_receipe.py']);

    process.stdout.on('data', data => {
        
    });

    process.stderr.on('data', data =>{
        console.log(data.toString());
        
    });
}

// lorsque la commande à été appelée, on apelle la fonction loadReceipes
module.exports.run = async(bot,message,args) =>{
    if (exist==true) {
        const receipe = require('../receipe.json')
        console.log(receipe.name)
        console.log(receipe.author)
        console.log(receipe.link)
        console.log(receipe.img_link)
        console.log(receipe.tags)
        console.log(receipe.tutorial.ingredients)
        console.log(receipe.tutorial.preparation)
    }
    else{
        await loadReceipes(message)
        const receipe = require('../receipe.json')
    }
}


module.exports.config = {
    name:"recette",             // name est le nom de la commande
    aliases:["rec","receipe"]   // aliases est une liste regroupant les alias de cette commande
}
