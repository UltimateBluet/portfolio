const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'removeroleall',
    aliases: ['removeall', 'rmall'],

    run: async(client, message , args) => {
    
    let role = message.mentions.roles.first();
    if(!role) return message.reply({embeds: [new MessageEmbed()
        .setTitle("<:pasta:893464779459555338> Comando: remove role all")
        .setDescription(`<:desc:909975347343273984> | Adicione um cargo para todos os membros do server. **(Por ID ou menção)**
      
        <:config:909975347343278090> | Exemplo:
        \`${config.prefix}removeroleall @cargo\`

        <:plus:909975347100024933> | Variáveis: 
        \`${config.prefix}removeall, ${config.prefix}rmall\``)
        .setColor('BLURPLE')
    ]});
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Gerenciar cargos**!`);
    
    const blue = new MessageEmbed()
        .setTitle('Remove role all')
        .setDescription(`${message.author} o cargo ${role} foi removido de todos os membros do servidor`)
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send({embeds: [blue]});

    message.guild.members.cache.forEach(member => {
    member.roles.remove(role.id).catch(e => console.error(e));
        })
    }
}