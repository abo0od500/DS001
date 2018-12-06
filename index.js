var discord = require("discord.js");
var request = require('request');
var schedule = require('node-schedule');
var inServer = process.env.Server ;
var inChannel =process.env.Channel ;
var stringLength = require("string-length");
var fs = require("fs");
var cl = new discord.Client();

cl.on("ready", () => {
  console.log("READY");

  var j = schedule.scheduleJob({hour: 3, minute: 00}, function(){
    cl.channels.get(inChannel).send('أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر.  \n @here');
  });

  var j = schedule.scheduleJob({hour: 14, minute: 30}, function(){
    cl.channels.get(inChannel).send('أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر.  \n @here');
  });

  });
cl.on("guildMemberAdd", (member) => {
    var server = member.guild.id;
    var servername = member.guild.name;
    var user = cl.users.get(member.id); // USER MAP
    if(server == inServer){
      setTimeout(() => { 
        cl.channels.get(inChannel).send("** Welcome to " + servername + "  **")
      }, 5000);
    }
  });
  cl.login(process.env.TOKEN);
