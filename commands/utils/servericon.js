const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "servericon",
    aliases: ["servericon"],

run: async(client, message, args) => {
    const blue = new MessageEmbed()
    .setTitle(`🖼 Ícone do server __**${message.guild.name}**__`)
    .setDescription(`[Clique Aqui](${message.guild.iconURL({dynamic: true, format: "png", size: 4096})}) | Para baixar!.`)
    .setImage(message.guild.iconURL({ dynamic: true, format: "png", size: 4096 }))
    .setColor('#00BFFF')
    message.reply({embeds: [blue]});
}}