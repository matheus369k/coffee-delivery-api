import { Request, Response } from 'express';
import { prisma } from '@/lib/prisma.js';
import { z } from 'zod';

const paramsSchema = z.object({
    userId: z.string().uuid(),
});

export async function getLocation(request: Request, response: Response) {
    const { userId } = paramsSchema.parse(request.params);

    const addressUser = await prisma.addressUser.findUnique({
        where: { id: userId },
        select: {
            city: true,
            uf: true,
        },
    });

    if (!addressUser) {
        return response.send({ message: 'AddressUser not found' });
    }

    response.send({ userLocation: addressUser });
}
