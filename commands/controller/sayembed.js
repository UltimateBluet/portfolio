const {MessageEmbed} = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: "sayembed",
    aliases: ["stsay"],

run: async(client, message, args) => {
    let msg = args.join(" ");

    if (!message.member.permissions.has('MANAGE_MESSAGES'))
    return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Gerenciar mensagens**!`);


    if (!msg) return message.channel.send({embeds: [new MessageEmbed()
        .setTitle("<:pasta:893464779459555338> Comando: sayembed")
        .setDescription(`<:desc:909975347343273984> | Escreva como se você fosse o bot.
      
        <:config:909975347343278090> | Exemplo:
        \`${config.prefix}sayembed <texto>\`
        
        <:plus:909975347100024933> | Variáveis: 
        \`${config.prefix}stsay\``)
        .setColor('BLURPLE')
    ]});

    message.delete()

    const embed = new MessageEmbed()
    .setDescription(msg)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send({embeds: [embed]})
}}