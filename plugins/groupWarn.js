
let handler = async (m, { conn, text }) => {
  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `*[ WARN ERROR ]*\n\nEtiquete al usuario, anote el número o responda al miembro que desea dar _warning_`, m)
  //let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if(isNaN(number)) return conn.reply(m.chat, `*[ WARN ERROR ]*\n\nEl número que ingresaste no es válido !`, m)
  if(number.length > 15) return conn.reply(m.chat, `*[ WARN ERROR ]*\n\nEl número que ingresaste no es válido !`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {

	
  if(typeof global.DATABASE.data.users[user] == 'undefined') {
  global.DATABASE._data.users[user] = {
			exp: 0,
			limit: 10,
			lastclaim: 0,
			warning: 0,
			chat: 0,
			whitelist: false,
			isBanned: false,
			spam: 0
		}
	}
  
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
  let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	let isAdmin = users.isAdmin || users.isSuperAdmin || false
	let number = user.split('@')[0]

	if(isAdmin) return conn.reply(m.chat, `*[ WARN ERROR ]*\n\nNo se puede dar una advertencia a otros administradores. !`, m)
  
	
	global.DATABASE.data.users[user].warning += 1
	var warn = global.DATABASE.data.users[user].warning
 	if(warn > 4) {
 		conn.reply(m.chat, `*[ MEMBER WARNING ]*\n\nSorry motherfucker, you will be removed from this group !`, null, {contextInfo: {
          mentionedJid: [user]
 	}}).then(() => {
 		conn.groupRemove(m.chat, [user])
 	})
 } else {
 	conn.reply(m.chat, `*[ MEMBER WARNING ]*\n\n@${number} : [ ${warn} / 5 ]\n\n*Si recibe 5 advertencias, será expulsado automáticamente.* !`, null, {contextInfo: {
          mentionedJid: [user]
 	}})
}

 
 }
}
handler.help = ['warn *62xx*', 'warn *(reply)*','warn *@user*']
handler.tags = ['group admin']
handler.command = /^warn$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
module.exports = handler
