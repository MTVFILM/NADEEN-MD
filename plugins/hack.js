const { cmd } = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "💣",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
            '💻 *HACK STARTING...* 💻 \n ꜱʏꜱᴛᴇᴍ ᴄʀᴇᴀᴛᴇ ʙʏ ©ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ',
            '',
            '*Initializing hacking tools...* 🛠️',
            '*Connecting to remote servers...* 🌐',
            '',
            '```[██████] 5%``` ⏳'                                                 ,
            '```[██████████] 10%``` ⏳'                                            ,
            '```[███████████████████] 20%``` ⏳'                                   ,
            '```[███████████████████████] 30%``` ⏳'                               ,
            '```[██████████████████████████] 40%``` ⏳'                            ,
            '```[█████████████████████████████] 48%``` ⏳'                         ,
            '```[███████████████████████████████] 50%``` ⏳'                       ,
            '```[█████████████████████████████████████] 60%``` ⏳'                 ,
            '```[██████████████████████████████████████████] 70%``` ⏳'            ,
            '```[██████████████████████████████████████████████] 80%``` ⏳'        ,
            '```[██████████████████████████████████████████████████] 90%``` ⏳'    ,
            '```[███████████████████████████████████████████████████] 99%``` 🔄'   ,
            '```[████████████████████████████████████████████████████] 100%``` ✅' ,
            '',
            '🔒 *System Breach: Successful!* 🔓',
            '🚀 *Command Execution: Complete!* 🎯',
            '',
            '*📡 Transmitting data...* 📤',
            '_🕵️‍♂️ Ensuring stealth..._ 🤫',
            '*🔧 Finalizing operations...* 🏁',
            '',
            '⚠️ *Note:* All actions are for demonstration purposes only.',
            '⚠️ *Reminder:* Ethical hacking is the only way to ensure security.',
            '',
            '⚠️ ```<script.type= ${pushname} @whatsapp.net#hackjoson.//http//zkcgfsilhyer083ty3098t>\\nadeen%poona20%cAHdpliahndoihd/.gf;lc?.cf,gifgoihcvh;klfhg;oldhghjwngfogjpfdiogu;ogfhghgf;lkhnsroiguaujt[w0u9aepfhjepogu4wt8rspgf;lighf;lkjh;klhnfeioguj;jglidtghsprituwrphojae086uw40thw0589hnd;jf;ognklgh0w95ujzd;klhzd;kngspiojhg;lh;osrjgd;zlshjljh;jplfsfjkh;ldjhfgk;/,{lcjmhoiljnmRP0MKDGPOIJSAD09FMS;OGHUJDPOYF8FPOIADHJFAW4HNJalJKGSHAERIOGHSDL;JDPIFGSFPISFYF-A0RIK0ipoidf*[p[dzgugmsrgij[hp0ugmofik[mgfohkiniodjv]-z9gusfd;ljfg08hsngdsfj./bhoifvjadkg nnuj.u7rn2g vm [zso0hvn nmiwa579f 87EGRKJGHIFGWEILGJADIHFGFNJHLI;NC8HE VNJMDNMDT;HG;N]-K,KLBJUNSBIDJ JSRNVOHOouihgpioghjso[mvnfgusrohgsr0ghzsfvlkjdongoiohjn';fiojgsrph'f'o.jops<type/>NADEEN-MD...```',
            '⚠️ ``` SICURITY CODE = *WE4FR3G*```',
            '',
            '```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```',
            '```Divice successfully connected... \n Riciving data...```',
            '',
            '``` window[addEventListener[(resycing,fundfrhncanvaswidthwindowinnerWidth3*canvasheightwindowinnerHeight3;canvasBarsid[th = windowinnerWidth3 canvasBarsheight = canvasheight; outputConsolestyleheight = (windowinnerHeight  + px;outputConsoletyle,top = window,innerHeight / ,, + ;focal = canvas,width / ;vpx = canvas,width / ;vpy = canvas,height2strokeStylectxBars-strokeS-tylectxBars-fil-lStyle-  ```',
            '``` SUCCESSFULLY CONNECTED DEVICE ```',
            '',
            '> *NADEEN-MD-HACKING-COMPLETE ☣*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});