
import { Pool } from 'pg';
import { config } from './config';

const pool = new Pool({
	host: config.DB_HOST,
	port: Number(config.DB_PORT),
	user: config.DB_USER,
	password: config.DB_PASSWORD,
	database: config.DB_NAME,
});

pool.on('connect', () => {
	console.log('Connected to the database');
});

pool.on('error', (err) => {
	console.error('Error connecting to the database:', err);
});

export default pool;
