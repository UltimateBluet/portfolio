const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'serverinfo',
    aliases: ['server'],

    run: async(client, message, args) => {
        let server = new MessageEmbed()
        .setTitle('<:infinit:872502343248273438> Server info')
        .addField('Nome', `\`${message.guild.name}\``, true)
        .addField('ID server', `\`${message.guild.id}\``, true)
        .addField('Impulsos', `\`${message.guild.premiumSubscriptionCount || '0'}\``, true)
        .addField('Dono(a)', `<@${message.guild.ownerId}>`, true)
        .addField('ID dono(a)', `\`${message.guild.ownerId}\``, true)
        .addField(`Membros **(${message.guild.memberCount})**`, `**Humanos:** ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} \n**Bots:** ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        .setThumbnail(`${message.guild.iconURL({dynamic: true})}`)
        .setColor('BLURPLE')

        message.channel.send({embeds: [server]}).then(msg => {
            msg.react('◀️').then(r => {
                msg.react('▶️')
            })

        const vaiFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id
        const voltaFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id

        let vai = msg.createReactionCollector({ filter: vaiFilter, max: 2})
        let volta = msg.createReactionCollector({ filter: voltaFilter, max: 2})

        volta.on('collect', r => {
            let a = new MessageEmbed()
            .setTitle('<:infinit:872502343248273438> Server info')
            .addField('Nome', `\`${message.guild.name}\``, true)
            .addField('ID server', `\`${message.guild.id}\``, true)
            .addField('Impulsos', `\`${message.guild.premiumSubscriptionCount || '0'}\``, true)
            .addField('Dono(a)', `<@${message.guild.ownerId}>`, true)
            .addField('ID dono(a)', `\`${message.guild.ownerId}\``, true)
            .addField(`Membros **(${message.guild.memberCount})**`, `**Humanos:** ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} \n**Bots:** ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
            .setThumbnail(`${message.guild.iconURL({dynamic: true})}`)
            .setColor('BLURPLE')
            msg.edit({embeds: [a]})
        })//volta.on

        vai.on('collect', r => {
            let aa = new MessageEmbed()
            .setTitle('<:infinit:872502343248273438> Server info')
            .addField('Emojis', `\`${message.guild.emojis.cache.size}\``, true)
            .addField('Cargos', `\`${message.guild.roles.cache.size}\``, true)
            .addField('Categorias', `\`${message.guild.channels.cache.filter((x) => x.type == "GUILD_CATEGORY").size}\``, true)
            .addField(`Canais **(${message.guild.channels.cache.size})**`, `**Texto:** \`${message.guild.channels.cache.filter((x) => x.type == "GUILD_TEXT").size}\` \n**Voz:** \`${message.guild.channels.cache.filter((x) => x.type == "GUILD_VOICE").size}\``, false)
            .setThumbnail(`${message.guild.iconURL({dynamic: true})}`)
            .setColor('BLURPLE')
            msg.edit({embeds: [aa]})
        })
        })//react
    }
}