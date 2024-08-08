import { z } from 'zod';

export const paramsSchema = z.object({
    userId: z.string().uuid(),
});

export const addressSchema = z.object({
    cep: z.coerce.string().min(8),
    street: z.string().min(4),
    number: z.coerce.number().min(1),
    complement: z.string(),
    neighborhood: z.string().min(4),
    city: z.string().min(4),
    uf: z.string().min(2),
});
