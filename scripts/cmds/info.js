const fs = require('fs'); const moment = require('moment-timezone'); module.exports = { config: { name: "info", version: "1.0", countDown: 20, role: 0, shortDescription: { vi: "", en: "" }, longDescription: { vi: "", en: "" }, category: "owner", guide: { en: "owner" }, envConfig: {} }, onStart: async function ({ message }) { const botName = "𝙼𝙰𝚃𝙴𝙾"; const Prefix = "?"; const authorName = "ITZ GERALD MAX"; const ownAge = "14 yrs"; const teamName = "M A T E O TEAM"; const authorFB = "www.fb.com/61560951290111"; const urls = JSON.parse(fs.readFileSync('Mateo.json')); const link = urls[Math.floor(Math.random() * urls.length)]; const now = moment().tz('Africa/lagos'); const date = now.format('MMMM Do YYYY'); const time = now.format('h:mm:ss A'); const uptime = process.uptime(); const seconds = Math.floor(uptime % 60); const minutes = Math.floor((uptime / 60) % 60); const hours = Math.floor((uptime / (60 * 60)) % 24); const days = Math.floor(uptime / (60 * 60 * 24)); const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`; message.reply({ body: `╭──────────────◯
\│⏥『 BOT-INFO 』⏥
\│■ BOT-NAME: ${botName}
\│■ BOT-PREFIX: ${prefix}
\│■ BOT-VERSION: ${global.Goatbot.package.version}
\│■ BOT-UPTIME: ${uptimeString}
\│■ DATE: ${date}
\│■ TIME: ${time}
\┣━━━━━━━━━━━━━┫
\│『 OWNER-INFO 』
\│❐ NAME: ${authorName}
\│❐ AGE: ${ownAge}
\│❐ GENDER: MaLe
\│❐ STATUS: single 
\│❐ FACEBOOK: ${authorFB}
\│❐ WHATSAPP: wa.me/+23408121662697
\┣━━━━━━━━━━━━━┫
\│『 SUPPORT 』
\│✧ JOIN US ON WHATSAPP ON OUR SUPPORT GROUP 
\│✧ YOU CAN ALSO JOIN US ON FACEBOOK
\│✧ WHATSAPP SUPPORT GC: 
\│✧ FACEBOOK SUPPORT GC: 
\ TEAM: ${teamName}
\╰──────────────◯
\===============`, attachment: await global.utils.getStreamFromURL(link) }); }, onChat: async function({ event, message, getLang }) { if (event.body && event.body.toLowerCase() === "info") { this.onStart({ message }); } } };e, getLang }) { if (event.body && event.body.toLowerCase() === "info") { this.onStart({ message }); } } };
