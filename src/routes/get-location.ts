import { Request, Response } from 'express';
import { prisma } from '@/lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

const paramsSchema = z.object({
    addressId: z.string().uuid(),
});

export async function getLocation(request: Request, response: Response) {
    try {
        const { addressId } = paramsSchema.parse(request.params);

        const location = await prisma.address.findUnique({
            where: { id: addressId },
            select: {
                city: true,
                uf: true,
            },
        });

        if (!location) {
            throw new ClientError('Location not found');
        }

        response.send({ userLocation: location });
    } catch (error) {
        errorHandler(error, response);
    }
}
