let limit = 10
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA')
 let { result } = await res.json()
 let hasil = `*Aqui esta tu loli bb\n\nComando creado exclusivamente para Destroyer*`
 conn.sendFile(m.chat, result, 'result.jpg', hasil, m)
}
handler.help = ['loli']
handler.tags = ['fotos']
handler.command = /^loli$/i
handler.group = true
handler.fail = null
handler.limit = true

module.exports = handler
