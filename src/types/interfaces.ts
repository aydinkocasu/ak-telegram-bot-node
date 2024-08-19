export interface RND_User {
	id?: number;
	telegram_id: number;
	password: string;
	created_at: Date;
	is_admin?: boolean;
}

export interface Token {
	id: number;
	userId: number;
	token: string;
	createdAt: Date;
	expiresAt: Date;
}
