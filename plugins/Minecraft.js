let handler = async m => m.reply(`
Minecraft ultima versión oficial:
 https://www.mediafire.com/file/3llhzirq2nu7pse/minecraft_1.16.210_Oficial.apk/file
Beta:**********

Alas elytras muy interesantes; https://youtu.be/qX501R905nU
         

`.trim()) 

handler.help = ['Minecraft']

handler.tags = ['info']

handler.command = /^Minecraft$/i

module.exports = handler

