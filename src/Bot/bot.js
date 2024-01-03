import { Telegraf } from "telegraf";
const TOKEN = "6778650407:AAH2VCPuFpry86XFHutV2iH4UXZj2ZhZDHw";
const bot = new Telegraf(TOKEN);

const web_link = "https://keno-eth.onrender.com/";

bot.start((ctx) =>
  ctx.reply("Welcome: click on the menu to start the webapp.", {
    reply_markup: {
      keyboard: [[{ text: "Keno", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
