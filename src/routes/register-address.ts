import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import { ClientError } from '@/errors/client-error.js';
import { errorHandler } from '@/error-handler.js';

const addressSchema = z.object({
    cep: z.string().min(8),
    street: z.string().min(4),
    number: z.coerce.number().min(1),
    complement: z.optional(z.string()),
    neighborhood: z.string().min(4),
    city: z.string().min(4),
    uf: z.string().min(2),
});

export async function registerAddress(request: Request, response: Response) {
    try {
        const { cep, city, complement = '', neighborhood, number, street, uf } = addressSchema.parse(request.body);

        const address = await prisma.address.create({
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

        if (!address) {
            throw new ClientError('Address not create');
        }

        response.send({ addressId: address.id });
    } catch (error) {
        errorHandler(error, response);
    }
}
