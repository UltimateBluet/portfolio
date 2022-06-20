const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'comandos',
    aliases: ["cmd"],

    run: async(client, message, args) => {
        message.delete();

        const embed = new MessageEmbed()
        .setTitle('Lista de comandos')
        .setDescription(`Olá cliente, veja aqui todos os comandos de cada categoria
        
        > Digite \`"ok" ou "enviar"\``)
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(`${message.guild.name}`, message.guild.iconURL())
        message.channel.send({embeds: [embed]}).then(msg => {
            tt = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .once("collect", c => {
                let result = c.content
                c.delete();

            if(!result || result !== "ok" && result !== "enviar") return message.reply({content: `Você não escreveu corretamente`})

            if(result === "ok") {
                const mod = new MessageEmbed()
                .setTitle('<:CLOUD:913173615531413535>  Moderação')
                .setDescription('<:desc:909975347343273984> => Aqui estão os comandos de moderação que a loja vende.')
                .addFields(
                    {
                        name: '<:pasta:893464779459555338> | Coluna 1',
                        value: `\`\`\`R$ 1,50 - say \nR$ 1,50 - say em embed \nR$ 1,50 - clear \nR$ 1,50 - warn \nR$ 1,50 - warnlist \nR$ 1,50 - enquete \nR$ 1,50 - temp mute \nR$ 1,50 - unmute \nR$ 1,50 - mute \nR$ 1,50 - kick\`\`\``,
                        inline: true
                    },
                    {
                        name: '<:pasta:893464779459555338> | Coluna 2',
                        value: `\`\`\`R$ 1,50 - ban \nR$ 1,50 - unban \nR$ 1,50 - unban all \nR$ 1,50 - blacklist \nR$ 1,50 - lock \nR$ 1,50 - unlock \nR$ 1,50 - slowmode \nR$ 1,50 - aviso \nR$ 1,50 - delete warn \nR$ 1,50 - saída\`\`\``,
                        inline: true
                    },
                    {
                        name: '<:pasta:893464779459555338> | Coluna 3',
                        value: `\`\`\`R$ 1,50 - add cargo \nR$ 1,50 - remove cargo \nR$ 1,50 - autorole \nR$ 1,50 - add cargo all \nR$ 1,50 - remove cargo all \nR$ 1,50 - entrada \nR$ 1,50 - registro \nR$ 1,50 - setregistro \nR$ 1,50 - set mute \nR$ 1,50 - delete registro\`\`\``,
                        inline: true
                    }
                )
                .setColor('BLURPLE')

            const utili = new MessageEmbed()
            .setTitle("<:CLOUD:913173615531413535>  Utilidades/Interação")
            .setDescription('<:desc:909975347343273984> => Aqui estão os comandos de utilidades/interação que a loja vende')
            .addFields(
                {
                    name: '<:pasta:893464779459555338> | Coluna 1',
                    value: `\`\`\`R$ 1,50 - serverinfo \nR$ 1,50 - userinfo \nR$ 1,50 - botinfo \nR$ 1,50 - avatar \nR$ 1,50 - ping \nR$ 1,50 - servericon \nR$ 1,50 - afk \nR$ 1,50 - membros \nR$ 1,50 - lembrete \nR$ 1,50 - sugerir\`\`\``,
                    inline: true
                },
                {
                    name: '<:pasta:893464779459555338> | Coluna 2',
                    value: `\`\`\`R$ 1,50 - reporte \nR$ 1,50 - bolsonaro \nR$ 1,50 - drip \nR$ 1,50 - meme \nR$ 1,50 - kiss \nR$ 1,50 - hug \nR$ 1,50 - slap \nR$ 1,50 - jokempo \nR$ 1,50 - pergunta \nR$ 1,50 - calculadora\`\`\``,
                    inline: true
                },
                {
                    name: '<:pasta:893464779459555338> | Coluna 3',
                    value: `\`\`\`R$ 1,50 - gabigol \nR$ 1,50 - hacker \nR$ 1,50 - zoio \nR$ 1,50 - junin \nR$ 1,50 - anão \nR$ 1,50 - wasted \nR$ 1,50 - faustão \nR$ 1,50 - trump \nR$ 1,50 - laranjo \nR$ 1,50 - pesquisar\`\`\``,
                    inline: true
                }
            )
            .setColor('BLURPLE')

            const prote = new MessageEmbed()
            .setTitle('<:CLOUD:913173615531413535>  Proteção/Cofiguração')
            .setDescription('<:desc:909975347343273984> => Aqui estão os comandos de proteção/configuração que a loja vende')
            .addFields(
                {
                    name: '<:pasta:893464779459555338> | Coluna 1',
                    value: `\`\`\`R$ 2,00 - painel de logs \nR$ 2,00 - log ban \nR$ 2,00 - log kick \nR$ 2,00 - log edit \nR$ 2,00 - log delete \nR$ 2,00 - log voice entrada \nR$ 2,00 - log entrada \nR$ 2,00 - log saída \nR$ 2,00 - log boost\`\`\``,
                    inline: true
                },
                {
                    name: '<:pasta:893464779459555338> | Coluna 2',
                    value: `\`\`\`R$ 2,00 - log canal deletado \nR$ 2,00 - log canal criado \nR$ 2,00 - log canal editado \nR$ 2,00 - log cargo criado \nR$ 2,00 - log cargo deletado \nR$ 2,00 - log voice saída \nR$ 2,00 - log emoji \nR$ 2,00 - painel de proteção \nR$ 2,00 - anti fake\`\`\``,
                    inline: true
                },
                {
                    name: '<:pasta:893464779459555338> | Coluna 3',
                    value: `\`\`\`R$ 2,00 - anti spam \nR$ 2,00 - anti raid \nR$ 2,00 - anti link \nR$ 2,00 - anti invite \nR$ 2,00 - anti palavrão \nR$ 2,00 - lock down \nR$ 2,00 - status bot \nR$ 2,00 - count call \nR$ 2,00 - descrição bot\`\`\``,
                    inline: true
                }
            )
            .setColor('BLURPLE')
            msg.edit({embeds: [mod, utili, prote]})
        }

         })//result
        })//tt
    }
}