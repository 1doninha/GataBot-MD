// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return

if (/^e$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}*/

if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `*╭┅〘 ⚠️ 𝐎𝐛𝐞𝐝𝐞𝐜𝐞𝐫 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 ⚠️ 〙*
➽❌ 𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐋𝐢𝐠𝐚𝐫 𝐩𝐫𝐨 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐧𝐨 𝐁𝐨𝐭
➽❌ 𝐍𝐚̃𝐨 𝐚𝐝𝐢𝐜𝐢𝐨𝐧𝐞 𝐨 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐢𝐭𝐞 𝐨𝐬 𝐭𝐞𝐫𝐦𝐨𝐬
*╰═┅ৡৢ͜͡✦═╡ 𝐁𝐈𝐆 𝐌𝐂 𝐎𝐅𝐂 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)}

if (/^quero um bot|como crio um bot?|quero um bot?|quiero un bot|solicitud|solícito bot|solicito bot|preciso de um bot|necessito de um bot$/i.test(m.text) ) {
conn.reply(m.chat,  `\`⚡*Quer um bot para seu grupo?*\`

*🧡 Pode ser um sub bot mandando o seguinte comando:*
* #serbot (escanea el QR) 
* #jadibot --code (Código de 8 dígitos)

*Pode adquirí-lo fazendo uma doação voluntária através de PayPal*

> 🚀 O bot ficara ativo 24/7 para seu grupo.

\`⏩ Siguiente paso ⏩\`

> Uma vez realizado o pagamento, pode enviar um comprovante de envio do dinheiro (captura de tela) para que possa adiciona o bot a seu grupo:

• https://wa.me/559285013050
• ${ig}
• https://youtube.com/@bigmc3430

\`⚡ O bot ficara ativo 24/7?\`
_*Sim, nosso bot está conectado em um servidor pago para mantelo ativo 24/7 (por isso tambem solicitamos doações para mantelo em funcionamento) 👨🏻‍💻*_

> *𝐎𝐛𝐫𝐢𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐚 𝐬𝐮𝐚 𝐩𝐫𝐞𝐟𝐞𝐫𝐞̂𝐧𝐜𝐢𝐚 𝐞𝐦 ${gt} 🗿🍷*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})}
 
if (/^¿Qué es un Bot?|¿Qué es Bot?|Qué es Bot|qué es Bot|QUÉ ES UN BOT|¿QUÉ ES UN BOT?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
conn.reply(m.chat, `\`✨ ¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? ✨\`

🍃 _Un Bot es una inteligencia programada que permite realizar actividades dependiendo de lo que solicite. En temas de WhatsApp, es posible crear stickers, descargar música, vídeos, crear logos, buscar imágenes, interactuar en modo de conversación,  participar en juegos dentro de chats etc..._

🍃 *_Para ver el menú de comandos puedes usar:_*
#menu

🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈`, m)}  
return !0 
}
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

