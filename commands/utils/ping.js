const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ping",
    aliases: ["ms"],

run: async(client, message, args) => {
    const blue = new MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL())
    .setTitle(`<a:on1:857598134737305601> Latência calculada`)
    .setDescription(`<a:ping:857712723516063744> Ping do bot: 
> \`${client.ws.ping}ms\``)
    .setColor("#00BFFF")
    .setTimestamp()

    message.reply({embeds: [blue]}).then(msg => setTimeout (() => { msg.delete()}, 10000));
}}