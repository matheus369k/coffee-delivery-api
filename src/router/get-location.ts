import { paramsSchema } from '@/_types/schema.js';
import { prisma } from '@/lib/prisma.js';
import { Express, Request, Response } from 'express';

export function getLocation(app: Express) {
    app.get('/location/:userId', async (request: Request, response: Response) => {
        const { userId } = paramsSchema.parse(request.params);

        const addressUser = await prisma.addressUser.findUnique({
            where: { id: userId },
            select: {
                city: true,
                uf: true,
            },
        });

        if (!addressUser) {
            throw new Error('AddressUser not found');
        }

        response.send({ userLocation: addressUser });
    });
}
