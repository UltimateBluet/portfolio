const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'enquete',
    aliases: ['votação'],

    run: async(client, message, args) => {
        
        let autor = `||Enquete feito por: ${message.author}||`
        let channelID = message.mentions.channels.first()
        let descrição = args.slice(1).join(" ")

        if(!channelID) return message.reply({embeds: [new MessageEmbed()
            .setTitle("<:pasta:893464779459555338> Comando: enquete")
            .setDescription(`<:desc:909975347343273984> | Faça uma votação em um canal do server.`)
            .addField(`<:config:909975347343278090> | Como executar:`, `\`${config.prefix}enquete #nome_chat <descrição>\``, true)
            .addField(`<:config:909975347343278090> | Exemplo:`, `\`${config.prefix}enquete #bate-papo Querem sorteio no server?\``, true)
            .addField(`<:plus:909975347100024933> | Variáveis:`, `\`${config.prefix}votação\``, false)
            .setColor('BLURPLE')
        ]})
        if(!descrição) return message.reply({content: `:x: | Você não deu uma descrição`})

        const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle("Enquete:")
        .setColor('BLURPLE')
        .setDescription(descrição)
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL())

        let msgEmbed = await channelID.send({content: `${autor}`, embeds: [embed]})
        await msgEmbed.react('<:check:902977505110130708>') 
        await msgEmbed.react('<:uncheck:902977505240162304>')
    message.reply({content: `Sua enquete foi enviada em ${channelID}`})
    }
}