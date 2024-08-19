import dotenv from "dotenv";

dotenv.config();

export const config = {
	telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '',
	webAppUrl: process.env.WEB_APP_URL || 'http://localhost:5173',
	jwtSecret: process.env.JWT_SECRET || '',
	refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || '',
	port: process.env.PORT || 3000,
	DB_HOST: process.env.DB_HOST,
	DB_PORT: process.env.DB_PORT,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME,
	adminPassword: process.env.ADMIN_PASSWORD,
};

if (!config.telegramBotToken) {
	throw new Error('TELEGRAM_BOT_TOKEN is not defined')
}

if (!config.webAppUrl) {
	throw new Error('WEB_APP_URL is not defined')
}

if (!config.jwtSecret) {
	throw new Error('JWT_SECRET is not defined')
}

if (!config.refreshTokenSecret) {
	throw new Error('REFRESH_SECRET is not defined')
}
