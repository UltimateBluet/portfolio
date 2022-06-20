const { MessageEmbed } = require("discord.js")
const ms = require("ms")
const config = require("../../config.json")

module.exports = {
    name: 'slowmode',
    aliases: ["modolento", "cd"],

    run: async(client, message, args) => {
        if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(':x: | ${message.author} Você não possui a permissão **Gerenciar canais**!')

        if (!args[0]) return message.reply({embeds: [new MessageEmbed()
            .setTitle("<:pasta:893464779459555338> Comando: slow mode")
            .setDescription(`<:desc:909975347343273984> | Ative o modo lento no chat, isso evita spam, tumultos e muito mais.`)
            .addField(`<:config:909975347343278090> | Exemplo:`, `\`${config.prefix}slowmode <tempo> <motivo>\` \n \`${config.prefix}slowmode 5s teste\``, true)
            .addField(`<:config:909975347343278090> | Como definir o tempo:`, `\`1s(segundo)\` \n \`1m(minuto)\` \n \`1h(hora)\``, true)
            .addField(`<:plus:909975347100024933> | Variáveis:`, `\`${config.prefix}cd, ${config.prefix}modolento\``, false)
            .setColor('BLURPLE')
        ]});

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'Motivo não especificado';

        const time = ms(args[0]) / 1000;
        if (isNaN(time)) return message.channel.send('<:uncheck3:852195316853375018> │ Tempo invalido!')
        if (time >= 21600) return message.channel.send('O tempo de slow mode não pode ser maior que 6 horas.')
        if(time === 0) return message.channel.send("Slowmode desativaddo")

        if (currentCooldown === time) return message.reply(`Slowmode já está definido para ${args[0]}`);
        const confirm = new MessageEmbed()
            .setTitle('<:Check3:852195316664762419> | Slowmode Ativado')
            .addField('Tempo setado:', args[0])
            .addField('Motivo:', reason)
            .setColor('BLURPLE')
            .setTimestamp()
            .setFooter(`${message.guild.name}`, message.guild.iconURL())
        message.channel.setRateLimitPerUser(time, reason).then(m => m.send({embeds: [confirm]}));
    }
}