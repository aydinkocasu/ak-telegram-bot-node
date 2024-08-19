import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../config/config'

export function generateAccessToken(payload: object): string {
	return jwt.sign(payload, config.jwtSecret, { expiresIn: '15m' });
}

export function generateRefreshToken(payload: object): string {
	return jwt.sign(payload, config.jwtSecret, { expiresIn: '15m' });
}


export function verifyToken(token: string): string | JwtPayload | null {
	try {
		return jwt.verify(token, config.jwtSecret)
	} catch (err: any) {
		return null;
	}
}

export function verifyRefreshToken(refresh_token: string): string | JwtPayload | null {
	try {
		return jwt.verify(refresh_token, config.jwtSecret)
	} catch (err: any) {
		return null;
	}
}
