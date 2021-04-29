bot.login(config.token)

const spawn = require('child_process').spawn;

const process = spawn('python', ['get_receipe.py']);

process.stdout.on('data', data => {
    console.log(data.toString());
});

process.stderr.on('data', data =>{
    console.log(data.toString());
});