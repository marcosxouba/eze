let handler = async m => m.reply(`
╭─〘 𝑺𝒂𝒎𝒖𝟑𝟑𝟎𝗜 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [paypal.me/Michae165]
│ • Pero con que te suscribas a mi canal basta:)
│ https://youtube.com/channel/UCnJsyIe2XksWO3jVHGXYMhw
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
