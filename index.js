var discord = require("discord.js");
var request = require('request');
var inServer = process.env.Server ;
var inChannel =process.env.Channel ;
var stringLength = require("string-length");
var fs = require("fs");
var cl = new discord.Client();
cl.on("ready", () => {
console.log("READY");
  });
cl.on("guildMemberAdd", (member) => {
    var server = member.guild.id;
    var servername = member.guild.name;
    var user = cl.users.get(member.id); // USER MAP
    if(server == inServer){
      setTimeout(() => { 
        cl.channels.get(inChannel).send("** Welcome to " + servername + "  **")
      }, 3000);
    }
  });
  cl.login(process.env.TOKEN);