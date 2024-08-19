import TelegramBot from "node-telegram-bot-api";
import { UserModel } from "../models/userModel";
import { ADMIN_COMMANDS, USER_COMMANDS } from "../constants/commands";

export async function helpCommand(bot: TelegramBot, msg: TelegramBot.Message) {
	const chat_id = msg.chat.id
	const user_id = msg.from?.id

	if (!user_id) return;

	const user = await UserModel.findUserByTelegramId(user_id);

	let message = USER_COMMANDS;

	if (user && user.is_admin) message = ADMIN_COMMANDS;

	bot.sendMessage(chat_id, message)
}
