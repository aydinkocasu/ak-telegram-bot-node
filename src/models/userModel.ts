import { RND_User } from "../types/interfaces";
import pool from "../config/db";

export class UserModel {
	static async createUser(user: RND_User): Promise<void> {
		const query = 'INSERT INTO users (telegram_id, password, created_at) VALUES ($1, $2, $3) RETURNING id, telegram_id, created_at;'
		const values = [user.telegram_id, user.password, user.created_at]

		try {
			const db_response = await pool.query(query, values)
			return db_response.rows[0]
		} catch (err: any) {
			console.error('Error inserting user: ', err);
			throw new Error('Database error occurred while creating user')
		}
	}

	static async findUserByTelegramId(telegram_id: number) {
		const query = 'SELECT password, is_admin FROM users WHERE telegram_id = $1;'
		const values = [telegram_id]

		try {
			const db_response = await pool.query(query, values)
			return db_response.rows[0] || null;
		} catch (err: any) {
			console.error('Error finding user by Telegram ID: ', err);
			throw new Error('Database error occurred while finding user')
		}
	}

	static async getAllUsers() {
		//const query = 'SELECT * FROM users WHERE is_admin = false;';
		const query = 'SELECT * FROM users; ';
		try {
			const db_response = await pool.query(query)
			return db_response.rows as RND_User[];
		} catch (err) {
			throw new Error('Database error occured while getting all the users');
		}
	}

	static async makeUserAdmin(telegram_id: number) {
		const query = 'UPDATE users SET is_admin = true WHERE telegram_id = $1;'
		const values = [telegram_id]

		try {
			const db_response = await pool.query(query, values)
			return db_response.rows[0] || null;
		} catch (err: any) {
			console.error('Error finding user by Telegram ID: ', err);
			throw new Error('Database error occurred while finding user')
		}
	}
}
