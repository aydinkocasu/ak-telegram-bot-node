export const COMMANDS = {
	ADMIN_HELLO_USAGE: 'Usage: /adminhello <telegram_id> <text>',
	START_WELCOME: (firstName: string) => `Hello ${firstName}! Welcome to our bot.`,
	START_WELCOME_AGAIN: (firstName: string) => `Hello ${firstName}! Welcome back again to our bot.`,
	NOT_AUTHORIZED: 'You are not authorized to use this command.',
	USER_NOT_FOUND: 'User not found.',
	GENERAL_ERROR: 'An error occurred. Please try again later.',
}
