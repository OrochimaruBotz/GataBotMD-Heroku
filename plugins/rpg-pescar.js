let handler  = async (m, { conn, command, args, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let user = global.db.data.users[m.sender]
let pescarUsuario = await conn.getName(m.sender)
let gancho = user.pancingan
let canaDePescar = user.pancing
let carnadaUser = user.umpan
let type = (args[0] || '').toLowerCase()
let pancing = user.pancing
let pancingan = user.pancingan
let nivelPescar = pancing == 0 ? 'No tengo | I do not have' : '' || pancing == 1 ? 'Nivel | Level ✦ 1' : '' || pancing == 2 ? 'Nivel | Level ✦ 2' : '' || pancing == 3 ? 'Nivel | Level ✦ 3' : '' || pancing == 4 ? 'Nivel | Level ✦ 4' : '' || pancing >= 5 ? 'Nivel | Level ✦ 5 ǁ MAX' : ''
let nivelGancho = pancingan == 0 ? 'No tengo | I do not have' : '' || pancingan == 1 ? 'Nivel | Level ✦ 1' : '' || pancingan == 2 ? 'Nivel | Level ✦ 2' : '' || pancingan == 3 ? 'Nivel | Level ✦ 3' : '' || pancingan == 4 ? 'Nivel | Level ✦ 4' : '' || pancingan >= 5 ? 'Nivel | Level ✦ 5 ǁ MAX' : ''

var mensajePesca = [`𝙋𝙍𝙀𝙋𝘼𝙍𝘼𝙉𝘿𝙊 𝙇𝘼 ${rpgg.emoticon('fishingrod')} 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍...`, `🪣 𝘼𝙇𝙄𝙎𝙏𝘼𝙉𝘿𝙊 𝙄𝙈𝙋𝙇𝙀𝙈𝙀𝙉𝙏𝙊𝙎 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼...`, `📡 𝘽𝙐𝙎𝘾𝘼𝙉𝘿𝙊 𝙇𝙐𝙂𝘼𝙍 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼...`, `𝙀𝙉 𝙃𝙊𝙍𝘼 𝘽𝙐𝙀𝙉𝘼!! 𝙃𝙊𝙔 𝙎𝙀𝙍𝘼 𝙐𝙉𝘼 𝙂𝙍𝘼𝙉 𝙋𝙀𝙎𝘾𝘼 🌤️`, `𝙋𝙍𝙀𝙋𝘼𝙍𝘼𝙉𝘿𝙊 ${rpgshopp.emoticon('pancingan')} 𝙂𝘼𝙉𝘾𝙃𝙊 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼`, `🌊 𝙀𝙉 𝘽𝙍𝙀𝙑𝙀 𝙀𝙈𝙋𝙀𝙕𝘼𝙍𝘼 𝙇𝘼 𝙋𝙀𝙎𝘾𝘼!!`].getRandom()
var mensajePesca2 = [`𝙋𝙍𝙀𝙋𝘼𝙍𝘼𝙉𝘿𝙊 𝙇𝘼 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, `💥 𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 𝙊𝘽𝙏𝙀𝙉𝘿𝙍𝘼𝙎 𝙈𝙐𝘾𝙃𝙊𝙎 𝙋𝙀𝘾𝙀𝙎`, `𝙏𝙄𝙀𝙉𝙀𝙎 𝙈𝙐𝘾𝙃𝘼 𝙀𝙉𝙀𝙍𝙂𝙄𝘼 ✨ 𝙋𝘼𝙍𝘼 𝙐𝙉𝘼 𝙂𝙍𝘼𝙉 𝙋𝙀𝙎𝘾𝘼`, `𝙏𝙐 𝙉𝙄𝙑𝙀𝙇 𝘿𝙀 ${rpgg.emoticon('fishingrod')} 𝙔 ${rpgshopp.emoticon('pancingan')} 𝙀𝙎𝙏𝘼𝙉  𝘼𝘾𝙏𝙊𝙎 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝘼 𝙂𝙍𝘼𝙉 𝙋𝙀𝙎𝘾𝘼!!`, `🍀 𝙇𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 𝙏𝙀 𝘽𝙍𝙄𝙉𝘿𝘼𝙍𝘼 𝙐𝙉𝘼 𝙀𝙓𝙀𝙇𝙀𝙉𝙏𝙀 𝙋𝙀𝙎𝘾𝘼`, `🌊 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 𝘿𝙀𝙇 𝘼𝙂𝙐𝘼 𝙀𝙎 𝙀𝙎𝙏𝘼𝘽𝙇𝙀 𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙀𝙉𝙕𝘼𝙍 𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`].getRandom()
var mensajePesca3 = [`𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 𝘼𝙏𝙍𝘼𝙋𝙊!! 🦀🦞🦐`, `𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 𝘼𝙏𝙍𝘼𝙋𝙊!! 🦑🐙🐡`, `𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 𝘼𝙏𝙍𝘼𝙋𝙊!! 🐠🐟🐬`, `𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 𝘼𝙏𝙍𝘼𝙋𝙊!! 🐳🦈🐋`].getRandom()
var energia = ['10', '20', '40', '60', '90']
var carnada = ['0', '40', '80', '150', '200']
var nivelCanaDePescar = ['1', '2', '3', '4', '5', '6']
var nivelDelGancho = ['1', '2', '3', '4', '5', '6']
var nivelUser = ['2', '4', '5', '7', '10']
  
const sections = [
{
title: htjava + ' Lista de construcción para la pesca ' + htjava,
rows: [
{title: "🎣 Pesca de emociones", rowId: usedPrefix + command + ' emosi'},
{title: "🎣 Pesca facil", rowId: usedPrefix + command + ' easy'},
{title: "🎣 Pesca normal", rowId: usedPrefix + command + ' normal'},
{title: "🎣 Pesca difícil", rowId: usedPrefix + command + ' hard'},
{title: "🎣 Pesca extrema", rowId: usedPrefix + command + ' extreme'}
]}]

const listMessage = {
  text: `⚡ Seleccione Pesca a continuación...`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ haga clic aquí ☂️`,
  sections }
try {
if (/fishing|mancing|pescar/i.test(command)) {
switch (type) {
          
case 'emosi':
let __temporizador1 = (new Date - user.lastfishing)
let _temporizador1 = (240000 - __temporizador1) 
let totalTiempo1 = clockString(_temporizador1)
let usuario = conn.getName(m.sender)

if (user.level <= 1) return conn.sendButton( m.chat, `${fg}𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙏𝙀𝙉𝙀𝙍 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelUser[0]}*`, `𝙉𝙄𝙑𝙀𝙇 𝘼𝘾𝙏𝙐𝘼𝙇: *${user.level}*\n` + wm, [[`𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝙈𝙄 𝙉𝙄𝙑𝙀𝙇 ${rpgg.emoticon('level')}`, `.nivel`]], m)   
if (user.stamina < 9) return conn.sendButton( m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙁𝙄𝙀𝙉𝙏𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼. 𝙈𝙄𝙉𝙄𝙈𝙊 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼𝙎 𝙐𝙉 *${energia[0]}%* 𝘿𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼 ✨`, wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m)   
user.stamina -= 5 * 1
if (user.lastfishing > 10800000) return conn.sendButton( m.chat, `𝙔𝘼 𝙁𝙐𝙀 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙀`, `𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀𝙇 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙊:\n${totalTiempo1}\n\n` + wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m)   
if (user.pancingan == 0 ) {  
if (user.pancing == 0 ) {
if (user.umpan == 0 ) {
if (new Date - user.lastfishing > 240000) {
        	        
let ikan = `${Math.floor(Math.random() * 30)}`.trim()
let lele = `${Math.floor(Math.random() * 15)}`.trim() 
let nila = `${Math.floor(Math.random() * 10)}`.trim() 
let bawal = `${Math.floor(Math.random() * 10)}`.trim() 
let buntal = `${Math.floor(Math.random() * 10)}`.trim() 
let udang = `${Math.floor(Math.random() * 39)}`.trim()
let paus = `${Math.floor(Math.random() * 2)}`.trim() 
let kepiting = `${Math.floor(Math.random() * 27)}`.trim()
        
let _psepick= `${pickRandom([1, 0, 0, 1])}`
let psepick = (_psepick * 1)
let _psenjata = `${pickRandom([1, 0, 0, 0])}`
let psenjata = (_psenjata * 1)
           
let pesca1 = `
${rpgg.emoticon('fishingrod')} 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 𝘿𝙀 𝙎𝙐 𝙋𝙀𝙎𝘾𝘼!! *${pescarUsuario}*
        
🌊🐟🌊 *Pez : Fish » ${ikan}*
🌊🐟🌊 *Super Pez : Fish Super » ${lele}*
🌊🦭🌊 *Foca : Sea Lion » ${nila}*
🌊🐡🌊 *Pez Globo : Blowfish » ${bawal}*
🌊🐡🌊 *Super Pez Globo : Blowfish Super » ${buntal}*
🌊🦐🌊 *Camarón : Shrimp » ${udang}*
🌊🐳🌊 *Ballena : Whale » ${paus}*
🌊🦀🌊 *Cangrejo : Crab » ${kepiting}*

Puedes cocinar esto y comerlo. 💉
_Ejemplo:_
${usedPrefix}cook` 

setTimeout(() => {
conn.sendHydrated(m.chat, botdate, pesca1, null, null, null, null, null, [
[null, null]], null)
  
if (psepick > 0 ) {
user.psepick += psepick * 1
conn.sendButton( m.chat, `🥳 𝘼𝘾𝘼𝘽𝘼𝙎 𝘿𝙀 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 *${psepick}* 𝙏𝙍𝘼𝙅𝙀 𝘾𝙊𝙈𝙐𝙉!! 🧥`, wm, [[`${rpgg.emoticon('fishingrod')} 𝙋𝙀𝙎𝘾𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕`, `.pescar`], [`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 : 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `.inventario`]], m)} 
        
if  (psenjata > 0 ) {
user.psenjata += psenjata * 1
conn.sendButton( m.chat, `🥳 𝘼𝘾𝘼𝘽𝘼𝙎 𝘿𝙀 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 *${psenjata}* 𝙏𝙍𝘼𝙅𝙀 𝙀𝙋𝙄𝘾𝙊!! 🥷`, wm, [[`${rpgg.emoticon('fishingrod')} 𝙋𝙀𝙎𝘾𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕`, `.pescar`], [`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 : 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `.inventario`]], m)}}, 38000)

setTimeout(() => {
 conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca3}`, wm, null, null, null, null, null, [
[null, null]], null)}, 28000)
       
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca2}`, wm, null, null, null, null, null, [
[null, null]], null)}, 8000)
  
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca}`, wm, null, null, null, null, null, [
[null, null]], null)}, 0)
                      
user.ikan += ikan * 1
user.lele += lele * 1
user.nila += nila * 1
user.bawal += bawal * 1
user.buntal += buntal * 1 
user.udang += udang * 1
user.paus += paus * 1
user.kepiting += kepiting * 1
user.lastfishing += new Date * 1
  
} else conn.sendButton( m.chat, `𝙔𝘼 𝙁𝙐𝙀 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙀`, `𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀𝙇 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙊:\n${totalTiempo1}\n\n` + wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m) 
} else conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 10 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 10'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 50 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 50']], m)
} else conn.sendButton(m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancing')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancingan')}`, '.buy pancing 2']], m)
} else return conn.sendButton(m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancingan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙐𝙉 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 2']], m)
break
           
case 'easy':
let _coinesa = (new Date - user.lastmancingeasy)
let coinesa = (28800000 - _coinesa)
let tiempoTotal2 = clockString(coinesa) 
if (user.level <= 3) return conn.sendButton( m.chat, `${fg}𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙏𝙀𝙉𝙀𝙍 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelUser[1]}*`, `𝙉𝙄𝙑𝙀𝙇 𝘼𝘾𝙏𝙐𝘼𝙇: *${user.level}*\n` + wm, [[`𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝙈𝙄 𝙉𝙄𝙑𝙀𝙇 ${rpgg.emoticon('level')}`, `.nivel`]], m)   
if (user.stamina < 19) return conn.sendButton( m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙁𝙄𝙀𝙉𝙏𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼. 𝙈𝙄𝙉𝙄𝙈𝙊 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼𝙎 𝙐𝙉 *${energia[1]}%* 𝘿𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼 ✨`, wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m)  
user.stamina -= 10 * 1  
if (gancho == 0) return conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 10 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 10'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 50 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 50']], m)
if (canaDePescar == 0) return conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancing')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 1 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 2']], m)
if (carnadaUser == 0) return conn.sendButton(m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancingan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙐𝙉 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 2']], m)
if (new Date - user.lastmancingeasy > 28800000) {
if (user.pancing > 1) {
if (user.pancingan > 1) {
if (user.umpan > 39) {
  
let resultado1 = `${Math.floor(Math.random() * 10)}`
let resultado2 = `${Math.floor(Math.random() * 10)}`
let resultado3 = `${Math.floor(Math.random() * 10)}`
let resultado4 = `${Math.floor(Math.random() * 10)}`
let resultado5 = `${Math.floor(Math.random() * 10)}`
let resultado6 = `${Math.floor(Math.random() * 10)}`
let resultado7 = `${Math.floor(Math.random() * 10)}`
let resultado8 = `${Math.floor(Math.random() * 10)}`
let resultado9 = `${Math.floor(Math.random() * 10)}`
let resultado10 = `${Math.floor(Math.random() * 10)}`
let resultado11 = `${Math.floor(Math.random() * 10)}`
let resultado12 = `${Math.floor(Math.random() * 10)}`
let resultado13 = `${Math.floor(Math.random() * 50)}`

let total1 = (resultado1 * 1)
let total2 = (resultado2 * 1) 
let total3 = (resultado3 * 1)
let total4 = (resultado4 * 1)
let total5 = (resultado5 * 1)
let total6 = (resultado6 * 1)
let total7 = (resultado7 * 1)
let total8 = (resultado8 * 1)
let total9 = (resultado9 * 1)
let total10 = (resultado10 * 1)
let total11 = (resultado11 * 1)
let total12 = (resultado12 * 1)
let total13 = (resultado13 * 1)

let zero1 = `${total1}`
let zero2 = `${total2}`
let zero3 = `${total3}`
let zero4 = `${total4}`
let zero5 = `${total5}`
let zero6 = `${total6}`
let zero7 = `${total7}`
let zero8 = `${total8}`
let zero9 = `${total9}`
let zero10 = `${total10}`
let zero11 = `${total11}`
let zero12 = `${total12}`

let pesca2 = `
*${htjava} Resultados de pesca ${pescarUsuario} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
*BONO: +1 Tiketcoin*
`.trim()
user.paus += total1
user.kepiting += total2
user.gurita += total3
user.cumi += total4 
user.buntal += total5
user.dory += total6
user.lumba += total7
user.lobster += total8
user.hiu += total9
user.udang += total10
user.ikan += total1
user.orca += total2
user.umpan -= total13
user.tiketcoin += 1


setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} 𝙃𝙀𝙔 𝙅𝙐𝙀𝙂𝘼 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊 𝘼 𝙋𝙀𝙎𝘾𝘼𝙍!! ${rpgg.emoticon('fishingrod')}`, botdate, null, null, null, null, null, [
[`${rpgg.emoticon('fishingrod')} 𝙋𝙀𝙎𝘾𝘼𝙍 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`, '.pescar']], null)}, 28800000) 
  
setTimeout(() => {
conn.sendHydrated(m.chat, pesca2, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
 conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca3}`, wm, null, null, null, null, null, [
[null, null]], null)}, 28000)
       
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca2}`, wm, null, null, null, null, null, [
[null, null]], null)}, 8000)
  
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca}`, wm, null, null, null, null, null, [
[null, null]], null)}, 0)
user.lastmancingeasy = new Date * 1
  
} else conn.sendButton( m.chat, `𝙈𝙄𝙉𝙄𝙈𝙊 *${carnada[1]}* 𝘿𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 ${carnada[1]} ${rpgshopp.emoticon('umpan')}`, '.buy umpan 40'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 100 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 100']], m)
} else conn.sendButton( m.chat, `𝙎𝙐 *${rpgshop.emoticon('pancingan')}* 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelDelGancho[1]}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[1]} ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 2'], [`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[2]} ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 3']], m)
} else conn.sendButton( m.chat, `𝙎𝙐 *${rpg.emoticon('fishingrod')}* 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelCanaDePescar[1]}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[1]} ${rpgg.emoticon('fishingrod')}`, '.buy pancing 2'], [`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[2]} ${rpgg.emoticon('fishingrod')}`, '.buy pancing 3']], m)
} else conn.sendButton( m.chat, `𝙔𝘼 𝙁𝙐𝙀 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙀`, `𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀𝙇 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙊:\n${tiempoTotal2}\n\n` + wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m) 
break
    
case 'normal':
let __temporizador3 = (new Date - user.lastmancingeasy)
let _temporizador3 = (28800000 - __temporizador3)
let tiempoTotal3 = clockString(_temporizador3) 
if (user.level <= 4) return conn.sendButton( m.chat, `${fg}𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙏𝙀𝙉𝙀𝙍 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelUser[2]}*`, `𝙉𝙄𝙑𝙀𝙇 𝘼𝘾𝙏𝙐𝘼𝙇: *${user.level}*\n` + wm, [[`𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝙈𝙄 𝙉𝙄𝙑𝙀𝙇 ${rpgg.emoticon('level')}`, `.nivel`]], m)
if (user.stamina < 39) return conn.sendButton( m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙁𝙄𝙀𝙉𝙏𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼. 𝙈𝙄𝙉𝙄𝙈𝙊 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼𝙎 𝙐𝙉 *${energia[2]}%* 𝘿𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼 ✨`, wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m)  
user.stamina -= 20 * 1     
if (gancho == 0) return conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 10 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 10'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 50 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 50']], m)
if (canaDePescar == 0) return conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancing')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 1 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 2']], m)
if (carnadaUser == 0) return conn.sendButton(m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancingan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙐𝙉 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 2']], m)
if (new Date - user.lastmancingeasy > 28800000) {
if (user.pancing > 2) {
if (user.pancingan > 2) {
if (user.umpan > 79) {
  
let resultado1 = `${Math.floor(Math.random() * 50)}`
let resultado2 = `${Math.floor(Math.random() * 50)}`
let resultado3 = `${Math.floor(Math.random() * 50)}`
let resultado4 = `${Math.floor(Math.random() * 50)}`
let resultado5 = `${Math.floor(Math.random() * 50)}`
let resultado6 = `${Math.floor(Math.random() * 50)}`
let resultado7 = `${Math.floor(Math.random() * 50)}`
let resultado8 = `${Math.floor(Math.random() * 50)}`
let resultado9 = `${Math.floor(Math.random() * 50)}`
let resultado10 = `${Math.floor(Math.random() * 50)}`
let resultado11 = `${Math.floor(Math.random() * 50)}`
let resultado12 = `${Math.floor(Math.random() * 50)}`
let resultado13 = `${Math.floor(Math.random() * 100)}`

let total1 = (resultado1 * 1)
let total2 = (resultado2 * 1) 
let total3 = (resultado3 * 1)
let total4 = (resultado4 * 1)
let total5 = (resultado5 * 1)
let total6 = (resultado6 * 1)
let total7 = (resultado7 * 1)
let total8 = (resultado8 * 1)
let total9 = (resultado9 * 1)
let total10 = (resultado10 * 1)
let total11 = (resultado11 * 1)
let total12 = (resultado12 * 1)
let total13 = (resultado13 * 1)

let zero1 = `${total1}`
let zero2 = `${total2}`
let zero3 = `${total3}`
let zero4 = `${total4}`
let zero5 = `${total5}`
let zero6 = `${total6}`
let zero7 = `${total7}`
let zero8 = `${total8}`
let zero9 = `${total9}`
let zero10 = `${total10}`
let zero11 = `${total11}`
let zero12 = `${total12}`

let pescar3 = `
*${htjava} Resultados de pesca ${pescarUsuario} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
*BONO: +1 Tiketcoin*
`.trim()
user.paus += total1
user.kepiting += total2
user.gurita += total3
user.cumi += total4 
user.buntal += total5
user.dory += total6
user.lumba += total7
user.lobster += total8
user.hiu += total9
user.udang += total10
user.ikan += total1
user.orca += total2
user.umpan -= total13
user.tiketcoin += 1  
  
conn.sendHydrated(m.chat, `${pescarUsuario} 𝙃𝙀𝙔 𝙅𝙐𝙀𝙂𝘼 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊 𝘼 𝙋𝙀𝙎𝘾𝘼𝙍!! ${rpgg.emoticon('fishingrod')}`, botdate, null, null, null, null, null, [
[`${rpgg.emoticon('fishingrod')} 𝙋𝙀𝙎𝘾𝘼𝙍 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`, '.pescar']], null)}, 28800000) 
  
setTimeout(() => {
conn.sendHydrated(m.chat, pesca3, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
 conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca3}`, wm, null, null, null, null, null, [
[null, null]], null)}, 28000)
       
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca2}`, wm, null, null, null, null, null, [
[null, null]], null)}, 8000)
  
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca}`, wm, null, null, null, null, null, [
[null, null]], null)}, 0)
user.lastmancingeasy = new Date * 1
  
} else conn.sendButton( m.chat, `𝙈𝙄𝙉𝙄𝙈𝙊 *${carnada[2]}* 𝘿𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 ${carnada[2]} ${rpgshopp.emoticon('umpan')}`, '.buy umpan 80'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 200 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 200']], m)
} else conn.sendButton( m.chat, `𝙎𝙐 *${rpgshop.emoticon('pancingan')}* 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelDelGancho[2]}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[2]} ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 3'], [`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[3]} ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 4']], m)
} else conn.sendButton( m.chat, `𝙎𝙐 *${rpg.emoticon('fishingrod')}* 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelCanaDePescar[2]}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[2]} ${rpgg.emoticon('fishingrod')}`, '.buy pancing 3'], [`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[3]} ${rpgg.emoticon('fishingrod')}`, '.buy pancing 4']], m)
} else conn.sendButton( m.chat, `𝙔𝘼 𝙁𝙐𝙀 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙀`, `𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀𝙇 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙊:\n${tiempoTotal3}\n\n` + wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m) 
break
    
case 'hard':
let __temporizador4 = (new Date - user.lastmancingeasy)
let _temporizador4 = (28800000 - __temporizador4)
let tiempoTotal4 = clockString(_temporizador4) 
if (user.level <= 6) return conn.sendButton( m.chat, `${fg}𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙏𝙀𝙉𝙀𝙍 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelUser[3]}*`, `𝙉𝙄𝙑𝙀𝙇 𝘼𝘾𝙏𝙐𝘼𝙇: *${user.level}*\n` + wm, [[`𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝙈𝙄 𝙉𝙄𝙑𝙀𝙇 ${rpgg.emoticon('level')}`, `.nivel`]], m)
if (user.stamina < 59) return conn.sendButton( m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙁𝙄𝙀𝙉𝙏𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼. 𝙈𝙄𝙉𝙄𝙈𝙊 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼𝙎 𝙐𝙉 *${energia[3]}%* 𝘿𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼 ✨`, wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m) 
user.stamina -= 25 * 1  
if (gancho == 0) return conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 10 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 10'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 50 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 50']], m)
if (canaDePescar == 0) return conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancing')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 1 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 2']], m)
if (carnadaUser == 0) return conn.sendButton(m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancingan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙐𝙉 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 2']], m)
if (new Date - user.lastmancingeasy > 28800000) {
if (user.pancing > 3) {
if (user.pancingan > 3) {
if (user.umpan > 149) {
  
let resultado1 = `${Math.floor(Math.random() * 100)}`
let resultado2 = `${Math.floor(Math.random() * 100)}`
let resultado3 = `${Math.floor(Math.random() * 100)}`
let resultado4 = `${Math.floor(Math.random() * 100)}`
let resultado5 = `${Math.floor(Math.random() * 100)}`
let resultado6 = `${Math.floor(Math.random() * 100)}`
let resultado7 = `${Math.floor(Math.random() * 100)}`
let resultado8 = `${Math.floor(Math.random() * 100)}`
let resultado9 = `${Math.floor(Math.random() * 100)}`
let resultado10 = `${Math.floor(Math.random() * 100)}`
let resultado11 = `${Math.floor(Math.random() * 100)}`
let resultado12 = `${Math.floor(Math.random() * 100)}`
let resultado13 = `${Math.floor(Math.random() * 150)}`

let total1 = (resultado1 * 1)
let total2 = (resultado2 * 1) 
let total3 = (resultado3 * 1)
let total4 = (resultado4 * 1)
let total5 = (resultado5 * 1)
let total6 = (resultado6 * 1)
let total7 = (resultado7 * 1)
let total8 = (resultado8 * 1)
let total9 = (resultado9 * 1)
let total10 = (resultado10 * 1)
let total11 = (resultado11 * 1)
let total12 = (resultado12 * 1)
let total13 = (resultado13 * 1)

let zero1 = `${total1}`
let zero2 = `${total2}`
let zero3 = `${total3}`
let zero4 = `${total4}`
let zero5 = `${total5}`
let zero6 = `${total6}`
let zero7 = `${total7}`
let zero8 = `${total8}`
let zero9 = `${total9}`
let zero10 = `${total10}`
let zero11 = `${total11}`
let zero12 = `${total12}`

let pescar4 = `
*${htjava} Resultados de pesca ${pescarUsuario} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
*BONO: +1 Tiketcoin*
`.trim()
user.paus += total1
user.kepiting += total2
user.gurita += total3
user.cumi += total4 
user.buntal += total5
user.dory += total6
user.lumba += total7
user.lobster += total8
user.hiu += total9
user.udang += total10
user.ikan += total1
user.orca += total2
user.umpan -= total13
user.tiketcoin += 1  


setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} 𝙃𝙀𝙔 𝙅𝙐𝙀𝙂𝘼 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊 𝘼 𝙋𝙀𝙎𝘾𝘼𝙍!! ${rpgg.emoticon('fishingrod')}`, botdate, null, null, null, null, null, [
[`${rpgg.emoticon('fishingrod')} 𝙋𝙀𝙎𝘾𝘼𝙍 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`, '.pescar']], null)}, 28800000) 
  
setTimeout(() => {
conn.sendHydrated(m.chat, pescar4, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
 conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca3}`, wm, null, null, null, null, null, [
[null, null]], null)}, 28000)
       
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca2}`, wm, null, null, null, null, null, [
[null, null]], null)}, 8000)
  
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca}`, wm, null, null, null, null, null, [
[null, null]], null)}, 0)
user.lastmancingeasy = new Date * 1
  
} else conn.sendButton( m.chat, `𝙈𝙄𝙉𝙄𝙈𝙊 *${carnada[3]}* 𝘿𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 ${carnada[3]} ${rpgshopp.emoticon('umpan')}`, '.buy umpan 150'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 400 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 400']], m)
} else conn.sendButton( m.chat, `𝙎𝙐 *${rpgshop.emoticon('pancingan')}* 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelDelGancho[3]}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[3]} ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 4'], [`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[4]} ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 5']], m)
} else conn.sendButton( m.chat, `𝙎𝙐 *${rpg.emoticon('fishingrod')}* 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelCanaDePescar[3]}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[3]} ${rpgg.emoticon('fishingrod')}`, '.buy pancing 4'], [`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[4]} ${rpgg.emoticon('fishingrod')}`, '.buy pancing 5']], m)
} else return conn.sendButton( m.chat, `𝙔𝘼 𝙁𝙐𝙀 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙀`, `𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀𝙇 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙊:\n${tiempoTotal4}\n\n` + wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m) 
break
  
case 'extreme':
let __temporizador5 = (new Date - user.lastmancingeasy)
let _temporizador5 = (28800000 - __temporizador5)
let tiempoTotal5 = clockString(_temporizador5) 
if (user.level <= 9) return conn.sendButton( m.chat, `${fg}𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙏𝙀𝙉𝙀𝙍 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelUser[4]}*`, `𝙉𝙄𝙑𝙀𝙇 𝘼𝘾𝙏𝙐𝘼𝙇: *${user.level}*\n` + wm, [[`𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝙈𝙄 𝙉𝙄𝙑𝙀𝙇 ${rpgg.emoticon('level')}`, `.nivel`]], m)
if (user.stamina < 90) return conn.sendButton( m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙁𝙄𝙀𝙉𝙏𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼. 𝙈𝙄𝙉𝙄𝙈𝙊 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼𝙎 𝙐𝙉 *${energia[4]}%* 𝘿𝙀 𝙀𝙉𝙀𝙍𝙂𝙄𝘼 ✨`, wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m) 
user.stamina -= 45 * 1  
if (gancho == 0) return conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 10 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 10'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 50 𝘾𝘼𝙍𝙉𝘼𝘿𝘼 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 50']], m)
if (canaDePescar == 0) return conn.sendButton( m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancing')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 1 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝘾𝘼Ñ𝘼 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼𝙍 ${rpgshopp.emoticon('pancing')}`, '.buy pancing 2']], m)
if (carnadaUser == 0) return conn.sendButton(m.chat, `𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 *${rpgshop.emoticon('pancingan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙐𝙉 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 1'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 2 𝙂𝘼𝙉𝘾𝙃𝙊 ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 2']], m) 
if (new Date - user.lastmancingeasy > 28800000) {
if (user.pancing > 4) {
if (user.pancingan > 4) {
if (user.umpan > 199) {
  
let resultado1 = `${Math.floor(Math.random() * 500)}`
let resultado2 = `${Math.floor(Math.random() * 500)}`
let resultado3 = `${Math.floor(Math.random() * 500)}`
let resultado4 = `${Math.floor(Math.random() * 500)}`
let resultado5 = `${Math.floor(Math.random() * 500)}`
let resultado6 = `${Math.floor(Math.random() * 500)}`
let resultado7 = `${Math.floor(Math.random() * 500)}`
let resultado8 = `${Math.floor(Math.random() * 500)}`
let resultado9 = `${Math.floor(Math.random() * 500)}`
let resultado10 = `${Math.floor(Math.random() * 500)}`
let resultado11 = `${Math.floor(Math.random() * 500)}`
let resultado12 = `${Math.floor(Math.random() * 500)}`
let resultado13 = `${Math.floor(Math.random() * 200)}`

let total1 = (resultado1 * 1)
let total2 = (resultado2 * 1) 
let total3 = (resultado3 * 1)
let total4 = (resultado4 * 1)
let total5 = (resultado5 * 1)
let total6 = (resultado6 * 1)
let total7 = (resultado7 * 1)
let total8 = (resultado8 * 1)
let total9 = (resultado9 * 1)
let total10 = (resultado10 * 1)
let total11 = (resultado11 * 1)
let total12 = (resultado12 * 1)
let total13 = (resultado13 * 1)

let zero1 = `${total1}`
let zero2 = `${total2}`
let zero3 = `${total3}`
let zero4 = `${total4}`
let zero5 = `${total5}`
let zero6 = `${total6}`
let zero7 = `${total7}`
let zero8 = `${total8}`
let zero9 = `${total9}`
let zero10 = `${total10}`
let zero11 = `${total11}`
let zero12 = `${total12}`

let pescar5 = `
*${htjava} Resultados de pesca ${pescarUsuario} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
*BONO: +1 Tiketcoin*
`.trim()
user.paus += total1
user.kepiting += total2
user.gurita += total3
user.cumi += total4 
user.buntal += total5
user.dory += total6
user.lumba += total7
user.lobster += total8
user.hiu += total9
user.udang += total10
user.ikan += total1
user.orca += total2
user.umpan -= total13
user.tiketcoin += 1  

setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} 𝙃𝙀𝙔 𝙅𝙐𝙀𝙂𝘼 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊 𝘼 𝙋𝙀𝙎𝘾𝘼𝙍!! ${rpgg.emoticon('fishingrod')}`, botdate, null, null, null, null, null, [
[`${rpgg.emoticon('fishingrod')} 𝙋𝙀𝙎𝘾𝘼𝙍 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`, '.pescar']], null)}, 28800000) 
  
setTimeout(() => {
conn.sendHydrated(m.chat, pescar5, wm, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
 conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca3}`, wm, null, null, null, null, null, [
[null, null]], null)}, 28000)
       
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca2}`, wm, null, null, null, null, null, [
[null, null]], null)}, 8000)
  
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} ${mensajePesca}`, wm, null, null, null, null, null, [
[null, null]], null)}, 0)
user.lastmancingeasy = new Date * 1
  
} else conn.sendButton( m.chat, `𝙈𝙄𝙉𝙄𝙈𝙊 *${carnada[4]}* 𝘿𝙀 *${rpgshop.emoticon('umpan')}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 ${carnada[4]} ${rpgshopp.emoticon('umpan')}`, '.buy umpan 200'], [`𝘾𝙊𝙈𝙋𝙍𝘼𝙍 800 ${rpgshopp.emoticon('umpan')}`, '.buy umpan 800']], m)
} else conn.sendButton( m.chat, `𝙎𝙐 *${rpgshop.emoticon('pancingan')}* 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelDelGancho[4]}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[4]} ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 5'], [`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[5]} ${rpgshopp.emoticon('pancingan')}`, '.buy pancingan 6']], m)
} else conn.sendButton( m.chat, `𝙎𝙐 *${rpg.emoticon('fishingrod')}* 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼 𝙀𝙇 𝙉𝙄𝙑𝙀𝙇 *${nivelCanaDePescar[4]}* 𝙋𝘼𝙍𝘼 𝙋𝙀𝙎𝘾𝘼𝙍`, wm, [[`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[4]} ${rpgg.emoticon('fishingrod')}`, '.buy pancing 5'], [`𝙎𝙐𝘽𝙄𝙍 𝘼𝙇 𝙉𝙄𝙑𝙀𝙇 ${nivelCanaDePescar[5]} ${rpgg.emoticon('fishingrod')}`, '.buy pancing 6']], m)
} else return conn.sendButton( m.chat, `𝙔𝘼 𝙁𝙐𝙀 𝘿𝙀 𝙋𝙀𝙎𝘾𝘼 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙀`, `𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀𝙇 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙊:\n${tiempoTotal5}\n\n` + wm, [[`𝗠 𝗘 𝗡 𝗨 ☘️`, `.menu`]], m) 
break
  
default:
return await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )}
} catch (e) {
await conn.reply(m.chat, 'Error', m)
console.log(e)
}}

handler.help = ['fishing <args>']
handler.tags = ['rpg']
handler.command = /^(fishing|mancing|pescar)$/i
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}