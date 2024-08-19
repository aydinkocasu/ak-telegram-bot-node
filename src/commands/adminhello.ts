import TelegramBot from "node-telegram-bot-api";
import { COMMANDS } from "../constants/messages";
import { UserModel } from "../models/userModel";

export async function adminHelloCommand(bot: TelegramBot, msg: TelegramBot.Message) {
	const chat_id = msg.chat.id;
	const admin_id = msg.from?.id;

	if (!admin_id || !msg.text) return;

	const parts = msg.text.split(' ').slice(1)

	if (parts.length < 2) {
		bot.sendMessage(chat_id, COMMANDS.ADMIN_HELLO_USAGE)
		return;
	}

	const telegram_id = +parts[0];
	const text = parts.slice(1).join(' ');


	const admin_user = await UserModel.findUserByTelegramId(admin_id);

	if (!admin_user || !admin_user.is_admin) {
		bot.sendMessage(chat_id, COMMANDS.NOT_AUTHORIZED);
		return;
	}

	bot.sendMessage(telegram_id, text);
}

