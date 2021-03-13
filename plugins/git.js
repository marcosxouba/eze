let handler = async m => m.reply(`
 *GIT DE ESTE BOT*
https://github.com/Ezequiel7u7xD/darkbot2.0/edit/main/

MY GIT:

https://github.com/Ezequiel7u7xD
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

