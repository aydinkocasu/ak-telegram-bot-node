# Telegram Bot Backend

## Live Version
 [Telegram Bot](https://t.me/aydin_kocasu_bot)

## Description

This project is a Telegram bot backend built using Node.js and PostgreSQL. The bot includes various commands for user interaction, including starting the bot, sending admin messages, listing users, and more.

## Features

- **Start Command**: The bot greets the user and provides a link to a web app.
- **Admin Commands**: 
  - `/adminhello <telegram_id> <text>`: Sends a message from the admin to the specified Telegram user.
  - `/listusers`: Lists all users in the database.
  - `/adminrequest`: Allows a user to request admin status by providing a password.
- **Help Command**: Lists all available commands.
- **Unknown Command Handling**: Provides feedback when a user enters an unknown command.

## Prerequisites

To run this project locally, you will need:

- **Node.js**: Install from [Node.js official site](https://nodejs.org/).
- **npm**: Comes with Node.js, used to install dependencies.
- **PostgreSQL**: Ensure PostgreSQL is installed and configured. If not, you can find installation instructions online.

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

  ```bash
  git clone https://github.com/your_username/your_repo.git
  cd your_repo
  ```

### 2. Install Dependencies

  ```bash
  npm install
  ```

### 3. Configure Environment Variables
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_db_name
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
ADMIN_PASSWORD=your_admin_password
WEB_APP_URL=http://localhost:5173
```
### 4. Start the bot
Start the bot with the following command:
```
npm start
```
You should see Bot is running... in your console, indicating that the bot is active.

## Usage
The bot supports the following commands:

- /start: Starts the bot and sends a greeting along with a link to the web app.
- /adminhello <telegram_id> <text>: Sends a message from the admin to the specified user.
- /listusers: Lists all registered users.
- /adminrequest: Prompts the user to enter the admin password to gain admin privileges.
- /help: Displays a list of available commands.
- Unknown Commands: If an unrecognized command is entered, the bot will respond with an appropriate message.
