/*Codded by Tahta Bot

Special Thanks:
Fazone
Sanzking
Dimasdm
Galuh
*/

const Asena = require("../events");
const {MessageType} = require("@adiwajshing/baileys");

Asena.addCommand({pattern: 'menu ?(.*)', fromMe: false, remoteJid: true, deleteCommand: false}, (async (message, match) => {
	await message.sendMessage(`
╔══✪〘 INFORMATION 〙✪══
║
╠➥ TAHTA SELF BOT
╠➥ VERSION : V1.0 notnotLite
╠➥ CREATOR : TAHTA BOT
╠➥ ACTIVE : 24 JAM, 
║KECUALI DATA OFF/
║SINYAL BURIK!
║
╠══✪〘 FOR YOUR ALL 〙✪══
║ *=== FUN MENU & FUNCTION ===*
╠➥ *.stiker* [Foto/Video Jadi Stiker]
╠➥ *.translate* [Terjemahan Bahasa]
╠➥ *.konversi* [Konversi Mata Uang]
╠➥ *.gtts* [Suara Google]
╠➥ *.lagu* [Unduh Lagu]
╠➥ *.vid* [Unduh Video YT]
╠➥ *.ytb* [Search Video YT]
╠➥ *.wiki2* [Cari Pengetahuan]
╠➥ *.image* [Cari Foto Di Google]
╠➥ *.cuaca* [Kondisi Cuaca]
╠➥ *.harta* [Logo/Gambar Maker]
╠➥ *.lop* [Logo/Gambar Maker]
╠➥ *.romantis* [Logo/Gambar Maker]
╠➥ *.glowing* [Logo/Gambar Maker]
║
╚═〘 TAHTA SELF BOT 〙
`, MessageType.text, {quoted: message.data});
}));