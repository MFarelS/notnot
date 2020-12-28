/*Codded by Tahta Bot

Special Thanks:
Fazone
Sanzking
Dimasdm
Galuh
*/

const Asena = require("../events");
const {MessageType} = require("@adiwajshing/baileys");

Asena.addCommand({pattern: 'help ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {
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
╠══✪〘 FOR SELF 〙✪══
║ *======= GROUP MENU =======*
╠➥ *.add* [.add 628xxxxxxxx]
╠➥ *.ban* [.ban @tag]
╠➥ *.promote* [.promote @tag]
╠➥ *.demote* [.demote @tag]
╠➥ *.tagall*
╠➥ *.mute*
╠➥ *.unmute*
╠➥ *.invite*
╠➥ *.filter* [.filter "kata"]
╠➥ *.stop* [.stop "kata"]
╠➥ *.kickme*
║
║ *======= OTHER MENU =======*
╠➥ *.afk*
╠➥ *.pp*
╠➥ *.block*
╠➥ *.unblock*
╠➥ *.speedtest*
╠➥ *.ping*
║
║ *=== FUN MENU & FUNCTION ===*
╠➥ *.sticker* [Foto/Video Jadi Stiker]
╠➥ *.trt* [Terjemahan Bahasa]
╠➥ *.currency* [Konversi Mata Uang]
╠➥ *.tts* [Suara Google]
╠➥ *.song* [Unduh Lagu]
╠➥ *.video* [Unduh Video YT]
╠➥ *.wiki* [Cari Pengetahuan]
╠➥ *.img* [Cari Foto Di Google]
╠➥ *.weather* [Kondisi Cuaca]
╠➥ *.tahta* [Logo/Gambar Maker]
╠➥ *.pesanlop* [Logo/Gambar Maker]
╠➥ *.romance* [Logo/Gambar Maker]
╠➥ *.glow* [Logo/Gambar Maker]
║
╠══✪〘 FOR YOUR ALL 〙✪══
║
╠➥ Silahkan Anda Ketik *.menu* Untuk Menampilkan Menu
║Agar Kalian Semua Bisa Memakai Bot Ini :)
║
╚═〘 TAHTA SELF BOT 〙
`);
}));