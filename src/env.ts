import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
    PG_DATABASE_URL: z.string().url(),
    MD_DATABASE_URL: z.string().url(),
    PORT: z.coerce.number().default(3333),
});

export const env = envSchema.parse(process.env);
