let handler = function (m) {
  // this.sendContact(m.chat, '524641228001', 'DarkZE', m)
  this.sendContact(m.chat, '524641228001', 'DarkZE', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
