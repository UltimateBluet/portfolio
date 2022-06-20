const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "unban",
    aliases: ['desbanir'],

    run: async(client, message, args) => {

 if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`:x: | Você precisa da permissão **BANIR MEMBROS** para utilizar este comando!`);       
        let usu = args[0];

         if (!usu) return message.reply({embeds: [new MessageEmbed()
            .setTitle("<:pasta:893464779459555338> Comando: unban")
            .setDescription(`<:desc:909975347343273984> | Retire o ban de um membro via ID.
          
            <:config:909975347343278090> | Exemplo:
            \`${config.prefix}unban ${message.author.id}\`
    
            <:plus:909975347100024933> | Variáveis: 
            \`${config.prefix}desbanir\``)
            .setColor('BLURPLE')
          ]});

        message.guild.members.unban(usu);

        message.channel.send(`<:Check3:852195316664762419> | ${message.author}, o usuário <@${usu}> (\`${usu}\`) foi desbanido com sucesso!`)
    }
}