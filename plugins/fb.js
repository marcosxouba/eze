let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm ... ¿Dónde está la URL??'
  let res = await fetch(global.API('xteam', '/dl/fb', {
    url: args[0]
  }, 'APIKEY')
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { name, author, description, uploadDate, duration, url, isFamilyFriendly, genre, keywords, contentSize, videoQuality, commentCount } = json.result
  let { name: authorname, url: authorlink } = author
  let dateConfig = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  let unknown = '_Unknown_'
  let none = '_None_'
  let caption = `
Contenido${isFamilyFriendly ? 'Si' : ' *No* '}Family Friendly
Post por ${name} (${authorname || ''}) (${authorlink || ''})
Publicado en ${new Date(uploadDate).toLocaleDateString('id', dateConfig)}
Tamaño: ${contentSize || unknown}
Duración: ${clockString(+ new Date(duration))}
Género: ${genre || none}
Calidad: ${quality ? quality : unknown}

${description}

Palabra clave: ${keywords || none}
`.trim()
  conn.sendFile(m.chat, url, 'media-fb', caption, m)
}
handler.help = ['fb'].map(v => v + ' <Enlace>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
