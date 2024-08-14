import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';

const addressSchema = z.object({
    cep: z.coerce.string().min(8),
    street: z.string().min(4),
    number: z.coerce.number().min(1),
    complement: z.string(),
    neighborhood: z.string().min(4),
    city: z.string().min(4),
    uf: z.string().min(2),
});

export async function registerAddress(request: Request, response: Response) {
    const { cep, city, complement, neighborhood, number, street, uf } = addressSchema.parse(request.body);

    const addressUser = await prisma.addressUser.create({
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

    if (!addressUser) {
        return response.send({ message: 'AddressUser not create' });
    }

    response.send({ addressUserId: addressUser.id });
}
