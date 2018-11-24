var discord = require("discord.js");
var request = require('request');
var inServer = 494448224783040514 ;
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

        cl.channels.get("497066568367341568").send("** Welcome to " + servername + "  **")
        
      }, 3000);

        
      // console.log(user.tag);

    }


  });


    // COPY SERVER LINKS TO MY SERVER-----------------------------------------------------------------------------------------------------------------------
    cl.on("message", message => {

    if (message.channel.id === "506387876809015307") {
      
      cl.channels.get("508046137085657088").send(message.content);


    }

    // PLAY BOT PLAYLIST-------------------------------------------------------------------------------------------------------------------------------------
    
    if(message.content.startsWith('->create')){ // Create new Playlist ->create [PLAYLIST NAME]
      
      

    }

    if(message.content.startsWith('->add')){ // Add new song to playlist ->add [PLAYLIST] [SONG]



    }

    if(message.content.startsWith('->play')){ // call Bot to play selected play list ->play [BOT] [PLAYLIST]



    }




  });

  




  cl.login(process.env.TOKEN);