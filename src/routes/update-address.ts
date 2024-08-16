import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

export const paramsSchema = z.object({
    addressId: z.string().uuid(),
});

export const addressSchema = z.object({
    cep: z.coerce.string().min(8),
    street: z.string().min(4),
    number: z.coerce.number().min(1),
    complement: z.string().default(''),
    neighborhood: z.string().min(4),
    city: z.string().min(4),
    uf: z.string().min(2),
});

export async function updateAddress(request: Request, response: Response) {
    try {
        const { cep, city, complement, neighborhood, number, street, uf } = addressSchema.parse(request.body);
        const { addressId } = paramsSchema.parse(request.params);

        const address = await prisma.address.findUnique({
            where: { id: addressId },
        });

        if (!address) {
            throw new ClientError('AddressUser not found');
        }

        await prisma.address.update({
            where: { id: addressId },
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

        response.send({ addressId: address.id });
    } catch (error) {
        errorHandler(error, response);
    }
}
