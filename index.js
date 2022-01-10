
const Discord = require('discord.js.old'),
    client = new Discord.Client(),
    config = require('./config');

const figlet = require('figlet');
const chalk = require('chalk');
const sleep = require("delay")

client.login(config.token);
client.on('ready', async () => {
    console.log(figlet.textSync("Spaso DmFriends"))
    console.log(chalk.yellowBright(`${client.user.username} connecté!`))

    const friends = client.user.friends;

    var limit = 0;
    var count = 0;
    for (amis of friends){
        if(limit === config.limitSend) await sleep(config.delay)
        if(limit === config.limitSend) limit = 0;

        amis[1].send(config.msgPub).then(() => {
            console.log(`Message envoyer: ${count++}`)
        }).catch(err => {
            console.log(chalk.redBright(err));
        })

        limit++
    }
});
