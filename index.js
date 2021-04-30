// Importation des Librairies 
const Discord = require('discord.js');
const fs = require('fs');                   // fs sert à écrire dans et récupérer le contenu de fichiers/dossiers

const bot = new Discord.Client()
require('dotenv').config();                 // dotenv permet de gérer des variables d'environement
const prefix = '%';


bot.commands = new Discord.Collection();    // collection de commandes (ici ça nous permet de ranger chaque commande dans un fichier)
bot.aliases = new Discord.Collection();     // collection pour les alias des commandes


// SI : pas de token dans le fichier '.env',
// ALORS : renvoie 'Pas de token' et stop le programme
if (!process.env.TOKEN) return console.log('Pas de token');


// Chargement des fichiers du dossier commands dans la collection bot.commands
//            et des alias des commandes dans la collection bot.aliases 
fs.readdir("./commands/", (err,files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.endsWith('.js'))       // on filtre les fichiers finissant par .js

    // SI : pas de fichier avec l'extension .js dans le dossier 'commands',
    // ALORS : renvoie "Aucune commande trouvée." et stop le programme
    if (jsfile.length <= 0) {
        return console.log("Aucune commande trouvée.");
    }

    jsfile.forEach((f,i) => {                               // On parcourt tous les fichiers en .js dans le dossier 'commands'...
        let props = require(`./commands/${f}`)
        console.log(`[ ${f.substr(0,f.length - 3).toUpperCase()}.js ] chargé!`);

        bot.commands.set(props.config.name, props);         // ...puis on les charges dans la collection bot.commands
        props.config.aliases.forEach(alias =>{
            bot.aliases.set(alias, props.config.name)       // ...et enfin on charge les alias de chaque commandes dans la collection bot.aliases
        })
    });

});


//  SI bot connecté, 
//  ALORS : execute ce qui est entre { }
bot.on("ready", async () => {
    console.log(`============================\n||  ${bot.user.username} est connecté  ||\n============================\n`);
    bot.user.setActivity("version 1.0.0", {types:"STREAMING"});
})

//  SI un message est envoyé (sur le serveur), 
//  ALORS : execute ce qui est entre { }
bot.on("message", async message =>{
    if (message.author.bot) return;                     // si le message vient d'un bot on ne prend pas en compte
    if (!message.content.startsWith(prefix)) return;    // pareil si le message ne commence pas par le prefix

    let content = message.content.split(" ");     // exemple de commande : %salut comment ca va ? : content sera alors = %salut,comment,ca,va,?
    let command = content[0];                     // avec la même commande : command est = %salut
    let args = content.slice(1);                  // toujours avec la même : args est = comment,ca,va,?

    
    let commandfile = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)))
    if (commandfile) commandfile.run(bot,message,args);
})

// Connexion du bot via le token
bot.login(process.env.TOKEN)