const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'membros',
    aliases: 'membercount',

    run: async (client, message, args) => {

    const embed = new MessageEmbed()
        .setTitle(`**Opa! Aqui está a quantidade de membros do server**`)
        .setDescription(`Olá ${message.author.username}, neste momento o servidor tem:
        \`👥\` Membros: ${message.guild.memberCount}
        \`👾\` Usuários: ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)}
        \`🤖\` Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`)
        .setTimestamp()
        .setFooter(`Autor • ${message.author.tag}`)
        .setColor('#00BFFF')
        message.reply({embeds: [embed]})
}}