const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
    name: 'autorole',
    aliases: ['setautorole'],

    run: async(client, message, args) => {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Gerenciar cargos**!`);

    let cargos = message.mentions.roles.first()

    if(!args[0]) return message.reply({embeds: [new MessageEmbed()
        .setTitle("<:pasta:893464779459555338> Comando: autorole")
        .setDescription(`<:desc:909975347343273984> | Configure o cargo que as pessoas receberão ao entrar no server. **(Apenas menção)**`)
        .addField(`<:config:909975347343278090> | Como executar:`, `**ligar:** \`${config.prefix}autorole on @cargo\` \n**desligar:** \`${config.prefix}autorole off @cargo\``, false)
        .addField(`<:plus:909975347100024933> | Variáveis:`, `\`${config.prefix}setautorole\``, false)
        .setColor('BLURPLE')
    ]});

    if(args[0] === 'on') {

        if(!cargos) return message.reply(`:x: | Você esqueceu de mencionar o cargo desejado`)

        const blue = new MessageEmbed()
        .setTitle('Auto role')
        .setDescription(`<:check:902977505110130708> | O cargo: ${cargos}, foi setado como auto role`)
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send({embeds: [blue]})
        db.set(`autorole_${message.guild.id}`, cargos.id)
    }

    if(args[0] === 'off') {

        if(!cargos) return message.reply(`:x: | Você esqueceu de mencionar o cargo desejado`)

        const blue1 = new MessageEmbed()
        .setTitle('Auto role')
        .setDescription('O auto role foi desativado com sucesso')
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send({embeds: [blue1]})
        
        db.delete(`autorole_${message.guild.id}`, cargos.id)
    }
    }
}