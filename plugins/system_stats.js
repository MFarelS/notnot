/*Codded by Tahta Bot

Special Thanks:
Fazone
Sanzking
Dimasdm
Galuh
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'info', fromMe: true, deleteCommand: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    await message.sendMessage(
        '```Selamat Datang Di Bot Pribadi By NotnotBot...```\n\n*Version:* ```'+Config.VERSION+'```\n' , MessageType.text
    );
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, deleteCommand: false, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));