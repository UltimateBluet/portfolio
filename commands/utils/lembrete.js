const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "lembrete",
    aliases: ["lembrar"],

run: async(client, message, args) => {
    var time = args[0];
    var reminder = args.splice(1).join(' ');

    if (!time) return message.reply({embeds: [new MessageEmbed()
        .setColor('BLUE')
        .setTitle("ERRO")
        .setDescription(`Ao usar o comando de lembrete você não definiu o tempo, siga o exemplo para não ocorrer erros
        
        <:config:909975347343278090> | Exemplo:
        tempo = 1s (sugundo), 1m (minuto), 1h (hora), 1d (dias)
        \`g.lembrte 5s motivo\``)
    ]}).then(msg => setTimeout (() => { msg.delete()}, 10000));
    if (!reminder) return message.reply({embeds: [new MessageEmbed()
        .setColor('BLUE')
        .setTitle("ERRO")
        .setDescription(`Ao usar o comando de lembrete você não definiu o tempo, siga o exemplo para não ocorrer erros
        
        <:config:909975347343278090> | Exemplo:
        tempo = 1s (sugundo), 1m (minuto), 1h (hora), 1d (dias)
        \`g.lembrte 5s motivo\``)
    ]}).then(msg => setTimeout (() => { msg.delete()}, 10000));

    time = await time.toString();

    if (time.indexOf('s') !== -1) { // Segundos
        var timesec = await time.replace(/s.*/, '');
        var timems = await timesec * 1000;
    } else if (time.indexOf('m') !== -1) { // Minutos
        var timemin = await time.replace(/m.*/, '');
        timems = await timemin * 60 * 1000;
    } else if (time.indexOf('h') !== -1) { // Horas
        var timehour = await time.replace(/h.*/, '');
        timems = await timehour * 60 * 60 * 1000;
    } else if (time.indexOf('d') !== -1) { // Dias
        var timeday = await time.replace(/d.*/, '');
        timems = await timeday * 60 * 60 * 24 * 1000;
    }    else {
        return message.reply('**O tempo deve ser \`númerico + [s/m/h/d]\`**').then(msg => setTimeout (() => { msg.delete()}, 10000));
    }

    message.reply(`Eu vou lembrar você de \`${reminder}\` daqui \`${time}\``);

    megaSetTimeout(() => {
        message.reply(`Você me pediu para te lembrar de \`${reminder}\` `);
    }, Number(timems));

}};
function megaSetTimeout(callback, ms) {
const mega1 = (2**31)-1
const mega2 = ms > mega1 ? mega1 : ms
  
setTimeout(() => ms > mega2 ? megaSetTimeout(callback, ms - mega2) : callback(), mega2)
}