import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
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

export async function updateAddress(request: Request, response: Response) {
    const { userId } = paramsSchema.parse(request.params);
    const { cep, city, complement, neighborhood, number, street, uf } = addressSchema.parse(request.body);

    const addressUsers = await prisma.addressUser.findUnique({
        where: { id: userId },
    });

    if (!addressUsers) {
        throw new Error('AddressUser not found');
    }

    await prisma.addressUser.update({
        where: { id: userId },
        data: {
            cep,
            city,
            complement,
            neighborhood,
            number,
            street,
            uf,
        },
    });

    response.send({ userId: addressUsers.id });
}
