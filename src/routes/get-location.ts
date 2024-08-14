import { Request, Response } from 'express';
import { prisma } from '@/lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

const paramsSchema = z.object({
    userId: z.string().uuid(),
});

export async function getLocation(request: Request, response: Response) {
    try {
        const { userId } = paramsSchema.parse(request.params);

        const addressUser = await prisma.addressUser.findUnique({
            where: { id: userId },
            select: {
                city: true,
                uf: true,
            },
        });

        if (!addressUser) {
            throw new ClientError('AddressUser not found');
        }

        response.send({ userLocation: addressUser });
    } catch (error) {
        errorHandler(error, response);
    }
}
