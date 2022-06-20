const { MessageEmbed } = require("discord.js")
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
    name: 'kick',
    aliases: ['expulsar'],

    run: async(client, message, args) => {

    if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Expulsar membros**!`);

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
      var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if (!membro) return message.reply({embeds: [new MessageEmbed()
        .setTitle("<:pasta:893464779459555338> Comando: kick")
        .setDescription(`<:desc:909975347343273984> | Dê kick em um membro. **(Por ID ou menção)**`)
        .addField(`<:config:909975347343278090> | Como executar:`, `\`${config.prefix}kick @membro <motivo>\` \n\`${config.prefix}kick <id> <motivo>\``, true)
        .addField(`<:config:909975347343278090> | Exemplo:`, `\`Menção: ${config.prefix}kick @${message.author.username} <motivo>\` \n\`ID: ${config.prefix}kick ${message.author.id} <motivo>\``, true)
        .addField(`<:plus:909975347100024933> | Variáveis:`, `\`${config.prefix}expulsar\``, false)
        .setColor('BLURPLE')
      ]})

      var motivo = args.slice(1).join(" ")
      if (!motivo) return message.reply(':x: | Você não deu um motivo')

        message.channel.send(`Para confirmar o kick do ${user}, clique no emoji`).then(msg => {
        msg.react("<:Check3:852195316664762419>")

        let filtro = (reaction, usuario) => reaction.emoji.name === "Check3" && usuario.id === message.author.id
        let coletor = msg.createReactionCollector({ filter: filtro, max: 1})

        coletor.on("collect", cp => {
            cp.remove(message.author.id); {
                let embed = new MessageEmbed()
                .setTitle('Expulso')
                .setColor('BLURPLE')
                .setTimestamp()
                .addFields(
                    {
                        name: "Usuário Expulso:",
                        value: `${membro}`,
                        inline: true
                    },
                    {
                        name: "Expulso por:",
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
            membro.kick()
        })
        let channel = message.guild.channels.cache.get(db.get(`log_kick_${message.guild.id}`))
        if(!channel) {
         return;
        } else {
            const kickl = new MessageEmbed()
            .setTitle(`Membro Expulso`)
            .setDescription(`Expulso: ${membro}
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