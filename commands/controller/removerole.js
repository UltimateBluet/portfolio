const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'removerole',
    aliases: ['rmrole', 'removecargo'],

    run: async(client, message, args) => {
        if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Gerenciar cargos**!`);

        const user = message.mentions.members.first() ||message.guild.members.cache.get(args[0]);
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        if(!user) return message.reply({embeds: [new MessageEmbed()
            .setTitle("<:pasta:893464779459555338> Comando: remove role")
            .setDescription(`<:desc:909975347343273984> | Remove o cargo de algum membro do server. **(Por ID ou menção)**
          
            <:config:909975347343278090> | Exemplo:
            Menção: \`${config.prefix}removerole @${message.author.username} @cargo\`
            ID: \`${config.prefix}removerole ${message.author.id} @cargo\`
    
            <:plus:909975347100024933> | Variáveis: 
            \`${config.prefix}rmrole, ${config.prefix}removecargo\``)
            .setColor('BLURPLE')
        ]});
        if(!role) return message.reply({content: `:x: | Você não mencionou o cargo`});

        const blue = new MessageEmbed()
        .setTitle('Remove role')
        .setDescription(`${message.author} o cargo ${role} foi removido do membro ${user}(${user.id})`)
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send({embeds: [blue]});

    user.roles.remove(role);
    }
}