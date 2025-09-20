import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botNumber = '' //𝐍𝐮𝐦𝐞𝐫𝐨 𝐩𝐚𝐫𝐚 𝐁𝐨𝐭

global.owner = [
  ['51971285104', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿', true],
  ['50672110920']
]

global.owner_lid = [
  ['76790290727095', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿 (LID)', true],
  ['149963665342644', 'Número 2 (LID)', true]
]

global.mods = []
global.suittag = ['51971285104'] 
global.prems = []
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.0'
global.languaje = 'Español'
global.nameqr = '𝗡𝗲𝘇𝘂𝗸𝗼 𝗨𝗹𝘁𝗿𝗮 𝗕𝗼𝘁'
global.sessions = 'Session'
global.jadi = 'JadiBots'
global.makiJadibts = true

global.packsticker = `⊹ 🐬 Nezuko🧠 Channel\n↳ Nezuko.channel/\n\n👹 Info:\n nezuko-channel.vercel.app/`
global.packname = `⊹ 🐬 Nezuko🧠 Channel\n↳ Nezuko.channel/\n\n👹 Info:\n nezuko-channel.vercel.app/`
global.author = `⊹ 👑Bot:\n⊹ ↳ Nezuko\n\n👑 Usuario:\n⊹ ↳ @Desconocido`;
global.wm = '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝗇𝖾𝗓𝗎𝗄𝗈 𝗈𝖿𝗂𝖼𝗂𝖺𝗅';
global.titulowm = '⏤͟͞ू⃪𝗡𝗲𝘇𝘂𝗸𝗼 𝗨𝗹𝘁𝗿𝗮 𝗕𝗼𝘁𑁯ᰍ';
global.igfg = '𝖭𝖾𝗓𝗎𝗄𝗈 𝖢𝗁𝖺𝗇𝗇𝖾𝗅'
global.botname = '𝗡𝗲𝘇𝘂𝗸𝗼 𝗕𝗼𝘁 𝗠𝗗'
global.dev = 'Made With ❤️ by 𝗡𝗲𝘇𝘂𝗸𝗼 𝗢𝗳𝗶𝗰𝗶𝗮𝗹'
global.textbot = '𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝗡𝗲𝘇𝘂𝗸𝗼𝗢𝗳𝗶𝗰𝗶𝗮𝗹 ❤️'
global.gt = '͟͞𝙽𝚎𝚣𝚞𝚔𝚘';
global.namechannel = '=͟͟͞𝗡𝗲𝘇𝘂𝗸𝗼 𝗖𝗹𝘂𝗯 - 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗖𝗵𝗮𝗻𝗻𝗲𝗹⏤͟͟͞͞★'

global.moneda = 'Coins'

//• ↳ ◜𝗟𝗜𝗡𝗞𝗦  𝗡𝗘𝗭𝗨𝗞𝗢 𝗖𝗛𝗔𝗡𝗡𝗘𝗟◞ • 🌪️

global.gp4 = 'https://chat.whatsapp.com/KdpLokuBZuKHx0DvNzuAes' //Grupo Oficial De𝐥 𝐂𝐥𝐮𝐛
global.gp1 = 'https://chat.whatsapp.com/KdpLokuBZuKHx0DvNzuAes' //Grupo 𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐓𝐚𝐥𝐤𝐬
global.gp2 = 'https://chat.whatsapp.com/KdpLokuBZuKHx0DvNzuAes'//
global.channel = 'https://whatsapp.com/channel/0029Vb5l5w1CHDyjovjN8s2V' //Canal Oficial 𝐃𝐞𝐥 𝐂𝐥𝐮𝐛
global.channel2 = 'https://whatsapp.com/channel/0029Vb5l5w1CHDyjovjN8s2V' //Canal 𝐃𝐞𝐥 𝐇𝐨𝐬𝐭 𝐨𝐟𝐢𝐜𝐢𝐚𝐥
global.yt = 'https://dash.kurayamihost.dpdns.org/home' //𝐃𝐚𝐬𝐡 𝐃𝐞𝐥 𝐇𝐨𝐬𝐭
global.md = 'https://github.com/FELIX-OFC/MakiMD' //Github Oficial
global.correo = 'v0-nezuko-channel.vercel.app/'
global.cn ='https://whatsapp.com/channel/0029Vb5l5w1CHDyjovjN8s2V';

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363401983007420@newsletter',
}
global.multiplier = 70

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
