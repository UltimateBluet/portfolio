module.exports = {
    name: "unlock",
    aliases: ["destrancar"],

    run: async(client, message, args) => {
        if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **Gerenciar servidor**!`);

        let lock = await message.channel.permissionOverwrites.edit(message.guild.id,
        {
            SEND_MESSAGES: true
        });

        message.delete();

        message.channel.send({content: `<:check:902977505110130708> | ${message.author} chat destrancado com sucesso`});
    }
}