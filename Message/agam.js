// SUBSCRIBE BANG
const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('../Library/color')
const speed = require('performance-now')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../Library/function')
const { fetchJson, kyun, fetchText } = require('../Library/fetcher')
const request = require('request')
const fs = require('fs')
const brainly = require('brainly-scraper')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const fetch = require('node-fetch')
const crypto = require('crypto')  
const { removeBackgroundFromImageFile } = require('remove.bg')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process')


//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

const welcome = JSON.parse(fs.readFileSync('./Metadata/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./Message/setting.json'))
const mess = JSON.parse(fs.readFileSync('./Message/mess.json'))
const antilink = JSON.parse(fs.readFileSync('./Metadata/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./Metadata/antivirtex.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner
faketeks = setting.fake
footer = setting.footer
captionnya = setting.captionnya
multi = setting.multi
nopref = setting.nopref
blocked = []

//━━━━━━━━━━━━━━━[ IMAGENYA ]━━━━━━━━━━━━━━━━━//

fakeimg = fs.readFileSync('./Library/me.jpg')
fakethumb = fs.readFileSync('./Library/thumb.jpg')

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
const ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
const ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
const ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
const ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
const ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
const ucapanWaktu = 'Good Night'
}
const runtime = function (seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
const hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
const mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
const sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = agam = async (agam, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const typei = Object.keys(mek.message)[0]
global.prefix
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const datre = new Date().toLocaleDateString()
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

const dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
const date = new Date(dates);
const tahun = date.getFullYear();
const bulan1 = date.getMonth();
const tanggal = date.getDate();
const hari = date.getDay();
const haris = date.getDay();
const jam = date.getHours();
const menit = date.getMinutes();
const detik = date.getSeconds();
const waktoo = date.getHours();
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
prefix = prefa
}
}

body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const arg = budy.slice(command.length + 2, budy.length)
const q = args.join(' ')
const timestampi = speed();
const latensyi = speed() - timestampi
const pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = agam.user.jid
const Verived = "0@s.whatsapp.net"
const num = "6285157740529@s.whatsapp.net"
const ownerNumber = ["6285866295942@s.whatsapp.net",`${NomorOwner}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? agam.user.jid : isGroup ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0] 
const conts = mek.key.fromMe ? agam.user.jid : agam.contacts[mek.sender]
const pushname = mek.key.fromMe ? agam.user.name : !conts ? 'unknown' : conts.notify || conts.vname || conts.name || 'unknown' 
const groupMetadata = isGroup ? await agam.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const isOwner = ownerNumber.includes(sender)
const isWelcome = isGroup ? welcome.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isAntilink = isGroup ? antilink.includes(from) : false
const isAntivirtex = isGroup ? antivirtex.includes(from) : false
const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
agam.sendMessage(from, teks, text, {quoted:ftrol})
}
const sendMess = (hehe, teks) => {
agam.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? agam.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : agam.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
agam.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
agam.chatRead(from, "read")

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `${NameOwner}`, 
orderTitle: `${NameBot}`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
agam.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
const sendButLocation = async (id, text1, desc1, loc1, but = [], options = {}) => {
kma = loc1
mhan = await agam.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "LOCATION"
}
agam.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButImage = async (
id,
text1,
desc1,
gam1,
but = [],
options = {}
) => {
kma = gam1;
mhan = await agam.prepareMessage(from, kma, image);
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
agam.sendMessage(
id,
buttonMessages,
MessageType.buttonsMessage,
options
)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

const sendStickerFromUrl = async(to, url) => {
const names = Date.now() / 10000;
const download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
agam.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
const download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
agam.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !mek.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
agam.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[ ! ]', 'red'), color('Virtex Detector!!', 'yellow'))
agam.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mMSG\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                                                           

case 'menu':
case 'help':
teks =
`Hai Kak ${pushname}👋, ${ucapanWaktu}


*INGFO*
Name Bot : ${NameBot}
Owner : ${NameOwner}
Runtime : ${runtime(process.uptime())}
Speed : ${latensyi.toFixed(4)} second


╭─❒ [ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ] ❒
➷ ${prefix}owner
➷ ${prefix}runtime
➷ ${prefix}speed
➷ ${prefix}report <keluhan>
└─────────────°

╭─❒ [ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ] ❒
➷ ${prefix}bc <text>
└─────────────°

╭─❒ [ 𝗦𝗧𝗜𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 ] ❒
➷ ${prefix}sticker <reply/caption>
➷ ${prefix}toimg <reply>
➷ ${prefix}attp <text>
└─────────────°

╭─❒ [ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ] ❒
➷ ${prefix}linkgrup
➷ ${prefix}tagall
➷ ${prefix}antilink
➷ ${prefix}antivirtex
➷ ${prefix}welcome
➷ ${prefix}group <buka/tutup>
➷ ${prefix}setdesc <text>
➷ ${prefix}setname <text>
➷ ${prefix}setpp @tag 
➷ ${prefix}hidetag <text/reply>
➷ ${prefix}kick @tag
➷ ${prefix}add 628xxxxx
➷ ${prefix}demote @tag
➷ ${prefix}promote @tag
└─────────────°
`
sendButLocation(from, teks, faketeks, {jpegThumbnail:fakeimg,name:`${footer}`}, [{buttonId:`owner`,buttonText:{displayText:'👤OWNER'},type:1},{buttonId:`script`,buttonText:{displayText:'🌹SCRIPT'},type:1}], {contextInfo: { mentionedJid: [num]}})
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.badmin)
if (args[0] === 'on') {
if (isWelcome) return reply('Fitur Welcome Sudah Aktif Sebelumnya!!')
welcome.push(from)
fs.writeFileSync('./Metadata/welcome.json', JSON.stringify(welcome))
reply('Welcome Sukses Di Aktifkan!!')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('Fitur Welcome Sudah Mati Sebelumnya!!')
const ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./Metadata/welcome.json', JSON.stringify(welcome))
reply('Welcome Sukses Di Matikan!!')
} else if (!q){
anu =`*AUTO WELCOME*`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'MATIKAN'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'AKTIFKAN'}, type: 1}]
const btngrass = {
contentText: `${anu}`,
footerText: `${footer}`,
buttons: punten,
headerType: 1
}
await agam.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.badmin)
if (args[0] == "on") {
if (isAntilink) return reply("Fitur Antilink Sudah Aktif Sebelumnya!!");
antilink.push(from);
fs.writeFileSync(
"./Metadata/antilink.json",
JSON.stringify(antilink)
);
reply("Antilink Sukses Di Aktifkan!!");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./Metadata/antilink.json",
JSON.stringify(antilink)
);
reply("Antilink Sukses Di Matikan!!");
} else if (!q) {
sendButMessage(from, `*MODE ANTILINK*`, `${footer}`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.badmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("Fitur Antivirtex Sudah Aktif Sebelumnya!!");
antivirtex.push(from);
fs.writeFileSync(
"./Metadata/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("Antivirtex Sukses Di Aktifkan!!");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./Metadata/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("Antivirtex Sukses Di Matikan!!");
} else if (!q) {
sendButMessage(from, `*MODE ANTIVIRTEX*`, `${footer}`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", footer, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
reply(`\`\`\`Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
agam.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
reply(`\`\`\`Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
agam.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
linkgc = await agam.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
agam.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Sukses Menjadikan Admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
agam.groupMakeAdmin(from, mentioned)
} else {
mentions(`@${mentioned[0].split('@')[0]} Cie Dah Admin Nih *${groupMetadata.subject}*`, mentioned, true)
agam.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Sukses Di Demote :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
agam.groupDemoteAdmin(from, mentioned)
} else {
mentions(`@${mentioned[0].split('@')[0]} Awokawok Udah Bukan Admin`, mentioned, true)
agam.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
if (args.length < 1) return reply('Nomornya Mana??')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Contohnya 62')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
agam.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal!!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
agam.groupRemove(from, [y])
break
case 'tagall':
if (!isGroup) return reply(mess.only.group);
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
agam.groupUpdateSubject(from, `${body.slice(9)}`)
agam.sendMessage(from, `\`\`\`Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.badmin)
agam.groupUpdateDescription(from, `${body.slice(9)}`)
agam.sendMessage(from, `\`\`\Sukses Mengganti Deskripsi Group Menjadi\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'bc':
case 'broadcast':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await agam.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: '🌹MENU'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: footer,
buttons: buttonss,
headerType: 1
}
await agam.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case "s":
  case "stiker":
  case "sticker":
    anu = args.join(" ").split("|");
        a = anu[0] !== "" ? anu[0] : isAuthor;
        b = typeof anu[1] !== "undefined" ? anu[1] : isPackname;
    if ( 
      ((isMedia && !mek.message.videoMessage) || isQuotedImage)
      ) { 
        const encmedia = isQuotedImage 
        ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message .extendedTextMessage.contextInfo : mek;
          media = await agam.downloadAndSaveMediaMessage(encmedia); 
          await createExif(a, b); 
          out = getRandom(".webp"); 
          ffmpeg(media) 
          .on("error", (e) => { 
            console.log(e); 
            agam.sendMessage(from, "Terjadi kesalahan", "conversation", { quoted: mek }); 
            fs.unlinkSync(media); 
            })
            .on("end", () => { 
              _out = getRandom(".webp"); 
              spawn("webpmux", [
                "-set",
                "exif",
                "./temp/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                agam.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11))
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await agam.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              agam.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./Metadata/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                agam.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          m.reply(
            `Kirim gambar dengan caption ${prefix}stiker, untuk video durasi kurang dari *7 detik*`
          );
        }
        break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
agam.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case "toimg":
    if (!isQuotedSticker) return m.reply(msg.replyStic);
        m.reply(msg.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await agam.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return m.reply("Yah gagal, coba ulangi");
          buffer = fs.readFileSync(ran);
          agam.sendMessage(from, buffer, image, {caption: msg.done})
          fs.unlinkSync(ran);
        });
        break;

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = agam.contacts[i] != undefined ? agam.contacts[i].vname || agam.contacts[i].notify : undefined
inilist.push({
"displayName": `${NameOwner}`,
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await agam.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
contentText: `Tuh Owner Ku Mau Nanya Apa Yah?`,
footerText: footer,
buttons: button,
headerType: 1
}
await agam.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
const nomor = mek.participant
let teks1 = `[REPORT]\nPesan : ${pesan}`
const options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
agam.sendMessage(`${NomorOwner}@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya Michael Agam`
agam.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/lordagam23_`
agam.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@preset_agam23`
agam.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = `Bot Ini Menggunakan Script : https://github.com/MichaelAgam23/SelfBot`
agam.sendMessage(from, teks, text, {quoted : mek})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break
        
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return agam.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isagam") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}