module.exports = {
  config: {
    name: "bby",
    version: "1.0",
    author: "dipto",
    role: 0,
    description: {
      en: "Responds with a random message for the exact 'bby' message only."
    },
    category: "System",
    guide: {
      en: "Just type 'bby' without any additional text."
    }
  },

  onStart: async function () {},

  onChat: async function ({ api, event, message }) {
    const dipto = event.body.toLowerCase().trim();

    // Respond only if the message is exactly "bby"
    if (dipto === "bby") {
      const tl = [
        "𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺",
        "𝗕𝗯𝘆 না জানু, বল 😌",
        "বেশি bby Bbby করলে leave নিবো কিন্তু 😒😒",
        "__বেশি বেবি বললে কামুর দিমু 🤭🤭",
        "𝙏𝙪𝙢𝙖𝙧 𝙜𝙛 𝙣𝙖𝙞, 𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤? 😂😂😂",
        "𝗕𝗯𝘆 না বলে 𝗕𝗼𝘄 বলো 😘",
        "এই এই তোর পরীক্ষা কবে? শুধু 𝗕𝗯𝘆 𝗯𝗯𝘆 করিস 😾",
        "তোরা যে হারে 𝗕𝗯𝘆 ডাকছিস আমি তো সত্যি বাচ্চা হয়ে যাবো_☹😑",
        "আমার সোনার বাংলা, তারপরে লাইন কি? 🙈",
        "🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲",
        "হটাৎ আমাকে মনে পড়লো 🙄",
        "𝗛𝗲𝘆 𝗛𝗮𝗻𝗱𝘀𝗼𝗺𝗲 বলো 😁😁",
        "আরে Bolo আমার জান, কেমন আসো? 😚",
        "একটা 𝑩𝑭 খুঁজে দাও 😿",
        "ফ্রেন্ড রিকোয়েস্ট দিলে ৫ টাকা দিবো 😗",
        "৩২ তারিখ আমার বিয়ে 🐤",
        "আগে একটা গান বলো, ☹ নাহলে কথা বলবো না 🥺",
        "বলো কি করতে পারি তোমার জন্য 😚",
        "°কথা দেও আমাকে পটাবা...!! 😌",
        "বার বার Disturb করেছিস কোনো 😾, আমার জানু এর সাথে ব্যাস্ত আসি 😋",
        "আমাকে না দেকে একটু পড়তেও বসতে তো পারো 🥺🥺",
        "বার বার ডাকলে মাথা গরম হয় কিন্তু 😑😒",
        "ওই তুমি single না?🫵🤨 😑😒",
        "বলো জানু 🌚",
        "কি হলো, মিস টিস করচ্ছিস নাকি 🤣",
        "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈",
        "আজকে আমার মন ভালো নেই 🙉"
      ];

      // Select a random response from the list
      const rand = tl[Math.floor(Math.random() * tl.length)];

      // Send the single random response
      await message.reply(rand);
    }
  }
};
