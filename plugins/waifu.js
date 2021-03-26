let limit = 10
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/waifu')
 let { desc, image, name, source } = await res.json()
 let hasil = `*DESC :* ${desc}\n*NOMBRE :* ${name}\n*URL :* ${source}`
 conn.sendFile(m.chat, image, 'image.png', hasil, m)
}
handler.help = ['waifu']
handler.tags = ['fotos']
handler.command = /^waifu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
