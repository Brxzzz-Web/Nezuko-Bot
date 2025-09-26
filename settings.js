import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = "" //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
"51971285104",
"5492916450307",
"5216671548329"
]

global.suittag = ["51971285104"] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2|Latest"
global.nameqr = "NezukoBot-MD"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = "⏤͟͟͞͞ɴᴇᴢᴜᴋᴏ-ʙᴏᴛ⏤͟͟͞͞❀"
global.textbot = "𝖭𝖾𝗓𝗎𝗄𝗈, 𝖬𝖺𝖽𝖾 𝖶𝗂𝗍𝗁 ❤ 𝖻𝗒 𝗡𝗲𝘇𝘂𝗸𝗼 𝗢𝗳𝗶𝗰𝗶𝗮𝗹"
global.dev = "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴢᴜᴋᴏ ᴏғɪᴄɪᴀʟ"
global.author = "© ᴍᴀᴅᴇ ᴡɪᴛʜ ʙʏ ɴᴇᴢᴜᴋᴏ- ᴏғɪᴄɪᴀʟ"
global.etiqueta = "𝗡𝗲𝘇𝘂𝗸𝗼 𝗢𝗳𝗶𝗰𝗶𝗮𝗹"
global.currency = "Nezukcoins"
global.banner = "https://files.catbox.moe/47imnv.jpg"
global.icono = "https://files.catbox.moe/rv0v6d.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://chat.whatsapp.com/KdpLokuBZuKHx0DvNzuAes"
global.community = "https://chat.whatsapp.com/KdpLokuBZuKHx0DvNzuAes"
global.channel = "https://whatsapp.com/channel/0029Vb5l5w1CHDyjovjN8s2V"
global.github = "https://github.com/Drkexe"
global.gmail = "jxxlznexe@gmail.com"
global.ch = {
ch1: "120363401983007420@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings.js'"))
import(`${file}?update=${Date.now()}`)
})