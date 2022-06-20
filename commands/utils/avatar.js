const {MessageEmbed} = require("discord.js")
const config = require('../../config.json')

module.exports = {
    name: "avatar",
    aliases: ["icon", "icone", "foto"],

run: async(client, message, args) => {

      let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
      if(!user) {
        let erro = new MessageEmbed()
        .setTitle("<:pasta:893464779459555338> Comando: Avatar")
        .setDescription(`<:desc:909975347343273984> | Veja o avatar/ícone de um membro do servirdor ou o seu. **(Por ID ou menção)**`)
        .addField(`<:config:909975347343278090> | Para ver o seu:`, `\`${config.prefix}\`${message.author}`, true)
        .addField(`<:config:909975347343278090> | Para ver de um membro:`, `\`${config.prefix}\``, true)
        .addField(`<:plus:909975347100024933> | Variáveis:`, `\`${config.prefix}icon, ${config.prefix}icone, ${config.prefix}foto\``, true)
        .setColor('BLURPLE')
        message.reply({embeds: [erro]})
      }

      const embed = new MessageEmbed()
        .setAuthor(`Avatar: ${user.tag}`, user.displayAvatarURL({dynamic: true}))
        .setColor('BLURPLE')
        .addField("❱ PNG",`[\`Baixar\`](${user.displayAvatarURL({format: "png"})})`, true)
        .addField("❱ JPEG",`[\`Baixar\`](${user.displayAvatarURL({format: "jpg"})})`, true)
        .addField("❱ WEBP",`[\`Baixar\`](${user.displayAvatarURL({format: "webp"})})`, true)
        .setURL(user.displayAvatarURL({dynamic: true}))
        .setFooter(`Autor: ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
        .setTimestamp(new Date())      
        .setImage(user.displayAvatarURL({dynamic: true, size: 512}))
      await message.channel.send({embeds: [embed]});
    }
  }