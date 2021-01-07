const TelegramBot = require("node-telegram-bot-api");

const token = "1479428368:AAFXXVv0hviDNyY0IPbrDorbLV7F96LfKBI";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(msg.text);
  bot.sendMessage(chatId, "Obrigado por sua mensagem");
});
