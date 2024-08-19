import TelegramBot from "node-telegram-bot-api";
import { COMMANDS } from "../constants/messages";
import { UserModel } from "../models/userModel";
import { RND_User } from "../types/interfaces";

export async function listUsersCommand(bot: TelegramBot, msg: TelegramBot.Message) {

	const chat_id = msg.chat.id
	const admin_id = msg.from?.id

	if (!admin_id || !msg.text) return;

	const admin_user = await UserModel.findUserByTelegramId(admin_id);

	if (!admin_user || !admin_user.is_admin) {
		bot.sendMessage(chat_id, COMMANDS.NOT_AUTHORIZED);
		return;
	}

	try {
		const users: RND_User[] = await UserModel.getAllUsers()
		if (users.length === 0) {
			bot.sendMessage(chat_id, 'No users found');
			return;
		}

		let message = 'User List:\n';

		users.forEach(users => {
			message += `- Telegram Id: ${users.telegram_id} - Admin:${users.is_admin}\n`
		})

		bot.sendMessage(chat_id, message)
	} catch (err) {
		console.error('Error fetching users:', err);
		bot.sendMessage(chat_id, COMMANDS.GENERAL_ERROR);
	}
}
