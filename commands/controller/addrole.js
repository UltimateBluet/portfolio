const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'addrole',
    aliases: ['addcargo'],

    run: async(client, message, args) => {
        if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Gerenciar cargos**!`);

        const user = message.mentions.members.first() ||message.guild.members.cache.get(args[0]);
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        if(!user) return message.reply({embeds: [new MessageEmbed()
            .setTitle("<:pasta:893464779459555338> Comando: addrole")
            .setDescription(`<:desc:909975347343273984> | Adicione um cargo para algum membro no servirdor. **(Por ID ou menção)**`)
            .addField(`<:config:909975347343278090> | Como executar:`, `\`${config.prefix}addrole @membro @cargo\` \n\`${config.prefix}addrole <id> @cargo\``, true)
            .addField(`<:config:909975347343278090> | Exemplo:`, `\`Menção: ${config.prefix}addrole @${message.author.username} @cargo\` \n\`ID: ${config.prefix}addrole ${message.author.id} @cargo\``, true)
            .addField(`<:plus:909975347100024933> | Variáveis:`, `\`${config.prefix}addcargo\``, false)
            .setColor('BLURPLE')
        ]});
        if(!role) return message.reply({content: `:x: | Você não mencionou o cargo`});

        const blue = new MessageEmbed()
        .setTitle('Add role')
        .setDescription(`${message.author} o cargo ${role} foi adicionado para o membro ${user}(${user.id})`)
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send({embeds: [blue]});

    user.roles.add(role);
    }
}