import { Express, Request, Response } from 'express';
import { paramsSchema } from '_types/schema.js';
import { prisma } from '@lib/prisma.js';

export function getAddress(app: Express) {
    app.get('/user/:userId', async (request: Request, response: Response) => {
        const { userId } = paramsSchema.parse(request.params);

        const addressUser = await prisma.addressUser.findUnique({
            where: { id: userId },
        });

        if (!addressUser) {
            throw new Error('AddressUser not found');
        }

        response.send({ addressUser: addressUser });
    });
}
