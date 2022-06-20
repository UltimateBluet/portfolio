const { MessageEmbed } = require("discord.js");
const config = require('../../config.json')

module.exports = {
    name: "clear",
    aliases: ["limpar"],
run: async (client, message, args) => {
  
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Ocorreu um erro! Você não tem permissão para gerenciar mensagens");
  
    const deleteCount = parseInt(args[0], 10);
  
    if (!deleteCount || deleteCount < 1 || deleteCount > 99)
        return message.reply({embeds: [new MessageEmbed()
        .setTitle("<:pasta:893464779459555338> Comando: clear")
        .setDescription(`<:desc:909975347343273984> | Você só pode deletar no máximo 99 mensagens e que sejam recentes`)
        .addField(`<:config:909975347343278090> | Como executar:`, `\`${config.prefix}clear <quantidade>\``, true)
        .addField(`<:config:909975347343278090> | Exemplo:`, `\`${config.prefix}clear 10\``, true)
        .addField(`<:plus:909975347100024933> | Variáveis:`, `\`${config.prefix}limpar\``, false)
        .setColor('BLURPLE')
    ]})

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel.send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => setTimeout (() => { msg.delete()}, 10000))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    )
}}