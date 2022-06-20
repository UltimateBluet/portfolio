const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: "say",
    aliases: ["falar"],

run: async(client, message, args) => {
    let msg = args.join(" ");

    message.delete();

    if (!message.member.permissions.has('MANAGE_MESSAGES'))
    return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Gerenciar mensagens**!`);


    if (!msg) return message.channel.send({embeds: [new MessageEmbed()
        .setTitle("<:pasta:893464779459555338> Comando: say")
        .setDescription(`<:desc:909975347343273984> | Escreva como se você fosse o bot.
      
        <:config:909975347343278090> | Exemplo:
        \`${config.prefix}say <texto>\`
        
        <:plus:909975347100024933> | Variáveis: 
        \`${config.prefix}falar\``)
        .setColor('BLURPLE')
    ]});

    message.channel.send({content: msg})
}}