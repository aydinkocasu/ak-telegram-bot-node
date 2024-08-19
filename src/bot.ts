import TelegramBot from "node-telegram-bot-api"
import { config } from './config/config'
import { startCommand } from "./commands/starts";
import { adminHelloCommand } from "./commands/adminhello";
import { listUsersCommand } from "./commands/listusers";
import { helpCommand } from "./commands/help";
import { adminReqeust } from "./commands/adminrequest";


export const bot = new TelegramBot(config.telegramBotToken, { polling: true });

console.log('Bot is running...')

bot.onText(/\/start/, async (msg) => { await startCommand(bot, msg) })

bot.onText(/\/adminhello/, async (msg) => { await adminHelloCommand(bot, msg) })

bot.onText(/\/listusers/, async (msg) => { await listUsersCommand(bot, msg) })

bot.onText(/\/help/, async (msg) => { await helpCommand(bot, msg) })

bot.onText(/\/adminrequest/, async (msg) => { await adminReqeust(bot, msg) })

// Handle unknown commands
bot.on('message', async (msg) => {
	const text = msg.text || '';

	const knownCommands = ['/start', '/adminhello', '/listusers', '/help', '/adminrequest'];

	if (text.startsWith('/') && !knownCommands.includes(text.split(' ')[0])) {
		await bot.sendMessage(msg.chat.id, `Unknown command: ${text}. Please use /help to see the list of available commands.`);
	}
});
