let limit = 10
let handler = async (m, { conn, text }) => {
if (!text) throw '_Tienes que enviar un texto, INUTIL QUE ERES INUTIL_'
let [kiri, kanan] = text.split('|')
await conn.sendFile(m.chat, global.API('https://api.zeks.xyz', '/api/phlogo', {
 text1: kiri,
 text2: kanan,
 theme: 'phlogo',
 apikey: 'apivinz'
}), 'Error', '_Aqui tienes mi rey_', m)
}
handler.help = ['phlogo <texto>']
handler.tags = ['cfoto']
handler.command = /^phlogo$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
