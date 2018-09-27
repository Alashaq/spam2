const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', '.');
if (!rank) return message.reply('انت لا تمتلك الرتبه المخصصه لهذا الامر')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client.on('message', message => {
    if(message.content === '^^DailyForAll'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '^^AllCredit'){
        message.channel.send('#credits')
    }
});


client.on('message', message => {
    if(message.content === '^^RepForRobben'){
        message.channel.send('#rep <@371060496276783104>')
    }
});

client.on('message', message => {
    if(message.content === '^^RepForBoss'){
        message.channel.send('#rep <@443152649899212810>')
    }
});

client.on('message', message => {
    if(message.content === '^^RepForAlashaq'){
        message.channel.send('#rep <@346045919072092161>')
    }
});



client.on('message', message => {
if (message.content === "سبام" + "<@" + `${client.user.id}` + ">") {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login('NDk0NTM5NzQ4ODc1MDQyODI3.Do1C0w.wBk0j1jZiQcHB0FHu4apfKZWRUw');
