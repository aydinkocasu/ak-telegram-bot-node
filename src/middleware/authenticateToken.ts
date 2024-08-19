import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/tokenService";

export async function authenticateToken(req: Request, res: Response, next: NextFunction): Promise<any> {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ error: 'Authorization header is required' });
	}

	const token = authHeader.split(' ')[1];

	const verified = verifyToken(token);
	if (!verified) {
		return res.status(403).json({ message: 'Invalid Token' });
	}

	//req.user = verified;
	next();
} 
