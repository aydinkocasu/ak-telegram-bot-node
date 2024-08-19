import TelegramBot from "node-telegram-bot-api";
import { UserModel } from "../models/userModel";
import { config } from "../config/config";

export async function startCommand(bot: TelegramBot, msg: TelegramBot.Message) {
	const chat_id = msg.chat.id;
	const first_name = msg.chat.first_name || 'first name';

	const existingUser = await UserModel.findUserByTelegramId(chat_id);

	if (!existingUser) {
		await UserModel.createUser({
			telegram_id: chat_id,
			password: '',
			created_at: new Date()
		})
	}

	const welcome_message = `Hello ${first_name}! Welcome ${existingUser ? 'back again' : ''} to our bot.`

	bot.sendMessage(chat_id, welcome_message, {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: "Open web app",
						url: `${config.webAppUrl}?name=${encodeURIComponent(first_name)}`
					}
				]
			]
		}
	})
}
