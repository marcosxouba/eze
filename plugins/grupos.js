let handler = async m => m.reply(`
Grupos que te podrian interesar:



                                      

`.trim()) 

handler.help = ['igrupos']

handler.tags = ['info']

handler.command = /^igrupos$/i
