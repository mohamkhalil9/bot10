const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help || +inv`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "+";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });

client.on('message', function(message) {
    if (message.content == "+clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});
	
  client.on('message', message => {
    if (message.content.startsWith("+link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 25,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
دد استخدامات الرابط : 25**`)

    }
});


client.on('message', message => {

    if (message.content === "+mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === "+umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات?")
           });
             }



});

client.on('message', message => {
const prefix = "+";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("492086928397565952").send({embed : banembed})
}
});

  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**baneed from this server**`)

}
});

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

client.on("message", message => {
    var prefix = "W";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });
client.on('message', message => {
 var prefix = "+"
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Support Team");
        let ticketsStation = message.guild.channels.find("name", "TICKETS");
        if(!args) {
            return message.channel.send('الرجاء كتابة سبب التذكرة');
        };
                if(!support) {
                    return message.channel.send('**Please make sure that `Support Team` role exists and it\'s not duplicated.**');
                };
            if(!ticketsStation) {
                message.guild.createChannel("Ticket", "category");
            };
                message.guild.createChannel(`𝑻𝑰𝑪𝑲𝑬𝑻`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`تم انشاء تذكرتك. [ ${ticket} ]`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**تذكرة جديدة.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('سبب التذكرة', args)
                                .addField('صاحب التذكرة', message.author)
                                .addField('الروم', `<#${message.channel.id}>`);

                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("𝑻𝑰𝑪𝑲𝑬𝑻")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("هل تريد فعلآ اغلاق التذكرة ؟.")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {

                    
                        const filter = msg => msg.content.startsWith(prefix + 'close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**Operation has been cancelled.**')) .then((c) => {
                                    c.delete(4000);
                                })
                                    
                            
                        })


                    })


            
    }
});

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+bc-users')){
if(!message.author.id === 'اي دي صاحب البوت') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
             Please Select Your Language
${prefix}help-ar
${prefix}help-en
             
      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
 if (message.content === "*help-ar") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
            اختر:
 
*help-gn-ar ⇏ اوامر عامة
*help-ad-ar ⇏ اوامر ادارة السيرفر
             
`)
message.channel.sendEmbed(embed)
 
}
});
 
client.on("message", message => {
    if (message.content === "*help-en") {
     const embed = new Discord.RichEmbed()  
         .setColor("RANDOM")
         .setDescription(`
         
              Chose:
               
   ##help-gn-en ⇏ General commands
   
   ##help-ad-en ⇏ Server management commands
               
   `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help-gn-ar") {
     message.channel.send('**تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
===================== اوامر عامة =====================
*bot ➾ سرعة اتصالك بالانترنت
*image ➾ صورة السيرفر
=========================================================
**و قريبا المزيد من الاوامر**
=========================================================
Support server : https://discord.gg/Fq233KJ - https://discord.gg/KPpVGvv
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
 
 
 
 
   client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help-gn-en") {
     message.channel.send('**Check your dm** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== General commands =====================
*bot ➾ bot details
*image ➾ server image
=========================================================
More commands soon
=========================================================
Support server : https://discord.gg/Fq233KJ - https://discord.gg/KPpVGvv
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help-ad-ar") {
     message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== اوامر ادارية =====================
*mute ➾ اعطاء ميوت لشخص
*unmute ➾ الغاء الميوت من شخص
*clear ➾ حذف الرسائل
*ban ➾ اعطاء باند
*kick ➾ الطرد من السيرفر
*mutechannel ➾ قفل الشات
*unmutechannel ➾ فتح الشات
=========================================================
وقريباً المزيد من الاكواد
=========================================================
غير "*"لا "+"
Support server : https://discord.gg/Fq233KJ - https://discord.gg/KPpVGvv
`)
   message.author.sendEmbed(embed)
   
}
});
 
client.on("message", message => {
 var prefix = "*";
if (message.content === "*help-ad-en") {
  message.channel.send('**Check your dm** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`
         
==================== Management commands =====================
*mute ➾ give mute
*unmute ➾ unmute
*clear ➾ clear all messages
*ban ➾ give ban
*kick ➾ kick members from server
*mutechannel ➾ close chat
*unmutechannel ➾ open chat
=========================================================
More commands soon
=========================================================
Support server : https://discord.gg/Fq233KJ - https://discord.gg/KPpVGvv
`)
message.author.sendEmbed(embed)
 
}
});
client.on("message", msg => {
    var prefix = "+";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField("🌪  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField("🆔  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField('🕵  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField('🛰   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField('🎖  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField('🤖  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});

client.on("message", message => {
    if (message.content === "+rules") {
           message.react("✅")
              message.react("❌")
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`

  ●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●

1) لا تنشر سيرفرات دسكورد بالعام او بالخاص..
2) لا تتكلم عن اشياء مشبوهة او اشياء مالها داعي
3) لا تلعب بالهاك وتدخل مع ناس يلعبون بهاك بماين كرافت
4) حاول انك ما تسب احد..
5) لا تكون عنصري ولا تتحرش بأحد بطريقة وصخة...
6) لا تضحك ع أشياء حساسة..
7) لا تتكلم عن السياسة ا شيء ديني او حساس
8) أحترم الأخرين وفكر باللي تقوله
9) لا تتحرش بالناس ولا تكون شخص متنمر
10) لا تنشر سيرفرات اخرى ماين كرافت
11) لا ترسل روابط مواقع او اي شيء اباحي 
12) لا تحرق ع ناس افلام او مقاطع الخ..
13) لا تناقش او تصنع نقاشات بين الآخريين
14) لا تشغل اغاني مزعجة ولا تخرب ع الآخريين
15) لا تنتحل شخصيات ناس ثانية..
16) لا تنشر دسكورد او اكاونتات مهكره او اي شيء ثاني
17) ممنوع السبام

●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
  
    `)
   
      message.author.sendEmbed(embed)
      
      }
      }); 

client.on('message', message => {
         
 
  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);
 
       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
 
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
 
 
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}
 
 
 
});


 client.on('message', message => {
  var prefix = "+";
 if (message.content.startsWith(prefix + 'help')) {
     let pages = [
 	`=-=-=-=-=-=** 🌍 Public Commands - اوامر عامة 🌍 **=-=-=-=-=-=
**     ❖ +id ======> To Show Your ID | ايدي حسابك
     ❖ +ping ====> Ping Of Bot | بنج حك البوت
     ❖ +info =====> Information Of The Bot | معلومات البوت
     ❖ +server ==> Information Of The Server | معلومات السيرفر
     ❖ +cal =====> To Calculate | اله لحاسبة 
     ❖ +rooms ===> Show Rooms Of Server | اضهار الرومات الي في السيرفر
     ❖ +roles ===> Show Roles Of The Server | اضهار الرانكات
     ❖ +emojis ==> Emoji Of Server | ايموجيات السيرفر   
     ❖ +say =====> The Bot Say Any Thing | تكرار اي شي كتبتو
     ❖ +ser-av ===> To Show Image Of Server | لاضهار صورة السيرف 
     ❖ +embed ===> To Embed | لتكرار اي شي كتبتو بطريقة حلوة
     ❖ +avatar ==> Your Avatar |صورتك الشخصية
**
     ===========================================================
       React With ▶ To See Admins Commands`,
 	`=-=-=-=-=-= **🔧  Admin Commands - اوامر ادارية 🔧** =-=-=-=-=-=
     **❖ +move @user => Move User To Your Room Voice | لسحب الشخص الى روومك
     ❖ +mvall => Move All To Your Room Voice | لسحب الجميع الي روومك
     ❖ +bc => Broadcast | رسالة جماعية الى كل اعضاء السيرفر
     ❖ +role @user <rank> => Give User Rank | لأعطاء رتبة لعضو معين
     ❖ +roleremove @user <rank> => remove Rank From User | لازالة الرتبة من شخص معين
     ❖ +role all <rank> => Give All Rank | لأعطاء رتبة للجميع
     ❖ +role humans <rank> => Give Humans Rank | لأعطاء رتبة للاشخاص فقط
     ❖ +role bots <rank> => Give Bots Rank | لأعطاء رتبة لجميع البوتات
     ❖ +clear => Clear Chat | مسح الشات
     ❖ +mute @user <reason> => Mute User | اعطاء العضو ميوت لازم رتبة <Muted>
     ❖ +unmute @user => Unmute User | لفك الميوت عن الشخص 
     ❖ +kick @user <reason> => Kick User From Server | طرد الشخص من السيرفر
     ❖ +ban @user <reason> => Ban User From Server | حضر الشخص من السيرفر
     ❖ +mct => Mute Channel | تقفيل الشات
     ❖ +unmct => Unmute Channel | فتح الشات
     ❖ +kv @user => Voice Kick | يطرد شخص من الرووم
     ❖ +vonline => Create Channel Voice Online | يسوي رووم فويس اونلاين
     ❖ +bans  ==> ban list | الاشخاص الي تبندو
     ** 
     ===========================================================
       React With ▶ To See Games Commands`,
 	`=-=-=-=-=-= **  Games Commands - اوامر الالعاب  ** =-=-=-=-=-=
**   ❖ +xo @user => Game XO | لعب اكس او
     ❖ +rps => Rock & Paper & Scissors | لعبة حجر ورقة مقص
     ❖ +slots => Game Of Fruits | لعبة الفواكه
     ❖ +زواج @user => لعبة الزواج
     ❖ +speed => لعبة سرعة كتابة 
     ❖ +لعبة فكك <= فكك
     ❖ +لعبة عواصم <= عواصم
     ❖ +البوت يعطيك نصائح <= هل تعلم
     ❖ +skin => Ur Mc Skin
     ❖ +لو خيروك => Funny Game Yay
**
      ===========================================================
	  React With ▶ To See Music Commands`,
	`=-=-=-=-=-=  ** :musical_note: Music Commands  -  اوامر الاغاني :musical_note:**  =-=-=-=-=-=
**	 ❖ +p => For Start Music | لتشغيل الاغاني
	 ❖ +s => For Skip Music | لتخطي الاغنية
	 ❖ +stop => For Stop Music | لأيقاف الاغنية
     ❖ +vol => For Reduce or Raise The Sound | لخفض او رفع الصوت
     ❖ +np => For See Name Music | لكي ترى اسم الاغنية
     ❖ +q => To See The Music In The Queue | لكي ترا الاغاني التي في قائمة الانتظار
     ❖ +pa => For Pause The Music | لأيقاف الاغنية مؤقتنا
     ❖ +r => For Play Back The Music agin after its end | لأعادة تشغيل الاغنية بعد توقفها
**
	 ===========================================================
       React With ▶ To See Quran Commands`,
	`=-=-=-=-=-= ** :kaaba: Quran Commands  -  اوامر القرأن :kaaba:**  =-=-=-=-=-=
   **  ❖+قران => For Start Quran | لتشغيل القرأن
	 ❖:regional_indicator_a: القرآن كاملاً ماهر المعيقلي
     ❖:regional_indicator_b: سورة البقرة كاملة للشيخ مشاري العفاسي
     ❖:regional_indicator_c: سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
     ❖:stop_button: لإيقاف القرآن الكريم
     ❖:regional_indicator_d: القرآن كاملاً عبدالباسط عبدالصمد
     ❖:regional_indicator_e: القرآن كاملاً ياسر الدوسري
     ❖:regional_indicator_f: سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي
 	    DgPro**`]
 	let page = 1;
 
     let embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setFooter(`Page ${page} of ${pages.length}`)
     .setDescription(pages[page-1])
 
     message.channel.sendEmbed(embed).then(msg => {
 
         msg.react('◀').then( r => {
             msg.react('▶')
 
 
         const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
         const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
         const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
         const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
 
 
 
         backwards.on('collect', r => {
             if (page === 1) return;
             page--;
             embed.setDescription(pages[page-1]);
             embed.setFooter(`Page ${page} of ${pages.length}`);
             msg.edit(embed)
         })
         forwards.on('collect', r => {
             if (page === pages.length) return;
             page++;
             embed.setDescription(pages[page-1]);
             embed.setFooter(`Page ${page} of ${pages.length}`);
             msg.edit(embed)
         })
         })
     })
     }
 });


client.on('message', message => {
if(message.content.startsWith("+slots")) {
let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slot2 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slot3 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1 === slots2 && slots2 === slots3) {
we = "Win, GG."
} else {
we = "Lose :'("
}
message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("+new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("+close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`+close\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '+close', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    
                   .then((collected) => {
                       message.channel.delete();
                   })    
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});



client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', async message => {
  if(message.content.startsWith(prefix + "sugg")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("515037514810261514").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })

client.on('message', message => {
        if (message.content === "+inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(`『| ${message.author.username} |』`, message.author.avatarURL)      
        .setTitle(`اضغط هنا لدعوه البوت`)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=513589898381361167&permissions=0&scope=bot`)
     message.channel.sendEmbed(embed);
       }
   });

client.on('message', Sal => { // By : !!!,RaaXe ? ,??
  if(Sal.content === '+bot-info') { //هنا تغير البرفيكس
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(client.user.avatarURL)
  .addField('اسم البوت', client.user.username, true)
  .setFooter(client.user.tag, client.user.avatarURL, true)
  .addField('تاق البوت', client.user.discriminator, true)
  .addField('ايدي البوت', client.user.id, true)
.addField('     ** ? bot_owner ?  ** ' ,' **  ! -|BD ,ana pro#3996 ** ')
  Sal.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
      if(message.content.startsWith ("+marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ?? **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ?? **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});

client.on('message', message => {
var prefix = "+"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**رجأء ضع اسمك في ماين كرافت. ?**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });







 






client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
