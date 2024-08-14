import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

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
    try {
        const { cep, city, complement, neighborhood, number, street, uf } = addressSchema.parse(request.body);
        const { userId } = paramsSchema.parse(request.params);

        const addressUsers = await prisma.addressUser.findUnique({
            where: { id: userId },
        });

        if (!addressUsers) {
            throw new ClientError('AddressUser not found');
        }
        const updateAddress = await prisma.addressUser.update({
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

        if (!updateAddress) {
            throw new ClientError('Address not update');
        }
        response.send({ userId: addressUsers.id });
    } catch (error) {
        errorHandler(error, response);
    }
}
