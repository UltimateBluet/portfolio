const { MessageEmbed } = require("discord.js")
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
    name: 'ban',
    aliases: ['banir'],

    run: async(client, message, args) => {

    if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Banir membros**!`);

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
      var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if (!membro) return message.reply({embeds: [new MessageEmbed()
        .setTitle("<:pasta:893464779459555338> Comando: ban")
        .setDescription(`<:desc:909975347343273984> | Dê ban em um membro. **(Por ID ou menção)**`)
        .addField(`<:config:909975347343278090> | Como executar:`, `\`${config.prefix}ban @membro <motivo>\` \n\`${config.prefix}ban <id> <motivo>\``, true)
        .addField(`<:config:909975347343278090> | Exemplo:`, `\`Menção: ${config.prefix}ban @${message.author.username} <motivo>\` \n\`ID: ${config.prefix}ban ${message.author.id} <motivo>\``, true)
        .addField(`<:plus:909975347100024933> | Variáveis:`, `\`${config.prefix}banir\``, false)
        .setColor('BLURPLE')
      ]})

      var motivo = args.slice(1).join(" ")
      if (!motivo) return message.reply(':x: | Você não deu um motivo')

        message.channel.send(`Para confirmar o ban do ${user}, clique no emoji`).then(msg => {
        msg.react("<:Check3:852195316664762419>")

        let filtro = (reaction, usuario) => reaction.emoji.name === "Check3" && usuario.id === message.author.id
        let coletor = msg.createReactionCollector({ filter: filtro, max: 1})

        coletor.on("collect", cp => {
            cp.remove(message.author.id); {
                let embed = new MessageEmbed()
                .setTitle('Banido')
                .setColor('BLURPLE')
                .setTimestamp()
                .addFields(
                    {
                        name: "Usuário banido:",
                        value: `${membro}`,
                        inline: true
                    },
                    {
                        name: "Banido por:",
                        value: `${message.author.username}`,
                        inline: true
                    },
                    {
                        name: "Motivo",
                        value: `${motivo}`
                    }
                )
                .setFooter(message.guild.name, message.guild.iconURL())
                message.channel.send({embeds: [embed]})
            }
            membro.ban()
        })
        let channel = message.guild.channels.cache.get(db.get(`log_ban_${message.guild.id}`))
        if(!channel) {
         return;
        } else {
            const kickl = new MessageEmbed()
            .setTitle(`Membro Banido`)
            .setDescription(`Banido: ${membro}
            ID: \`${membro.user.id}\`

            Autor: ${message.author}
            Motivo: \`${motivo}\``)
              .setColor('BLURPLE')
              .setTimestamp()
              .setFooter(message.guild.name, message.guild.iconURL())
            channel.send({embeds: [kickl]})
       }
    })
}}