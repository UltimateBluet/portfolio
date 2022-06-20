const jimp = require("jimp")

module.exports = {
    name: "bolsonaro",
    aliases: ["bolso"],

run: async(client, message, args) => {

    message.delete();

    let img = jimp.read("https://cdn.discordapp.com/attachments/814270412422119435/816055040031719424/PicsArt_03-01-06.07.10.png")
        if (!args[0]) return message.reply("Escreva algo para o bolsonaro falar.")
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                       image.resize(885, 494)
                                           image.print(font, 450, 180, args.join(" "), 7000)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "bolsonaro.png"}]})
                })
            })
        })
    }}