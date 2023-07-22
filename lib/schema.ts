import { z } from 'zod';

export const messageSchema = z
	.string()
	.min(1, { message: `Cannot leave this field empty!` });
