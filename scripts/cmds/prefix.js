module.exports = {
 config: {
   name: "prefix",
   version: "1.0",
   author: "𝗥𝗼𝗖𝗞 𝗘𝘅𝗘",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `𝗛𝗲𝗹𝗹𝗼 𝗱𝗲𝗮𝗿 🐤\n\n𝗠𝘆 𝗽𝗿𝗲𝗳𝗶𝘅 𝗶𝘀  [ ! ]\n\n______________________________\n\n𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘?\nexample please type: !help - to view sure cmds\n!owner\n!anivid\n!ping\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥: 𝗥𝗼𝗖𝗞 𝗘𝘅𝗘 ツ\n______________________________
`,
  attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/Qxc3t9rz/download.gif")
 });
 }
 }
} 
