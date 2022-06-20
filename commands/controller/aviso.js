const { MessageEmbed } = require ('discord.js')

module.exports = {
    name: "aviso",
    aliases: ["mensagem", "msg"],

    run: async(client, message, args) => {

    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply(':x: | Você não possui permissão de **Genrencuiar canais** para executar esse comando!');

        const blue = new MessageEmbed()
        .setTitle('Chat')
        .setDescription('Mencione o \`chat\` desejado para enviar a mensagem')
        .setThumbnail(message.guild.iconURL())
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        message.channel.send({embeds: [blue]}).then(msg => {
            ch = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .once('collect', c => {
                let canal = c.mentions.channels.first()
                c.delete();

        const blue1 = new MessageEmbed()
        .setTitle('Título')
        .setDescription('Escreva o \`título\` da sua mensagem')
        .setThumbnail(message.guild.iconURL())
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        msg.edit({embeds: [blue1]}).then(msg => {
            tt = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .once('collect', c => {
                let title = c.content
                c.delete();

        const blue2 = new MessageEmbed()
        .setTitle('Descrição')
        .setDescription('Escreva a \`descrição\` da mensagem. Descrição é o corpo do texto')
        .setThumbnail(message.guild.iconURL())
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        msg.edit({embeds: [blue2]}).then(msg => {
            ds = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .once('collect', c => {
                let desc = c.content
                c.delete();

        const confirm = new MessageEmbed()
        .setTitle('Confirmação')
        .setDescription("Sua mensagem foi enviada com sucesso. Aqui está a config dela")
        .addField(`Canal:`, `${canal}`, false).addField(`Título:`, `${title}`, false).addField(`Descrição:`, `${desc}`, false)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        msg.edit({embeds: [confirm]})
        
        const embed = new MessageEmbed()
        .setTitle(`${title}`)
        .setDescription(`${desc}`)
        .setColor('BLURPLE')
        .setTimestamp()
        .setFooter(`${message.guild.name}`, message.guild.iconURL())
        canal.send({embeds: [embed]})
      }) //desc
     }) //blue2
    }) //tt
   }) //blue1
  }) //ch
 }) //blue
}}