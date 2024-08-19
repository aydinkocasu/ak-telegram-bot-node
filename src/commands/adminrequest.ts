import TelegramBot from "node-telegram-bot-api";
import { config } from "../config/config";
import { UserModel } from "../models/userModel";

export async function adminReqeust(bot: TelegramBot, msg: TelegramBot.Message) {
	const chat_id = msg.chat.id;
	const user_id = msg.from?.id;

	if (!user_id || !msg.text) return;

	const user = await UserModel.findUserByTelegramId(user_id);

	if (user.is_admin) {
		await bot.sendMessage(chat_id, "You are already an admin.");
		return;
	} else {
		bot.sendMessage(chat_id, "Please enter the admin password:");

		const passwordListener = async (responseMsg: TelegramBot.Message) => {
			if (responseMsg.chat.id !== chat_id) return;

			const password = responseMsg.text;

			if (password === config.adminPassword) {
				await UserModel.makeUserAdmin(user_id);
				await bot.sendMessage(chat_id, "You are now an admin!");
			} else {
				await bot.sendMessage(chat_id, "Incorrect password. You are not an admin.");
			}

			bot.removeListener('message', passwordListener);
		};

		bot.on('message', passwordListener);
	}
}
