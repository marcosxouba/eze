let handler = async m => m.reply(`
 Grupos que te podrían Interesar:





😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^igroups$/i

module.exports = handler

