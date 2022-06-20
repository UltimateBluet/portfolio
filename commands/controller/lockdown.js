const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: "lockdown",
    aliases: ['lockall'],

    run: async (client, message, args) => {
        
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({content: `:x: | Você não possui permissão de **__Administrador__** para executar esse comando!`});
        
        if(!args[0]) return message.reply({embeds: [new MessageEmbed()
            .setTitle("Lock down")
            .setDescription(`<:desc:909975347343273984> | Configure o cargo que as pessoas receberam ao entrar no server.
          
            <:config:909975347343278090> | Exemplo:
            Para ligar => \`${config.prefix}lockdown on\`
            Para desligar => \`${config.prefix}lockdown off\`
    
            <:plus:909975347100024933> | Variáveis: 
            \`${config.prefix}lockall\``)
            .setColor('BLURPLE')
        ]});

        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'GUILD_TEXT');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.permissionOverwrites.edit(message.guild.id,
                {
                    SEND_MESSAGES: false
                })
            })
            
            let lockEmbed = new MessageEmbed()

                .setTitle(`<:bot1:895052124067598428> Sistema de segurança`)
                .addFields(
                    {
                      name: "Informações de segurança:",
                      value: `<:info:893464986163220600> | Servidor bloqueado por: ${message.author} \n<:info:893464986163220600> | Servidor totalmente bloqueado!`
                    }
                  )
                .setColor('BLURPLE')
                .setFooter(`Autor do comando ${message.author.tag}`, message.author.displayAvatarURL())
                .setTimestamp()
            return message.channel.send({embeds: [lockEmbed]})

        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.permissionOverwrites.edit(message.guild.id, {
                    SEND_MESSAGES: true
                })
            })
            
            let lockEmbed2 = new MessageEmbed()
               .setTitle(`<:bot1:895052124067598428> Sistema de segurança`)
               .addFields(
                {
                  name: "**Informações de segurança:**",
                  value: `<:info:893464986163220600> | Servidor desbloqueado por: ${message.author} \n<:info:893464986163220600> | Servidor totalmente desbloqueado!`
                }
              )
               .setFooter(`Autor do comando ${message.author.tag}`, message.author.displayAvatarURL())
               .setTimestamp()
               .setColor('BLURPLE')    
            message.channel.send({embeds: [lockEmbed2]});
        }
    }
}