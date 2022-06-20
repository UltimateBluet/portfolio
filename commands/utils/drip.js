const {MessageEmbed} = require('discord.js');

module.exports = {
    name: "drip",
    aliases: ["drip"],

run: async(client, message, args) => {

var list = [
  'https://media.tenor.com/images/e58039b267965023b1b047d440d6bf24/tenor.gif',
  'https://media.tenor.com/images/afd634e4216d2a75a2a33388657c06b9/tenor.gif',
  'https://thumbs.gfycat.com/CleanWildAmericancicada-max-1mb.gif',
  'https://media.tenor.com/images/e58039b267965023b1b047d440d6bf24/tenor.gif',
  'https://media.tenor.com/images/fc4d6097153e74bae547e089218b6aef/tenor.gif',
  'https://media.tenor.com/images/d05dd6d1d6d0d1ecd7688143fce46f6d/tenor.gif'
];
var rand = list[Math.floor(Math.random() * list.length)];



let avatar = message.author.displayAvatarURL({ dynamic:true, size:1024 });
  const embed = new MessageEmbed()
        .setTitle(`🥶DRIP🥶`)
        .setColor('#00BFFF')
        .setDescription(`${message.author} Mostrou seu drip`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('vai encarar?')
        .setAuthor(message.author.tag, avatar);
      message.reply({embeds: [embed]});
}}