const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "QUEEN NETHU-MD";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/G7SDTrF/20241112-203318.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© QUEEN NETHU-MD" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/G7SDTrF/20241112-203318.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_48_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyOSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIwLFxuICAgICAgICA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvU2kvdEJ3Q2tSYmxDQkUxbmhYbWZLZE8vL1B4V1hWMWFlQnI2SDN2NUs0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwQ0h0cDNiN1RXaXVWN096YlViMWJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM0M2JmNzQzLTkwMGItNDUxNy1iODQxLWRkNjI3NmY3NzI2Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAyMjIsXG4gICAgICAyNDMsXG4gICAgICA5NSxcbiAgICAgIDI3LFxuICAgICAgMTk3LFxuICAgICAgMjQzLFxuICAgICAgNDgsXG4gICAgICAxMjksXG4gICAgICAyMDEsXG4gICAgICAyMTIsXG4gICAgICAyMTIsXG4gICAgICAyMTQsXG4gICAgICAyMTksXG4gICAgICAxNTgsXG4gICAgICAxNTcsXG4gICAgICAyMjksXG4gICAgICAyMSxcbiAgICAgIDE0MyxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMjM0LFxuICAgICAgNzQsXG4gICAgICAxOTEsXG4gICAgICAxNixcbiAgICAgIDQ3LFxuICAgICAgNjcsXG4gICAgICAxLFxuICAgICAgOTYsXG4gICAgICAxNyxcbiAgICAgIDI0MCxcbiAgICAgIDE4MixcbiAgICAgIDkxLFxuICAgICAgMTY4LFxuICAgICAgMjQwLFxuICAgICAgODMsXG4gICAgICAxNSxcbiAgICAgIDE4MyxcbiAgICAgIDE3OSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxIVFFFNEdEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDQ3MDMxMDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjc2NDkyNTgyNTEyMzoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVGQyVkFRMXN6VHVRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5pWEtvaldxb1ludTQxUlIvMTh0YTB6YjV3cWdJVnVVOXRRWUpHckx5d2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiclFJU0lLMWFmYUQvZkxGeUo2Sk96cnFQYmpqQWdMZmlYN2JZWFhJNkJuVmt2RGRuQ3VuNStBWXlhU2h4S210R2x3L2RPbWd4UnhGOTl4UHlrSmNxQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwialN4SUI3S2pZSUpUejNyb0dnN0pETjJIODJSV3ZGQzVFNjZwa2xXSGxsWHJ0RjFhVnRDSUQ1dDJSZ1VyMTZ1eWQxOFUzZmJTU1NWNEFtT3VGVUpKRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjQ0NzAzMTA6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE1MjAwODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPdmpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU92ai5qc29uIjogIntcImtleURhdGFcIjpcIi9DTmFqaEEzREpoSk8rekROZFI5S3RxREVwcitoWlJ0clJBU2hPalBNbVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5MjQyMjU5LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw2LDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
  
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "QUEEN NETHU-MD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
