const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"MR.AYAN",// Convert By Goatbot MR.AYAN 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝘽𝘼𝘿𝘽𝙊𝙔',
      gender: 'Male',
      age: '20',
      height: 'secret',
      facebookLink: '𝙐𝙎𝙀 𝙆𝙊𝙍𝙄 𝙉𝘼',
      nick: '𝘽𝘼𝘿𝘽𝙊𝙔'
    };

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.gif');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
Owner Information:🧾
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Nick: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('✅', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
